<template lang="pug">
  #app(v-cloak)
    div(class="options_container")
      div(class="row")
        span(aria-label="성별" class="label gender") 성별
        template(v-for="el in getGender")
          button(type="button"
          class="btn"
          :name="el"
          :value="el") {{ el === 'male' ? '남성' : '여성' }}
      div(class="row")
        span(aria-label="연령" class="label age") 연령
        template(v-for="el in getAge")
          button(type="button"
          class="btn"
          :name="el"
          :value="el") {{ `${el}대` }}
      div(class="row")
        span(aria-label="문항" class="label question") 문항
        template(v-for="n in getQuestionLength")
          button(type="button"
          class="btn"
          :name="`question${n}`"
          :value="`question${n}`") {{ `${n}번문항` }}

      div(class="chart_container")
        h2 상단의 옵션을 선택하면
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
    ...mapActions(['updateSurveyData', 'updateSurveyActionData']),
  },
}
</script>

<style lang="sass">
@import url('//fonts.googleapis.com/earlyaccess/nanumgothic.css')

[v-cloak]
  display: none

html, body
  font-family: 'Nanum Gothic', sans-serif

</style>
