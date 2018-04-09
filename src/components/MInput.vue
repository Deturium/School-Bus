<template lang="pug">
.m-input
  input(
    :value="value"
    :type="type"
    :placeholder="placeholder"
    @input="inputHandle($event.target.value)"
  )
  hr.line
  hr.line.focus
</template>

<script>
export default {
  name: "m-input",
  props: [
    "value",
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

  >label
    display inline-block

  >input
    box-sizing border-box
    width 100%
    height 30px
    padding 0 10px
    font-family 'Roboto'
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
    height 1px
    margin 0
    border none
    background-color #646464

  .focus
    transform scaleX(0)

  >input:focus+.line
    visibility hidden

  >input:focus+.line+.focus
    height 2px
    background-color #979797
    margin-top -1px
    transform scaleX(1)
    transition transform .45s cubic-bezier(.23, 1, .32, 1)

</style>

