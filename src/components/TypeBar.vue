<template lang="pug">
ul.type-bar
  li.item(
    v-for="t in type"
    :class="{ chose: t == select }"
    @click="filterType(t)"
  )
    | {{ t }}
</template>

<script>
export default {
  name: "type-bar",
  data: function() {
    return {
      type: [
        "ALL",
        "UNSOLVED",
        "CRYPTO",
        "MISC",
        "PPC",
        "PWN",
        "REVERSE",
        "WEB",
      ],
      select: "ALL",
    }
  },
  methods: {
    filterType: function(type) {
      this.select = type
      // TODO: filter action
    }
  }
}
</script>

<style lang="stylus">
.type-bar
  width 840px
  margin 0 auto
  padding 0
  display flex
  justify-content space-between

  .item
    list-style none
    text-transform uppercase
    cursor pointer
    color #8E8E8E

    &:hover
      color white

  .chose
    color white
    font-weight bold
    border-bottom 1px solid white
</style>

