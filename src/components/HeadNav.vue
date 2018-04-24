<template lang="pug">
header.head-nav
  //- for UserInfo
  slot

  img.logonew(src="../assets/AAA_logo_new.png")
  ul.nav
    router-link.item(tag="li" to="/challenges") challenges
    router-link.item(tag="li" to="/scoreboard") scoreboard
    router-link.item(tag="li" to="/about") about & news
    router-link.item(tag="li" to="/award") award
  img.pic(src="../assets/lifegame.png")
</template>

<script>
export default {
  name: "head-nav"
}
</script>

<style lang="stylus">

$text-color = #8e8e8e
$text-color-hover = #ffffff

.head-nav
  position relative
  width 100%
  margin 30px auto
  text-align center

  >.logonew
    width 180px
    margin 5px

  >.nav
    display flex
    justify-content space-between
    width 600px
    margin 20px auto
    padding 0

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

  >.pic
    width 100%
</style>
