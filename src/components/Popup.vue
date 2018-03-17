<template lang="pug">
.overlay(
  v-if="isShow"
  @click.self="hide"
)
  .popup
    .tit Log In
    //- img.lifegame(src="../assets/lifegame.png")

    form.login-form
      .form-input
        label(for="username") Username
        input#username
      .form-input
        label Passw0rd
        input#password

      button.comfirm(
        @click.prevent="confirm"
      ) Log In
      button.cancel(
        @click.prevent="hide"
      ) Cancel


</template>

<script>
export default {
  name: "popup",
  data: function() {
    return {
      isShow: true
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

$base-z-index = 100
$bg-color = #111
$font-color = #ddd

.overlay
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  background-color hsla(0, 0%, 0%, .6)
  z-index $base-z-index

.popup
  position absolute
  top 40%
  left 50%
  transform translate(-50%, -50%)

  width 600px

  display flex
  flex-direction column
  justify-content space-between
  align-items center

  font-family: 'Century Gothic';
  font-style italic
  font-weight bold

  background-color $bg-color
  z-index $base-z-index + 1
  border-radius 15px

  .tit
    margin-top 30px
    font-size 30px
    color $font-color

  // .lifegame
  //   width 100%


  .login-form
    margin 25px
    margin-top 10px
    padding-right 30px

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
