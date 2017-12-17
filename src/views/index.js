
import Vue from 'vue'

import Layout from '../components/Layout'
import VHeader from '../components/Header'
import VFooter from '../components/Footer'
import News from '../components/News'
import Intro from '../components/Intro'
import Game from '../components/Game'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {
    Layout, VHeader, VFooter, News, Intro
  }
})

new Vue({
  el: '#game-board',
  components: {
    Game
  }
})
