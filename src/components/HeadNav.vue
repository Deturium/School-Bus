<template lang="pug">
header.head
  //- for UserInfo
  slot

  img.logo(src="../assets/AAA_logo.png")
  ul.nav
    router-link.item(tag="li" to="/challenges") challenges
    router-link.item(tag="li" to="/scoreboard") scoreboard
    router-link.item(tag="li" to="/about") about & news
    router-link.item(tag="li" to="/award") award

  img.lifegame(src="../assets/lifegame.png")
</template>

<script>
export default {
  name: "head-nav"
}
</script>

<style lang="stylus">

$text-color = #8e8e8e
$text-color-hover = #ffffff

.head
  position relative
  width 100%
  margin 30px auto
  text-align center

  .logo
    width 100px
    margin 20px

  .nav
    width 600px
    margin 20px auto
    padding 0
    display flex
    justify-content space-between

  .item
    padding 3px
    list-style none
    text-transform uppercase
    color $text-color
    cursor pointer

    &:hover
      color $text-color-hover

  .router-link-active
    font-weight bold
    color $text-color-hover
    border-bottom 1px solid $text-color-hover

  .lifegame
    width 100%
</style>
