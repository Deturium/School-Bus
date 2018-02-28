<template lang="pug">
header.head
  img.logo(src="../assets/AAA_logo.png")
  ul.nav
    router-link.item(tag="li" to="challenges") challenges
    router-link.item(tag="li" to="scoreboard") scoreboard
    router-link.item(tag="li" to="about") about & news
    router-link.item(tag="li" to="award") award

  img.lifegame(src="../assets/lifegame.png")

  user-info
</template>

<script>
import UserInfo from './UserInfo'

export default {
  components: {
    UserInfo
  }
}
</script>


<style lang="stylus">
.head
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
    color #8E8E8E
    cursor pointer

  .router-link-active
    color white
    font-weight bold
    border-bottom 1px solid white

    &:hover
      color white

  .lifegame
    width 1160px
    margin-bottom 20px
</style>
