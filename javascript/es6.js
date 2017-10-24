/* ---------------------------------
* let, const and block-level scope *
---------------------------------- */
/*
  대부분의 C-family 언어는 block-level scope 을 지원 하지만
  Javascript 는 function-level scope 을 가진다.

Function-level scope
  함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다.
  즉, 함수 내부에서 선언한 변수는 지역 변수이며, 함수 외부에서 선언한 변수는 모두 전역 변수이다.

Block-level scope
  코드 블럭 내에서 선언된 변수는 코드 블럭 내에서만 유효하며 코드 블럭 외부에서는 참조할 수 없다.
*/

// Using var
/* eslint-disable */
console.log('%c     Using var     ', 'background: #539193; color: #FFF');
console.log(foo); // undefined
var foo = 100;
console.log(foo); // 100
{
  var foo = 500;
}
console.log(foo); // 500
/*
  var 키워드는 중복 선언이 가능하기 때문에 syntax 는 문제가 없다.
  하지만, block-level scope 을 지원하지 않는 javascript 특성 상, 코드블럭 내의 변수 foo 는
  전역변수이기 때문에 새로운 값을 할당하게 된다.
*/


// Using let
console.log('%c     Using let     ', 'background: #539193; color: #FFF');
let un = 300;
{
  let un = 700;
  let deux = 800;
}
console.log(un);  // 300
// console.log(deux);  // Reference Error: deux is not defined
/*
  let 키워드로 선언된 변수는 block-level scope 을 가진다.
*/

console.log('%c     Duplicate declaration     ', 'background: #539193; color: #FFF');
var rassign = 400;
var rassign = 500; // You can

let assignlet = 700;
// let assignlet = 900;  // Uncaught SyntaxError: Identifier 'assignlet' has already been declared


// Hoisting
/*
  Javascript 는 모든 선언(var, let, const, function, function*, class) 을
  Hoisting 한다.
  Hoisting 이란 선언문을 해당 스코프의 선두로 옮기는 것을 말한다.
  하지만, let 키워드로 선언된 변수는 선언문 이전에 참조하면 ReferenceError 를 발생한다.
  (var 키워드로 선언된 변수는 undefined 값을 가진다.)
  
  let 키워드로 선언된 변수는 스코프의 시작에서 변수의 선언까지 Temporal Dead Zone 에 존재하기 때문이다.
*/
console.log(hoist); // undefeind
var hoist;

console.log(tdz); // Uncaught Reference Error: tdz is not defined
let tdz;