<template lang="pug">
form.form
  .form-tit Register
  .form-item
    label Stu. No
    input
  .form-item
    label Passw0rd
    input

  button.comfirm(
    @click.prevent="registerHandle"
  ) Register
  button.cancel(
    @click.prevent="cancelHandle"
  ) Cancel
</template>

<script>
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
}
</script>

