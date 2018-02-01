<template lang="pug">
.top-nav
  img(src="../assets/AAA_logo.png")
  ul.nav
    li.item challenges
    li.item scoreboard
    li.item about & news
    li.item award

  .login
    img(src="../assets/huahuo.png")

</template>

<script>
export default {
  name: "TopNav"
}
</script>

<style lang="stylus">
.top-nav
  position relative
  width 1160px
  margin 40px auto
  text-align center

  >img
    width 200px
    margin 30px

  .nav
    width 600px
    margin 0 auto
    display flex
    justify-content space-between

  .item
    box-sizing border-box
    padding 3px
    list-style none
    text-transform uppercase
    cursor pointer
    color #8E8E8E

    &:hover
      color white
      border-bottom 1px solid white

  .login
    position absolute
    top 30px
    right 40px
    >img
      width 40px
      border-radius 50%
</style>
