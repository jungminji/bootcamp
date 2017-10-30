<template lang="pug">
  #app
    Navigation
    Chart
        
</template>

<script>
import Navigation from './components/Nav.vue'
import Chart from './components/Chart.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Chart
  }
}
</script>

<style lang="sass">
// Eric meyer's reset
@import './sass/reset'

html, body
  font-family: 'Nanum Gothic', sans-serif

#app
  width: 800px
  height: auto
  box-sizing: border-box
  background-color: #eee
  margin: 0 auto
  padding: 25px 30px 0

</style>
