<template lang="pug">
ul.type-bar
  li.item(v-for="t in type")
    | {{ t }}
</template>

<script>
export default {
  name: "type-bar",
  data: function() {
    return {
      type: [
        "ALL",
        "RESOLVED",
        "CRYPTO",
        "MISC",
        "PPC",
        "PWN",
        "RESERVE",
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
</style>

