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
.q-box
  width 200px
  height 200px
  box-sizing border-box
  margin 20px 30px
  padding 20px
  padding-bottom 0
  background-color #181818

  display flex
  flex-direction column
  align-items center
  justify-content flex-end

  >p
    font-style italic

  .name
    flex-grow 2
    display flex
    align-items center
    font-size 28px
    font-weight bold
    color #646464
    text-align center
    word-wrap break-word
    cursor pointer
    line-height 1.1

    &:hover
      color #E1C79B

  .type
    font-size 18px
    color #FFFFFF
    margin 0px
    font-weight bold

  .score
    font-size 10px
    color #7C6E59
    margin 0
    margin-bottom  5px
</style>
