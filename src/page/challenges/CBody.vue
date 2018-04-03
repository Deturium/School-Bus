<template lang="pug">
.c-body(
  :style="{order: order}"
)
  h1.meta {{ challenge.title }}

  h2.subtit Description
  div
    p {{ challenge.description }}

  h2.subtit Hint
  div
    p {{ challenge.hint ? challenge.hint : 'No hint'}}

  h2.subtit Your Answer
  div
    input.ans-input(value="AAA{this_a_flag}")
    button.ans-button(
      :class="{ solved: challenge.is_solved }"
      @click.prevent="submitHandle(challenge.id, challenge.is_solved)"
    ) {{ challenge.is_solved ? "Solved" : "Submit" }}

  h2.subtit Completed
  div
    p
      span.name(
        v-for="(pwner, i) in challenge.early_pwner"
        :key="i"
      ) {{ pwner }}
</template>

<script>
export default {
  name: "c-body",
  props: [
    "order",
    "challenge",
      // "title",
      // "description",
      // "hint",
      // "attachments",
      // "points",
      // "is_solved",
      // "pwned_times",
      // "early_pwner"

    "submitHandle"
  ],
}
</script>

<style lang="stylus">

@import "../../stylus/mixins"

.c-body
  width 100%
  margin 30px
  padding 40px
  background-color #181818
  color #eee

  .meta
    margin 0 auto
    text-align center
    font-size 36px
    font-weight bold
    font-style italic
    color #E1C79B

  >div
    width 666px
    margin 10px auto 15px auto
    padding-left 100px
    // border 1px solid #fff
    font-size 14px

  p
    margin .8em 0
    line-height 1.7
    // letter-spacing 1px
    white-space pre-wrap
    // word-wrap wrap
    overflow hidden
    text-overflow ellipsis

  .subtit
    margin 0 120px
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
    color #aaa
    background-color transparent
    border 1.5px solid currentColor
    vertical-align top
    &:hover
      border-color #ddd

  .solved
    color #5D8F0A
    &:hover
      border-color #93ED00

  .name
    margin-right 20px
    font-weight bold
    font-style italic
    color #aaa
</style>
