<template lang="pug">
form.form
  .form-tit Update Info
  .form-item
    label Old Passw0rd
    m-input
  .form-item
    label New Passw0rd
    m-input
  .form-item
    label Phone
    m-input
  .form-item
    label Comment
    m-input

  m-button.comfirm(
    text="Update"
    :clickHandle="updateHandle"
  )
  m-button.cancel(
    text="Cancel"
    :clickHandle="cancelHandle"
  )
</template>

<script>
import MInput from '@/MInput'
import MButton from '@/MButton'

export default {
  name: "update-info-form",
  methods: {
    updateHandle() {
      this.$store.commit('hidePopupForm')
    },
    cancelHandle() {
      this.$store.commit('hidePopupForm')
    },
  },
  components: {
    MInput, MButton
  }
}
</script>

