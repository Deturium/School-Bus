<template lang="pug">
m-form(
  formTitle="Update Info"
  comfirmText='Update'
  :comfirmHandle="updateHandle"
  :cancelHandle="cancelHandle"
)
  m-form-item(
    labelName="Old Passw0rd"
    :value.sync="oldPassword"
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
      comment: ""
    }
  },
  methods: {
    updateHandle() {
      this.$store.commit('hidePopupForm')
    },
    cancelHandle() {
      this.$store.commit('hidePopupForm')
    },
  },
  components: {
    MForm, MFormItem
  }
}
</script>

