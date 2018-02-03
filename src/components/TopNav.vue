<template lang="pug">
.top-nav
  img.logo(src="../assets/AAA_logo.png")
  ul.nav
    li.item.chose challenges
    li.item scoreboard
    li.item about & news
    li.item award

  img.lifegame(src="../assets/lifegame.png")

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
  margin-bottom 0
  text-align center

  .logo
    width 100px
    margin 20px

  .nav
    width 600px
    margin 20px auto
    display flex
    justify-content space-between

  .item
    box-sizing border-box
    padding 3px
    list-style none
    text-transform uppercase
    cursor pointer
    color #8E8E8E

  .chose
    color white
    font-weight bold
    border-bottom 1px solid white

    &:hover
      color white

  .lifegame
    width 1160px
    margin-bottom 20px

  .login
    position absolute
    top 20px
    right 20px
    >img
      width 35px
      border-radius 50%
</style>
