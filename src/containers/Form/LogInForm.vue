<template lang="pug">
m-form(
  formTitle="Log In"
  comfirmText='Log In'
  cancelText='Reset Pw'
  :comfirmHandle="logInHandle"
  :cancelHandle="cancelHandle"
)
  m-form-item(label="Username")
    m-input(
      v-model="username"
      :theme="theme"
    )

  m-form-item(label="Passw0rd")
    m-input(
      v-model="password"
      type="password"
      :theme="theme"
    )

</template>

<script>
import MForm from '@/MForm'
import MFormItem from '@/MFormItem'
import MInput from '@/MInput'

export default {
  name: "log-in-form",
  data: function() {
    return {
      username: "",
      password: "",

      theme: "",
    }
  },
  methods: {
    logInHandle() {
      this.$store.dispatch('logIn', {
        username: this.username,
        password: this.password,
      }).catch(() => {
        this.theme = 'error'
      })
    },
    cancelHandle() {
      this.$store.commit('SHOW_POPUPFORM', 'ForgetPw')
    },
  },
  components: {
    MForm, MFormItem, MInput
  }
}
</script>

