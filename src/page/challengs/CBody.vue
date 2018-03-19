<template lang="pug">
.c-body(
  :style="{order: order}"
)
  h1.meta Check In

  h2.sub-tit Description
  div
    p 本题是传说中的签到题，flag为：AAA{Welcome_to_School_Bus}
    p 获取到flag后(当然这里只要Ctrl+C)，填入下方框框中，提交即可获得本题分数
    p 这里flag都是AAA{...}的格式，如果你做出了任何一个题目，欢迎加入qq群，群号就在flag里面。
    p AAA期待你的加入！

  h2.sub-tit Hint
  div
    p 没有hint

  h2.sub-tit Your Answer
  div
    input.ans-input(value="AAA{this_a_flag}")
    button.ans-button Solved

  h2.sub-tit Completed
  div
    p
      span.name chenyuan
      span.name zuhxs
</template>

<script>
export default {
  name: "c-body",
  props: [
    "order"
  ]
}
</script>

<style lang="stylus">

@import "../../stylus/mixins"

.c-body
  width 100%
  margin 30px auto
  padding 40px
  background-color #181818

  .meta
    margin 0 auto
    text-align center
    font-size 36px
    font-weight bold
    font-style italic
    color #E1C79B

  >div
    width 666px
    margin 15px auto
    padding-left 80px
    // border 1px solid #fff
    font-size 14px

  p
    margin .8em
    // letter-spacing 1px

  .sub-tit
    margin 0 140px
    margin-top 30px
    font-size 24px
    font-weight lighter
    font-style italic
    text-align left

  .ans-input
    input-mixins()
    width 500px
    height 35px
    box-sizing border-box
    padding 4px 10px
    color #181818
    border 1px solid #979797
    // actually height = 25 + 2 * (4 + 1)

  .ans-button
    button-mixins()
    width 80px
    height 35px
    margin-left 20px
    font-style italic
    color #5D8F0A
    background-color transparent
    border 1.5px solid currentColor

    &:hover
      border-color #93ED00

  .name
    margin-right 20px
    font-weight bold
    font-style italic
</style>
