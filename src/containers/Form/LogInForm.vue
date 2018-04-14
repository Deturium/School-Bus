<template lang="pug">
m-form(
  formTitle="Log In"
  comfirmText='Log In'
  :comfirmHandle="logInHandle"
  :cancelHandle="cancelHandle"
)
  m-form-item(
    labelName="Username"
    :value.sync="username"
    :theme="theme"
  )
  m-form-item(
    labelName="Passw0rd"
    :value.sync="password"
    type="password"
    :theme="theme"
  )

</template>

<script>
import MForm from '@/MForm'
import MFormItem from '@/MFormItem'

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
      this.$store.commit('HIDE_POPUPFORM')
    },
  },
  components: {
    MForm, MFormItem
  }
}
</script>

