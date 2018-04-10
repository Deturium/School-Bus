<template lang="pug">
m-form(
  formTitle="Register"
  comfirmText='Register'
  :comfirmHandle="RegisterHandle"
  :cancelHandle="cancelHandle"
)
  m-form-item(
    labelName="Stu. No"
    :value.sync="stuNo"
  )
  m-form-item(
    labelName="Passw0rd"
    :value.sync="password"
  )

</template>

<script>
import MForm from '@/MForm'
import MFormItem from '@/MFormItem'

export default {
  name: "register-form",
  data: function() {
    return {
      stuNo: "",
      password: ""
    }
  },
  methods: {
    registerHandle() {
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
