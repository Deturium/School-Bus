<template lang="pug">
.m-input
  input.inp(
    :value="value"
    :type="inputType"
    :placeholder="placeholder"
    @input="inputHandle($event.target.value)"
    @keyup.enter="enterHandle"
  )
  hr.line(
    :class="theme && `-${theme}`"
  )
  hr.line.secondline(
    :class="theme && `-${theme}`"
  )
  svg.icon.showpw(
    aria-hidden="true"
    v-if="type === 'password'"
    @click="togglePw()"
  )
    use(xlink:href="#icon-eye")
</template>

<script>
export default {
  name: "m-input",
  props: [
    "value",
    "type",
    "placeholder",
    "theme",
    "keyEnterHandle"
  ],
  data: function() {
    return {
      inputType: this.type ? this.type : "text"
    }
  },
  methods: {
    inputHandle(val) {
      this.$emit('input', val)
    },
    enterHandle() {
      this.keyEnterHandle && this.keyEnterHandle()
    },
    togglePw() {
      this.inputType = this.inputType === 'password' ? 'text' : 'password'
    }
  }
}
</script>

<style lang="stylus" scoped>
.m-input
  display inline-block
  position relative

  >.inp
    display inline-block
    box-sizing border-box
    width 100%
    height 30px
    line-height 30px
    padding 0 10px
    font-family 'GOTHIC'
    font-size 16px
    font-weight bold
    color #ccc
    background-color transparent
    border none
    outline none
    text-align center
    letter-spacing 1px

    &::placeholder
      color #555
      font-weight normal

  >.showpw
    position absolute
    right 5px
    top 10px
    color #ccc
    cursor pointer

  >.line
    position absolute
    left 0
    right 0
    bottom 0
    height 1px
    margin 0
    border none
    background-color #646464

    &.-success
      background-color #558b2f

    &.-error
      background-color #bf3636

  >.secondline
    height 2px
    transform scaleX(0)
    background-color #979797

  >.inp:focus+.line
    visibility hidden

  >.inp:focus~.secondline
    transform scaleX(1)
    transition transform .45s cubic-bezier(.23, 1, .32, 1)
</style>

