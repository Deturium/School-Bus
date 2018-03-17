<template lang="pug">
div
  slot
  popup(
    :isShow="isShow"
    :blurHandle="cancelHandle"
  )
    form.form
      .form-tit Log In
      .form-input
        label(for="username") Username
        input#username
      .form-input
        label Passw0rd
        input#password

      button.comfirm(
        @click.prevent="confirmHandle"
      ) Log In
      button.cancel(
        @click.prevent="cancelHandle"
      ) Cancel

</template>

<script>
import { mapState } from 'vuex'
import Popup from '@/Popup'

export default {
  name: "popup-form",
  computed: mapState({
    isShow: state => state.popForm.isShow,
    formName: state => state.popForm.fromName
  }),
  methods: {
    confirmHandle() {
      this.$store.commit('LogIn')
      this.$store.commit('hidePopupForm')
    },
    cancelHandle() {
      this.$store.commit('hidePopupForm')
    },
  },
  components: {
    Popup
  }
}
</script>

<style lang="stylus" scoped>

$font-color = #ddd

.form
  margin 25px
  font-family: 'Century Gothic';
  font-style italic
  font-weight bold

  .form-tit
    margin 0
    margin-bottom 25px
    font-size 30px
    text-align center
    color $font-color

  .form-input
    display flex
    margin 15px 0

    >label
      width 90px
      line-height 30px
      text-align center
      color $font-color

    >input
      height 30px
      width 250px
      border 1px solid #979797
      border-radius 5px
      outline none
      box-sizing border-box
      padding 2px 10px

  >button
    height 30px
    width 100px
    margin 10px 0
    line-height 30px
    font-size 14px
    font-weight bold
    font-style italic
    border 0
    border-radius 5px
    outline none
    cursor pointer

  .comfirm
    margin-left 90px
    background-color #AAA

  .cancel
    margin-left 50px
    background-color #555

</style>
