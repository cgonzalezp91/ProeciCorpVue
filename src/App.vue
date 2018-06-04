<template>

  <div id="app">
    <!-- <transition-group key> -->
    <pc-header></pc-header>
    <pc-main></pc-main>
    <pc-footer></pc-footer>
    <!-- <transition-group> -->
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1> -->
  </div>
</template>

<script>
import PcHeader from './components/Header.vue'
import PcMain from './components/Mainapp.vue'
import PcFooter from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    PcHeader,
    PcMain,
    PcFooter
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
