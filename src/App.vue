<template lang="pug">
div
  popup
  head-nav
  .main-container
    router-view
  foot-nav
</template>

<script>
import HeadNav from './components/HeadNav'
import FootNav from './components/FootNav'
import Popup from './components/Popup'

export default {
	name: 'app',
	components: {
    HeadNav, FootNav, Popup
	}
}
</script>

<style lang="stylus">
body
  background-color #1F1F1F
  color white
  font-size 14px
  font-family: 'Century Gothic', sans-serif;

.main-container
  min-height 80vh
  margin 0 auto
</style>
