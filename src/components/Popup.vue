<template lang="pug">
.overlay(
  v-if="isShow"
  @click.self="hide"
)
  .popup
    .tit Log In
    //- img.lifegame(src="../assets/lifegame.png")

    form.login-form
      .form-item
        label(for="username") Username
        input#username
      .form-item
        label Passw0rd
        input#password
    .button
      button.comfirm(
        @click="confirm"
      ) Log In
      button.cancel(
        @click="hide"
      ) Cancel


</template>

<script>
export default {
  name: "popup",
  data: function() {
    return {
      isShow: false
    }
  },
  methods: {
    show: function() {
      this.isShow = true
    },
    hide: function() {
      this.isShow = false
    },
    confirm: function() {

    }
  }
}
</script>

<style lang="stylus">
.overlay
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  background-color hsla(0, 0%, 0%, .6)
  z-index 100

.popup
  position absolute
  top 40%
  left 50%
  transform translate(-50%, -50%)

  width 700px

  display flex
  flex-direction column
  justify-content space-between
  align-items center

  background-color black
  border-radius 15px
  z-index 101

  font-family: 'Century Gothic', sans-serif;
  font-style italic
  font-weight bold

  .tit
    margin 20px
    font-size 30px

  .lifegame
    width 100%

  .form-item
    display flex
    margin 15px 0

    >label
      width 100px
      line-height 30px
      text-align center

    >input
      height 30px
      width 250px

      border 1px solid #979797
      border-radius 5px
      outline none
      box-sizing border-box
      padding 2px 10px

  .button
    margin 20px
    margin-bottom 30px
    width 350px
    box-sizing border-box
    padding-left 100px

    >button
      height 30px
      width 100px
      line-height 30px
      font-weight bold
      font-style italic
      border-radius 5px
      border 0
      outline none

    .cancel
      margin-left 25px
      background-color #636363

</style>
