<template lang="pug">
div
  top-nav
  play
  foot
</template>

<script>
import TopNav from './components/TopNav'
import Foot from './components/Foot'
import Play from './container/Play'

export default {
	name: 'app',
	components: {
    TopNav, Foot, Play
	}
}
</script>

<style lang="stylus">
body
  background-color #1F1F1F
  color white
  font-size 14px
  font-family: 'Century Gothic', sans-serif;
</style>
