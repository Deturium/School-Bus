<template lang="pug">
m-form(
  formTitle="Register"
  comfirmText='Register'
  promptText="This platform is only for ZJUer, so you must use zju mail to register."
  :comfirmHandle="registerHandle"
  cancelText='Close'
  :cancelHandle="cancelHandle"
)

  m-form-item(label="Stu. No")
    m-input(
      v-model="stuNo"
    )
  m-form-item(label="Username")
    m-input(
      v-model="username"
    )
  m-form-item(label="Password")
    m-input(
      v-model="password"
    )
  m-form-item(label="Phone")
    m-input(
      v-model="phone"
    )
  m-form-item(label="Comment")
    m-input(
      v-model="comment"
      placeholder="(not required)"
    )
</template>

<script>
import MForm from '@/MForm'
import MFormItem from '@/MFormItem'
import MInput from '@/MInput'

export default {
  name: "register-form",
  data: function() {
    return {
      stuNo: "",
      username: "",
      password: "",
      phone: "",
      comment: "",
    }
  },
  methods: {
    registerHandle() {
      this.$store.dispatch('register', {
        stuNo: this.stuNo,
        username: this.username,
        password: this.password,
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
