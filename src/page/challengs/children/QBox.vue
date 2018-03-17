<template lang="pug">
.q-box(
  :style="{order: order}"
)
  p.name(
    @click="onClick(order)"
  ) {{ name }}
  p.type {{ type }}
  p.score {{ score + "pt" }}
</template>

<script>
export default {
  name: "QBox",
  props: [
    "order",
    "name",
    "type",
    "score",
    "onClick",
  ],
}
</script>

<style lang="stylus">

$box-width = 200px

.q-box
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

  .name
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

  .type
    margin 0px
    font-size 20px
    color #eee

  .score
    margin 5px
    font-size 12px
    font-weight normal
    color #7C6E59
</style>
