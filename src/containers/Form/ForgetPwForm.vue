<template lang="pug">
m-form(
  formTitle="Forget my Password"
  comfirmText='Reset'
  cancelText=''
  :comfirmHandle="ResetHandle"
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

</template>

<script>
import MForm from '@/MForm'
import MFormItem from '@/MFormItem'
import MInput from '@/MInput'

export default {
  name: "forget-pw-form",
  data: function() {
    return {
      stuNo: "",
      username: "",
    }
  },
  methods: {
    ResetHandle() {
      this.$store.dispatch('resetPassword', {
        stuNo: this.stuNo,
        username: this.username,
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

