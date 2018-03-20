<template lang="pug">
.c-box(
  :style="{order: order}"
)
  p.title(
    @click="clickHandle(id, order)"
  ) {{ title }}

  //- TODO:
  p.type {{ "TYPE" }}
  p.points {{ points + "pt" }}
</template>

<script>
export default {
  name: "c-box",
  props: [
    "order",
    "id",
    "title",
    "points",
    "clickHandle",
  ],
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

  .type
    margin 0px
    font-size 20px
    color #eee

  .points
    margin 5px
    font-size 12px
    font-weight normal
    color #7C6E59
</style>
