<template lang="pug">
popup(
  :isShow="isShow"
  :blurHandle="blurHandle"
)
  log-in-form(v-if="formName==='LogIn'")
  update-info-form(v-else-if="formName==='UpdateInfo'")
  register-form(v-else-if="formName==='Register'")
</template>

<script>
import { mapState } from 'vuex'
import Popup from '@/Popup'

import LogInForm from './Form/LogInForm'
import UpdateInfoForm from './Form/UpdateInfoForm'
import RegisterForm from './Form/RegisterForm'

export default {
  name: "popup-form",
  computed: mapState({
    isShow: state => state.popForm.isShow,
    formName: state => state.popForm.formName
  }),
  methods: {
    blurHandle() {
      this.$store.commit('hidePopupForm')
    }
  },
  components: {
    Popup, LogInForm, UpdateInfoForm, RegisterForm
  }
}
</script>

<style lang="stylus"> // style for './Form'

@import "../stylus/mixins"

$font-color = #ddd
$label-width = 100px

.form
  margin 25px
  font-style italic
  font-weight bold

  .form-tit
    margin 0
    margin-bottom 25px
    font-size 30px
    text-align center
    color $font-color

  .form-item
    display flex
    margin 15px 0

    >label
      width $label-width
      margin-left -20px
      margin-right 20px
      line-height 30px
      text-align right
      color $font-color

  .comfirm,
  .cancel
    margin-top 20px
    margin-left $label-width

  .cancel
    margin-left 45px

</style>
