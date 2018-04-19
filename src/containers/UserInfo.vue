<template lang="pug">
.userinfo
  .login(v-if="isLogIn")
    p.name {{ userInfo.name }}
    p Rank {{ userInfo.rank }}
    p Score {{ userInfo.score }}
  .unlogin(v-else)
    span(@click="logIn") Log In
    | &nbsp;/&nbsp;
    span(@click="register") Register

  .avatarwrapper
    img.avatar(src="../assets/huahuo.png")

    ul.list(v-if="isLogIn")
      li.listitem(
        @click="updateInfo"
      ) Update Info
      li.listitem(
        @click="logOut"
      ) Log Out

    ul.list(v-else)
      li.listitem(
        @click="logIn"
      ) Log In
      li.listitem(
        @click="register"
      ) Register
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "user-info",
  computed: mapState([
    "isLogIn",
    "userInfo"
  ]),
  methods: {
    logIn() {
      this.$store.commit('SHOW_POPUPFORM', 'LogIn')
    },
    logOut() {
      this.$store.dispatch('logOut')
    },
    register() {
      this.$store.commit('SHOW_POPUPFORM', 'Register')
    },
    updateInfo() {
      this.$store.commit('SHOW_POPUPFORM', 'UpdateInfo')
    }
  }
}
</script>

<style lang="stylus" scoped>

$avatar-width = 70px
$font-size-big = 18px
$font-size-small = 12px
$font-color = #8e8e8e
$font-color-light = #eee
$list-bg-color = #111

.userinfo
  position absolute
  top 0px
  right 25px
  display flex
  align-items center
  color white

  >.unlogin
    font-size 16px
    font-weight bold
    >span
      cursor pointer
      &:hover
        color #e1c79b

  >.login
    >p // name, rank, score
      margin 0
      text-align right
      font-size $font-size-small
      color $font-color

    >.name
      font-size $font-size-big
      font-weight bold
      color $font-color-light

  >.avatarwrapper
    >.avatar
      box-sizing border-box
      width $avatar-width
      height $avatar-width
      margin-left 5px
      padding 10px
      border-radius 50%

    >.list
      position absolute
      top $avatar-width + 5
      right ($avatar-width / 2)
      transform translateX(50%)

      margin 0
      padding 2px 12px

      background-color $list-bg-color
      border-radius 12px

      opacity 0
      transition opacity 1s ease

      &:before
        $triangle-width = 8px

        position absolute
        top - $triangle-width
        right 50%
        transform translateX(50%)
        content " "
        border-left $triangle-width solid transparent
        border-right $triangle-width solid transparent
        border-bottom $triangle-width solid $list-bg-color

    .listitem
      margin 8px
      list-style none
      font-size $font-size-small
      color $font-color
      white-space nowrap
      cursor pointer

      &:hover
        color $font-color-light

    &:hover>.list
      opacity 1

.form-item
  display flex
  flex-direction column
  align-items flex-start
  margin 8px 0

  >.formlabel
    font-size 14px
    color $font-color

  >.forminput
    width $input-width

</style>

