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
    }
  },
  methods: {
    registerHandle() {
      this.$store.dispatch('register', {
        stuNo: this.stuNo
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
