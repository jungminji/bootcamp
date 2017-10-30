<template lang="pug">
  nav(role="navigation")
    div(class="btn-group")
      span(class="btn_label") {{ "gender" in surveyData ? '성별' : '' }}
      template(v-for="el in surveyData.gender")
        //- 남성/여성 이외의 성은... 아직 타협되지 않았으므로 배제
        button(@click="toggleGender" :value="el" class="btn") {{ el === 'male' ? '남성' : '여성' }}
    div(class="btn-group")
      span(class="btn_label") {{ "age" in surveyData ? '연령' : '' }}
      template(v-for="el in surveyData.age")
        button(@click="selectAge" :value="el" class="btn") {{ `${el}대` }}
    div(class="btn-group")
      span(class="btn_label") {{ "questions" in surveyData ? '문항' : '' }}
      template(v-for="(el, n) in surveyData.questions")
        button(@click="selectQuestion" :value="el.title" class="btn") {{ `${ n + 1 }번 문항` }}
        
</template>

<script>
export default {
  name: 'nav',
  data: () => ({
    surveyData: null,
    gender: null
  }),
  created () {
    // This is not a best practice. If I could change 'surveyData.js'
    // I would probably use ES6 import export statements
    // 'surveyData.js' is loaded from index.html
    if (!window.surveyData) {
      return alert('Please load surveyData.js !');
    }

    // Assuming already familiar with data structure, fetch into Vue data: surveyData
    this.surveyData = window.surveyData;
  },
  mounted () {
    // Adding screen-reader label, web a11y
    const btnLabels = document.querySelectorAll('.btn_label');
    btnLabels.forEach((el) => {
      el.setAttribute("tabIndex", 0)
      el.setAttribute("aria-label", el.textContent)
    })
  },
  methods: {
    toggleGender (e) {
      console.log(e.target.value)
    },
    selectAge (e) {
      console.log(e.target.value)
    },
    selectQuestion (e) {
      console.log(e.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>

.btn-group
  margin-bottom: 15px
  &:last-child
    margin: 0

.btn_label
  display: inline-block
  line-height: 30px
  font-size: 13px
  font-weight: bold
  color: #000
  margin-right: 25px
.btn
  cursor: pointer
  width: 72px
  line-height: 30px
  border: none
  border-radius: 3px
  background-color: rgba(82, 77, 83, 0.5)
  color: #fff
  box-shadow: none
  margin-right: 10px
  font-size: 11px
  &:last-child
    margin: 0
  &:active
    background-color: #524d53

</style>