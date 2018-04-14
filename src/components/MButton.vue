<template lang="pug">
button.m-button(
  :class="theme"
  @click.prevent="clickHandle"
) {{ text }}
</template>

<script>
export default {
  name: "m-button",
  props: [
    "text",
    "theme",
    "clickHandle"
  ],
}
</script>

<style lang="stylus" scoped>
.m-button
  // display inline-flex
  // justify-content center
  // align-items center
  box-sizing border-box
  width 90px
  height 30px
  line-height 30px
  // font-family 'Roboto'
  font-size 14px
  font-weight bold
  border 0
  border-radius 2px
  outline none
  cursor pointer

  color #bbb
  background-color #333333
  &:hover
    background-color #555555

  // remove dashed border in firefox
  &::-moz-focus-inner
    border none

.success
  color #ddd
  background-color #558b2f
  &:hover
    background-color #558b2f

.error
  color #ddd
  background-color #bf3636
  &:hover
    background-color #d62b2b

</style>

