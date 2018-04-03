<template lang="pug">
footer.foot
  img.lifegame(src="../assets/lifegame.png")
  img.logo(src="../assets/AAA_logo.png")
  p.foot-text Copyright &copy; 2018 ZJU AAA School-Bus  -  ALL RIGHTS RESERVED.
</template>

<script>
export default {
  name: "foot-nav"
}
</script>

<style lang="stylus">

.foot
  width 100%
  margin 50px auto
  margin-bottom 0
  text-align center
  color #eee

  .lifegame
    width 100%
    margin 20px 0

  .logo
    width 100px
    margin 10px

  .foot-text
    font-size 12px
    font-style italic
</style>
