<template lang="pug">
.q-body-wrapper
  .q-body
    h1.meta Check In

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
        span.name chenyuan
        span.name zuhxs
</template>

<script>
export default {
  name: "q-body",
}
</script>

<style lang="stylus">
.q-body-wrapper
  width 100%
  background-color #181818

.q-body
  width 1160px
  box-sizing border-box
  margin 30px auto
  padding 40px

  .meta
    margin 0 auto
    text-align center
    font-size 36px
    font-weight bold
    font-style italic
    color #E1C79B

  >div
    font-size 14px
    margin 15px 100px
    margin-left 200px

  p
    margin 5px
    // letter-spacing 1px

  .title
    margin 0 140px
    margin-top 30px
    font-style italic
    font-weight lighter
    font-size 24px

  ans-common()
    height 35px
    margin 5px 0
    vertical-align top
    font-size 16px
    font-style italic
    border 1px solid #979797
    border-radius 5px
    outline none

  .ans-input
    ans-common()
    width 500px
    box-sizing border-box
    padding 4px 10px
    // actually height = 25 + 2 * (4 + 1)
    font-weight bold
    color #181818

  .ans-button
    ans-common()
    width 80px
    margin-left 20px
    color #5D8F0A
    background-color transparent
    border-color #93ED00
    cursor pointer

  .name
    margin-right 20px
    font-weight bold
    font-style italic
</style>
