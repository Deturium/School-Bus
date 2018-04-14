<template lang="pug">
m-form(
  formTitle="Update Info"
  comfirmText='Update'
  :comfirmHandle="updateHandle"
  :cancelHandle="cancelHandle"
)
  .form-text
    | Leave the field blank if you don't want to update.
  m-form-item(
    labelName="Old Passw0rd"
    :value.sync="oldPassword"
    inputType="password"
    placeholder="required"
  )
  m-form-item(
    labelName="New Passw0rd"
    :value.sync="newPassword"
  )
  m-form-item(
    labelName="Phone"
    :value.sync="phone"
  )
  m-form-item(
    labelName="Comment"
    :value.sync="comment"
  )
</template>

<script>
import MForm from '@/MForm'
import MFormItem from '@/MFormItem'

export default {
  name: "update-info-form",
  data: function() {
    return {
      oldPassword: "",
      newPassword: "",
      phone: "",
      comment: "",
    }
  },
  methods: {
    updateHandle() {
      this.$store.dispatch('updateInfo', {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        phone: this.phone,
        comment: this.comment,
      })
    },
    cancelHandle() {
      this.$store.commit('HIDE_POPUPFORM')
    },
  },
  components: {
    MForm, MFormItem
  }
}
</script>

