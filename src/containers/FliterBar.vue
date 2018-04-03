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
import { mapState } from 'vuex'

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
    }
  },
  computed: mapState({
    selected: "filterType"
  }),
  methods: {
    filterType: function(type) {
      this.$store.commit('changeFliterType', type)
    }
  },
  beforeDestroy: function() {
    // reset filterType
    this.$store.commit('changeFliterType', "ALL")
  }
}
</script>

<style lang="stylus">

$text-color = #8e8e8e
$text-color-hover = #ffffff

.type-bar
  padding 0
  display flex
  justify-content center

  .item
    margin 0 25px
    list-style none
    text-transform uppercase
    cursor pointer
    color $text-color

    &:hover
      color $text-color-hover

  .chose
    font-weight bold
    color $text-color-hover
    border-bottom 1px solid $text-color-hover
</style>

