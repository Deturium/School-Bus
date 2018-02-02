<template lang="pug">
ul.type-bar
  li.item_chose ALL
  li.item(v-for="t in type")
    | {{ t }}
</template>

<script>
export default {
  name: "type-bar",
  data: function() {
    return {
      type: [
        "UNSOLVED",
        "CRYPTO",
        "MISC",
        "PPC",
        "PWN",
        "REVERSE",
        "WEB"
      ]
    }
  }
}
</script>

<style lang="stylus">
.type-bar
  width 900px
  margin 0 auto
  display flex
  justify-content space-between

  .item
    padding 3px
    list-style none
    text-transform uppercase
    cursor pointer
    color #8E8E8E

    &:hover
      color white

  .item_chose
    padding 3px
    list-style none
    text-transform uppercase
    cursor pointer
    color white
    font-weight bold
    border-bottom 1px solid white

    &:hover
      color white
</style>

