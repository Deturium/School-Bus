<template lang="pug">
.c-body(
  :style="{order: order}"
)
  h1.meta {{ challenge.title }}

  h2.subtit Description
  div
    p {{ challenge.description }}

  h2.subtit.hint(
    @click="showHint()"
  ) Hint

  div
    p(v-if="isShowHint") {{ challenge.hint ? challenge.hint : 'No hint'}}

  h2.subtit Your Answer
  div
    m-input.ans-input(
      v-model="flag"
      placeholder="AAA{here_is_your_flag}"
    )
    m-button.ans-button(
      :text="challenge.is_solved ? 'Solved' : 'Submit'"
      :clickHandle="submitHandle"
    )

  h2.subtit Completed
  div
    p
      span.name(
        v-for="(pwner, i) in challenge.early_pwner"
        v-if="i < 10"
        :key="i"
      ) {{ pwner }}
</template>

<script>
import MInput from '@/MInput'
import MButton from '@/MButton'

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
  ],
  data: function() {
    return {
      isShowHint: false,
      flag: "",
    }
  },
  methods: {
    showHint() {
      this.isShowHint = true
    },
    submitHandle() {
      if (this.challenge.is_solved)
        return
      // TODO: dispatch submitFlag

      const userInfo = this.$store.state.userInfo
      this.challenge.is_solved = true
      this.challenge.early_pwner.push(userInfo.name)
      userInfo.score += this.challenge.points
    },
  },
  activated: function() {
    this.isShowHint = false
    this.flag = ""
  },
  components: {
    MInput, MButton
  }
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
    display inline-block
    margin 0 120px
    margin-top 30px
    font-size 24px
    font-weight lighter
    font-style italic
    text-align left

  .hint
    cursor pointer

  .ans-input
    width 500px

  .ans-button
    margin-left 20px

  .name
    margin-right 20px
    // font-weight bold
    font-style italic
    color #aaa
</style>
