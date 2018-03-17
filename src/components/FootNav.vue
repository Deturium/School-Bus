<template lang="pug">
footer.foot
  img.lifegame(src="../assets/lifegame.png")
  img.logo(src="../assets/AAA_logo.png")
  p.foot-text &copy; ZJU AAA School-Bus  -  ALL RIGHTS RESERVED.
</template>

<script>
export default {
  name: "foot-nav"
}
</script>

<style lang="stylus">

$max-width = 1160px

.foot
  width $max-width
  margin 50px auto
  margin-bottom 0
  text-align center

  .lifegame
    width $max-width
    margin 20px 0

  .logo
    width 100px
    margin 10px

  .foot-text
    font-size 11px
    font-style italic
</style>
