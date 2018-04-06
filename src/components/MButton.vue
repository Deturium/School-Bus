<template lang="pug">
button.m-button(
  @click.prevent="clickHandle"
) {{ text }}
</template>

<script>
export default {
  name: "m-button",
  props: [
    "text",
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
  font-family 'Roboto'
  font-size 14px
  font-weight bold
  border 0
  border-radius 5px
  outline none
  cursor pointer

  // TODO: choose color
  color #f5f5f5
  background-color #9e9e9e

  &:hover
    background-color #bdbdbd
</style>

