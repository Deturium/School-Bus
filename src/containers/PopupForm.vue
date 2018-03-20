<template lang="pug">
popup(
  :isShow="isShow"
  :blurHandle="blurHandle"
)
  log-in-form(
    v-if="formName==='LogIn'"
  )

  update-info-form(
    v-if="formName==='UpdateInfo'"
  )

  register-form(
    v-if="formName==='Register'"
  )
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

    >input
      input-mixins()
      width 270px
      padding 2px 10px
      font-size 14px

  >button
    button-mixins()
    width 100px
    margin 10px 0
    font-size 14px
    font-style italic

  .comfirm
    margin-left $label-width
    background-color #AAA
    &:hover
      background-color #666

  .cancel
    margin-left 70px
    background-color #666
    &:hover
      background-color #AAA

</style>
