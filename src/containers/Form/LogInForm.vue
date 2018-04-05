<template lang="pug">
form.form
  .form-tit Log In
  .form-item
    label Username
    input
  .form-item
    label Passw0rd
    input(type="password")

  button.comfirm(
    @click.prevent="logInHandle"
  ) Log In
  button.cancel(
    @click.prevent="cancelHandle"
  ) Cancel
</template>

<script>
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
}
</script>

