<template lang="pug">
.c-box(
  :style="{order: order}"
  ref="theBox"
)
  p.title(
    :class="{'-solved': challenge.is_solved, '-small': isTitleTooLong}"
    @click="clickHandle(challenge.id, order)"
  ) {{ challenge.title }}

  p.type {{ challenge.type }}
  p.points {{ challenge.points + "pt" }}
</template>

<script>
export default {
  name: "c-box",
  props: [
    "order",
    "challenge",
    "clickHandle",
  ],
  computed: {
    isTitleTooLong() {
      return this.challenge.title.split(' ').some(letter => letter.length > 9)
    }
  },
  mounted: function() {
    if (this.challenge.id !== parseInt(this.$route.params.id, 10)) {
      return
    }
    this.clickHandle(this.challenge.id, this.order)
    // scroll to crruent challenge
    this.$nextTick(function (){
      const rect = this.$refs.theBox.getBoundingClientRect()
      window.scrollTo(0, rect.top + window.pageYOffset - 40)
    })
  },
  beforeDestroy: function() {
    if (this.challenge.id !== parseInt(this.$route.params.id, 10)) {
      return
    }
    // hide the CBody
    this.clickHandle(this.challenge.id, this.order)
    // reset url
    this.$router.replace("/challenges")
  }
}
</script>

<style lang="stylus">

$box-width = 200px // 200 + 20*2 = 240px

.c-box
  display flex
  flex-direction column
  align-items center

  box-sizing border-box
  width $box-width
  height $box-width
  margin 20px
  padding 20px
  padding-bottom 0

  font-weight bold
  // font-style italic
  background-color #181818

  >.title
    flex-grow 2
    display flex
    align-items center
    font-size 28px
    color #646464
    text-align center
    word-wrap break-word
    // word-break break-all
    line-height 1.1
    cursor pointer

    &:hover
      color #E1C79B

    &.-solved
      color #E1C79B

    &.-small
      font-size 24px

  >.type
    margin 0px
    font-size 20px
    color #ccc

  >.points
    margin 5px
    font-size 12px
    font-weight normal
    color #7C6E59
</style>
