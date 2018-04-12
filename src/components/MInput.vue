<template lang="pug">
.m-input
  input(
    :value="value"
    :type="inputType"
    :placeholder="placeholder"
    @input="inputHandle($event.target.value)"
  )
  hr.line(
    :class="type"
  )
  hr.line.focus(
    :class="type"
  )
</template>

<script>
export default {
  name: "m-input",
  props: [
    "value",
    "inputType",
    "type",
    "placeholder"
  ],
  methods: {
    inputHandle(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
.m-input
  display inline-block
  position relative

  >input
    display inline-block
    box-sizing border-box
    width 100%
    height 30px
    line-height 30px
    padding 0 10px
    // font-family 'Roboto'
    font-size 16px
    font-weight bold
    color #ddd
    background-color transparent
    border none
    outline none

  .line
    position absolute
    left 0
    right 0
    bottom 0
    height 1px
    margin 0
    border none
    background-color #646464

  .focus
    height 2px
    transform scaleX(0)
    background-color #979797

  >input:focus+.line
    visibility hidden

  >input:focus~.focus
    transform scaleX(1)
    transition transform .45s cubic-bezier(.23, 1, .32, 1)

  .success
    background-color #558b2f

  .error
    background-color #bf3636
</style>

