<template lang="pug">
ul.type-bar
  li.item(
    v-for="t in types"
    :class="{ '-chose': t == selected }"
    @click="typeChangeHandle(t)"
  )
    | {{ t }}
</template>

<script>

export default {
  name: "fliter-bar",
  props: [
    "selected",
    "types",
    "typeChangeHandle",
  ],
}
</script>

<style lang="stylus">

$text-color = #8e8e8e
$text-color-hover = #ffffff

.type-bar
  display flex
  justify-content center
  padding 0

  >.item
    margin 0 25px
    color $text-color
    list-style none
    // text-transform uppercase
    cursor pointer
    &:hover
      color $text-color-hover

  >.-chose
    font-weight bold
    color $text-color-hover
    border-bottom 1px solid $text-color-hover
</style>

