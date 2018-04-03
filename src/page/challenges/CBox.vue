<template lang="pug">
.c-box(
  :style="{order: order}"
)
  p.title(
    :class="{solved: challenge.is_solved, small: isTitleTooLong}"
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
    "id",
    "challenge",
    "clickHandle",
  ],
  computed: {
    isTitleTooLong() {
      return this.challenge.title.split(' ').some( letter => letter.length > 9 )
    }
  }
}
</script>

<style lang="stylus">

$box-width = 200px

.c-box
  width $box-width
  height $box-width
  box-sizing border-box
  margin 20px 30px
  padding 20px
  padding-bottom 0
  background-color #181818

  display flex
  flex-direction column
  align-items center

  >p
    font-style italic
    font-weight bold

  .title
    flex-grow 2
    display flex
    align-items center
    font-size 28px
    color #646464
    text-align center
    word-wrap break-word
    line-height 1.1
    cursor pointer

    &:hover
      color #E1C79B

  .solved
    color #E1C79B

  .small
    font-size 24px

  .type
    margin 0px
    font-size 20px
    color #ccc

  .points
    margin 5px
    font-size 12px
    font-weight normal
    color #7C6E59
</style>
