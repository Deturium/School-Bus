<template lang="pug">
.form-item
  label.form-label {{ labelName }}
  m-input.form-input(
    v-model="transferValue"
    :inputType="inputType"
    :type="type"
  )
</template>

<script>
import MInput from '@/MInput'
import MButton from '@/MButton'

export default {
  name: "m-form-item",
  props: [
    "labelName",
    "value",
    "inputType",
    "type",
  ],
  data: function() {
    return {
      transferValue: this.value
    }
  },
  watch: {
    transferValue() {
      this.$emit('update:value', this.transferValue)
    }
  },
  components: {
    MInput, MButton
  },
}
</script>

<style lang="stylus" scoped>

// see Form.vue

</style>
