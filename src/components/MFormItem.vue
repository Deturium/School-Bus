<template lang="pug">
.form-item
  label.formlabel {{ labelName }}
  m-input.forminput(
    v-model="transferValue"
    :type="type"
    :placeholder="placeholder"
    :theme="theme"
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
    "type",
    "placeholder",
    "theme",
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
