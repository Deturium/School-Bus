<template lang="pug">
.q-body
  .meta Check in

  h2.title Description
  div
    p 本题是传说中的签到题，flag为：AAA{Welcome_to_School_Bus}
    p 获取到flag后(当然这里只要Ctrl+C)，填入下方框框中，提交即可获得本题分数
    p 这里flag都是AAA{...}的格式，如果你做出了任何一个题目，欢迎加入qq群，群号就在flag里面。
    p AAA期待你的加入！

  h2.title Hint
  div
    p 没有hint

  h2.title Your Answer
  div
    input.ans-input(value="AAA{this_a_flag}")
    button.ans-button Solved

  h2.title Completed
  div
    p
      span chenyuan
      span zuhxs
</template>

<script>
export default {
  name: "q-body",

}
</script>

<style lang="stylus">
.q-body
  width 1000px
  padding 40px
  background-color #181818
  .meta
    text-align center
    font-size 36px
    font-weight bolder
    color #E1C79B
  .title
    margin 0 20px
    margin-top 30px
    font-style italic
    font-size 36px
  > div
    font-size 16px
    margin-left 72px

  .ans-input
    width 500px
    height 25px
    margin 10px 0
    padding 4px 10px
    border 1px solid #979797
    border-radius 5px
    outline none
    font-size 16px
    font-style italic

  .ans-button
    width 100px
    height 35px
    margin 10px
    margin-left 40px
    vertical-align top
    font-size 16px
    font-style italic
    color #5D8F0A
    border 1px solid #93ED00
    border-radius 5px
    outline none
    background-color transparent
</style>
