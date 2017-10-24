/* ------------------
* Execution Context *
------------------- */
/*
  ECMAScript 스펙에 따르면 Execution Context 를
  "실행 가능한 코드를 형상화하고 구분하는 추상적인 개념" 이라고 정의한다.
  좀 더 쉽게 말하면, "Execution Context 는 실행 가능한 코드가 실행되는 환경"
  여기서 말하는 실행 가능한 코드는 아래와 같다.
    - 전역 코드 : 전역 영역에 존재하는 코드
    - Eval 코드 : Eval 함수로 실행되는 코드
    - 함수 코드 : 함수 내에 존재하는 코드

  JS Engine 은 코드를 실행하기 위하여 실행에 필요한 여러가지 정보를 알고 있어야 한다.
  실행에 필요한 여러가지 정보로는
    - 변수 : 전역변수, 지역변수, 매개변수, 객체의 Property
    - 함수 선언
    - 변수의 Scope
    - this
*/
/* eslint-disable */
var name = 'jungmin';

function foo() {
  var cell = '01046771573';

  function bar() {
    var email = 'fdev.jm@gmail.com';
    console.log(name + cell + email);
  }
  bar();
}
foo();
/*
  위 코드를 실행하면 Execution Context Stack 이 생성하고 소멸한다.
  현재 실행 중인 Context 에서 이 Context 와 관련없는 코드(예를 들어 다른 함수)가 실행되면
  새로운 Context가 생성된다. 이 Context 는 Stack 에 쌓이게 되고 Control(제어권)이 이동한다.
  논리적 스택 구조의 Stack 순서로는
    1. Global EC created
    2. foo() EC created
    3. bar() EC created
    4. bar() EC detroyed
    5. foo() EC destroyed
    6. Global EC stays (top level EC)

  @설명
  1. Control(제어권)이 실행 가능한 코드로 이동하면 논리적 스택 구조를 가지는 새로운 EC Stack 이 생성된다.
     Stack 은 LIFO(후입 선출)의 구조를 가지는 나열 주고이다.
  2. Global EC 로 Control(제어권)이 진입하면 Global EC가 생성되고 EC Stack 에 쌓인다.
     Global EC 는 application 이 종료될 때까지 유지된다.
  3. 함수를 호출하면 해당 함수의 EC가 생성되며 직전에 실행된 코드블럭의 EC 위에 쌓인다.
  4. 함수 실행이 끝나면 해당 함수의 EC를 파기하고 직전의 EC에 Control(제어권) 을 반환한다.
*/
/*
  @ EC 의 3가지 객체
  EC 는 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념이지만 물리적으로는 객체의 형태를 가지며 아래의 3가지 Property 를 소유한다.
  
  1. Variable Object (VO / 변수객체)
     EC 가 생성되면 JS Engine 은 실행에 필요한 여러 정보들을 담을 객체를 생성한다.
     이를 Variable Object 라고 한다. Variable Object 는 코드가 실행될 때 Engine 에 의해 참조되며
     코드에서는 접근할 수 없다.
     
     VO 는 아래의 정보를 담는 객체이다.
     - 변수
     - 매개변수(parameter)와 인수 정보(arguments)
     - 함수 선언(함수 표현식을 제외)

     VO는 EC의 Property 이기 때문에 값을 갖는데, 이 값은 다른 객체를 가리킨다.
     그런데 전역 코드 실행시 생성되는 global EC 의 경우와 함수를 실행할 때 생성되는 함수 컨텍스트의 경우,
     가리키는 객체가 다르다. 이는 전역 코드와 함수의 내용이 다르기 때문이다. 예를 들어 전역 코드에는 매개변수가 없지만
     함수에는 매개변수가 있다.
     - Global Context 의 경우
       VO 는 유일하며 최상위에 위치하고 모든 전역 변수, 전역 함수 등을 포함하는 Global Object 를 가르킨다.
       전역 객체는 전역에 선언된 전역 변수와 전역 함수를 Property로 소유한다.
     - 함수 Context 의 경우
       VO 는 Activation Object(활성 객체)를 가르키며 매개변수와 인수들의 정보를 배열의 형태로
       담고 있는 객체는 arguments object 가 추가된다.
*/
