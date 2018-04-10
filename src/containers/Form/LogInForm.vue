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
  )
  m-form-item(
    labelName="Passw0rd"
    :value.sync="password"
    type="password"
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
      password: ""
    }
  },
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
    MForm, MFormItem
  }
}
</script>

