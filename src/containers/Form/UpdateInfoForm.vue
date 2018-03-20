<template lang="pug">
form.form
  .form-tit Update Info
  .form-item
    label Old Passw0rd
    input
  .form-item
    label New Passw0rd
    input
  .form-item
    label Phone
    input
  .form-item
    label Comment
    input

  button.comfirm(
    @click.prevent="updateHandle"
  ) Update
  button.cancel(
    @click.prevent="cancelHandle"
  ) Cancel

</template>

<script>
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
}
</script>

