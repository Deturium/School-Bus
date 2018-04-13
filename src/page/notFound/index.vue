<template lang="pug">
div
  p.game-tit
    | - LifeGame (404) -

  life-game

  p.game-intro
    | Press 'p' to stop and resume, <br>
    | Left click to toggle cell's life, <br>
    | Right click to log current grid to console.
</template>

<script>
import LifeGame from './LifeGame'

export default {
  name: "notFound",
  components: {
    LifeGame
  }
}
</script>

<style lang="stylus">

@import "../../stylus/mixins"

.game-tit
  title-mixins()
  margin-top 0

.game-intro
  font-size 16px
  line-height 1.8
  color #ccc
  text-align center
</style>
