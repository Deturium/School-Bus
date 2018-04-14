<template lang="pug">
footer.foot-nav
  img.pic(src="../assets/lifegame.png")
  img.logo(src="../assets/AAA_logo.png")
  p.foottext Copyright &copy; 2018 ZJU AAA School-Bus  -  ALL RIGHTS RESERVED.
</template>

<script>
export default {
  name: "foot-nav"
}
</script>

<style lang="stylus">

.foot-nav
  width 100%
  margin 50px auto
  margin-bottom 0
  text-align center
  color #eee

  >.pic
    width 100%
    margin 20px 0

  >.logo
    width 100px
    margin 10px

  >.foottext
    font-size 12px
    font-style italic
</style>
