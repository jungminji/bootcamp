<template lang="pug">
  #app(v-cloak)
    div(class="options_container")
      div(class="row")
        span(aria-label="성별" class="label gender") 성별
        template(v-for="el in getGender")
          button(type="button"
          class="btn"
          @click="selectGender(el)"
          :name="el"
          :value="el") {{ el === 'male' ? '남성' : '여성' }}
      div(class="row")
        span(aria-label="연령" class="label age") 연령
        template(v-for="el in getAge")
          button(type="button"
          class="btn"
          :name="el"
          :value="el") {{ `${el}대` }}
      div(class="row last")
        span(aria-label="문항" class="label question") 문항
        template(v-for="n in getQuestionLength")
          button(type="button"
          class="btn"
          @click="selectQuestion(n)"
          :name="`question${n}`"
          :value="`question${n}`") {{ `${n}번문항` }}

      div(class="chart_container flex_center")
        h2(class="chart_heading") 상단의 옵션을 선택하면
          br
          | 그래프가 보여집니다.
</template>

<script>
import { surveyData, surveyActionData } from './surveyData.js'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  created() {
    this.updateSurveyData(surveyData);
    this.updateSurveyActionData(surveyActionData);
  },
  computed: {
    ...mapGetters(['getGender', 'getAge', 'getQuestionLength']),
  },
  methods: {
    ...mapActions(['updateSurveyData',
    'updateSurveyActionData',
    'selectGender',
    'selectQuestion']),
  },
}
</script>

<style lang="sass">
@import url('//fonts.googleapis.com/earlyaccess/nanumgothic.css')

[v-cloak]
  display: none

html, body
  font-family: 'Nanum Gothic', sans-serif
  font-size: 10px

#app
  padding: 25px 30px 30px
  background-color: #eee
  max-width: 800px
  box-sizing: border-box
  margin: 0 auto

.row
  margin-bottom: 15px
  &.last
    margin-bottom: 25px

.label
  display: inline-block
  line-height: 30px
  font-size: 1.3rem
  font-weight: bold
  margin-right: 25px
  color: #000

.btn
  width: 72px
  line-height: 30px
  color: #fff
  background-color: rgba(82, 77, 83, 0.5)
  border: none
  border-radius: 3px
  margin-right: 10px
  font-size: 1.1rem
  &:last-child
    margin: 0

.chart_container
  position: relative
  background-color: #fff
  max-width: 740px
  height: 440px

.flex_center
  display: flex
  justify-content: center
  align-items: center

.chart_heading
  font-size: 1.8rem
  text-align: center
  font-weight: bold
  line-height: 1.67
  color: #9b9b9b
</style>
