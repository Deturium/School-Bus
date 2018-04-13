<template lang="pug">
.overlay(
  v-if="isShow"
  @click.self="blurHandle"
)
  .popup
    slot

</template>

<script>

export default {
  name: "popup",
  props: [
    "isShow",
    "blurHandle"
  ],
}
</script>

<style lang="stylus">

$base-z-index = 100
$bg-color = #151515

.overlay
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background-color hsla(0, 0%, 0%, .8)
  z-index $base-z-index

.popup
  position absolute
  top 25%
  left 50%
  transform translate(-50%)

  width 580px

  display flex
  flex-direction column
  justify-content space-between
  align-items center

  background-color $bg-color
  z-index $base-z-index + 1
  border-radius 5px

</style>
