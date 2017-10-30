<template lang="pug">
  main(class="container")
    div(class="chart")
      h2(class="info_text" v-if="!drawChart") 상단의 옵션을 선택하면,
        br
        | 그래프가 보여집니다.
      h2(class="info_text" v-else) 이곳에 차트 표시
</template>
<script>
export default {
  name: 'chart',
  data: () => ({
    chart: null
  }),
  computed: {
    drawChart () {
      return this.chart || false
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  padding-top: 25px
  padding-bottom: 30px
  height: 440px

.chart
  height: 100%
  display: flex
  background-color: #fff
  justify-content: center
  align-items: center
  & .info_text
    text-align: center
    font-size: 18px
    font-weight: bold
    line-height: 1.67
    color: #9b9b9b
</style>

