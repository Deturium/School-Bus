<template lang="pug">
form.form
  .form-tit Log In
  .form-item
    label Username
    m-input
  .form-item
    label Passw0rd
    m-input(type="password")

  m-button.comfirm(
    text="Log In"
    :clickHandle="logInHandle"
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
  name: "log-in-form",
  methods: {
    logInHandle() {
      this.$store.commit('LogIn')
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

