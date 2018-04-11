<template lang="pug">
.c-body(
  :style="{order: order}"
)
  h1.meta {{ challenge.title }}

  h2.subtit Description
  div
    p {{ challenge.description }}
    .links
      a.link(
        v-for="(atta, i) in challenge.attachments"
        :href="atta"
        target="_blank"
      ) {{ `Link ${i}` }}

  h2.subtit.hint(
    @click="toggleHint()"
  ) Hint&nbsp;&nbsp;
    svg.icon(
      aria-hidden="true"
      :class="{rotate: isShowHint }"
    )
      use(xlink:href="#icon-more")

  div
    p(v-if="isShowHint") {{ challenge.hint ? challenge.hint : 'No hint (╯°口°)╯(┴—┴'}}

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
    toggleHint() {
      this.isShowHint = !this.isShowHint
    },
    submitHandle() {
      if (this.challenge.is_solved)
        return

      this.$store.dispatch('submitFlag', {
        flag: this.flag,
        challenge: this.challenge
      })
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
    box-sizing border-box
    width 666px
    margin 10px auto 15px auto
    padding-left 40px
    // padding-right 40px
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

  .links
    margin-top 25px
    margin-bottom -20px

  .link
    display inline-block
    width 70px
    height 26px
    line-height 26px
    margin-right 10px
    text-align center
    color #999
    background-color #222
    border-radius 2px
    text-decoration none
    &:hover
      text-decoration underline

  .rotate
    transform rotate(90deg)

  .subtit
    display inline-block
    margin 0 120px
    margin-top 30px
    font-size 22px
    font-weight lighter
    font-style italic
    text-align left

  .hint
    cursor pointer
    &:hover
      >svg
        visibility visible

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
