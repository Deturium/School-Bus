<template lang="pug">
m-form(
  formTitle="Register"
  comfirmText='Register'
  :comfirmHandle="registerHandle"
  cancelText='Close'
  :cancelHandle="cancelHandle"
)
  .form-text
    | This platform is only for ZJUer, so you must use zju mail to register.
  m-form-item(
    labelName="Stu. No"
    :value.sync="stuNo"
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
    }
  },
  methods: {
    registerHandle() {
      this.$store.dispatch('register', {
        stuNo: this.stuNo
      })
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
