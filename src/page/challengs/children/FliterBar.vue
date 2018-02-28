<template lang="pug">
ul.type-bar
  li.item(
    v-for="t in type"
    :class="{ chose: t == selected }"
    @click="filterType(t)"
  )
    | {{ t }}
</template>

<script>
export default {
  name: "fliter-bar",
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
      selected: "ALL",
    }
  },
  methods: {
    filterType: function(type) {
      this.selected = type
      this.$store.commit('changeFliterType', type)
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

