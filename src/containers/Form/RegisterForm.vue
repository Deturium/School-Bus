<template lang="pug">
form.form
  .form-tit Register
  .form-item
    label Stu. No
    m-input
  .form-item
    label Passw0rd
    m-input
  m-button.comfirm(
    text="Register"
    :clickHandle="registerHandle"
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
  name: "register-form",
  methods: {
    registerHandle() {
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

