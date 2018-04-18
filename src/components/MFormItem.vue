<template lang="pug">
.form-item
  label.formlabel {{ label }}
  slot
</template>

<script>
export default {
  name: "m-form-item",
  props: [
    "label",
  ],
}
</script>

<style lang="stylus">
.form-item
  display flex
  flex-direction column
  align-items flex-start
  width 100%
  margin 8px 0

  >.formlabel
    font-size 14px
    color #bbb

  >.m-input
    width 100%
</style>
