<template lang="pug">
.userinfo
  .login(v-if="isLogIn")
    p.name {{ userInfo.name }}
    p Rank {{ userInfo.rank }}
    p Score {{ userInfo.score }}
  .unlogin(v-else) Log In / Register

  img.avatar(src="../assets/huahuo.png")

  ul.list(v-if="isLogIn")
    li.list-item(
      @click="updateInfo"
    ) Update Info
    li.list-item(
      @click="logOut"
    ) Log Out

  ul.list(v-else)
    li.list-item(
      @click="logIn"
    ) Log In
    li.list-item(
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
      this.$store.commit('showPopupForm', 'LogIn')
    },
    logOut() {
      this.$store.commit('LogOut')
    },
    register() {
      this.$store.commit('showPopupForm', 'Register')
    },
    updateInfo() {
      this.$store.commit('showPopupForm', 'UpdateInfo')
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

  .avatar
    box-sizing border-box
    width $avatar-width
    height $avatar-width
    margin-left 5px
    padding 10px
    border-radius 50%

  .unlogin
    font-size 16px
    font-weight bold

  .login
    >p // name, rank, score
      margin 0
      text-align right
      font-size $font-size-small
      color $font-color

    .name
      font-size $font-size-big
      font-weight bold
      color $font-color-light

  .list
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

  .list-item
    margin 8px
    list-style none
    font-size $font-size-small
    color $font-color
    white-space nowrap
    cursor pointer

    &:hover
      color $font-color-light


  &:hover .list
    opacity 1

</style>

