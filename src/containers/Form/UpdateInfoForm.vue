<template lang="pug">
m-form(
  formTitle="Update Info"
  promptText="Leave the field blank if you don't want to update."
  comfirmText='Update'
  :comfirmHandle="updateHandle"
  :cancelHandle="cancelHandle"
)

  m-form-item(label="Old Passw0rd")
    m-input(
      v-model="oldPassword"
      type="password"
      placeholder="(required)"
    )

  m-form-item(label="New Passw0rd")
    m-input(
      v-model="newPassword"
    )

  m-form-item(label="Phone")
    m-input(
      v-model="phone"
    )

  m-form-item(label="Comment")
    m-input(
      v-model="comment"
    )

</template>

<script>
import MForm from '@/MForm'
import MFormItem from '@/MFormItem'
import MInput from '@/MInput'

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
    MForm, MFormItem, MInput
  }
}
</script>

