<template lang="pug">
.login
  .userinfo(v-if="isLogin")
    p.name {{ name }}
    p Rank {{ rank }}
    p Score {{ score }}
  .unlogin(v-else) Log In / Register

  img.avatar(src="../assets/huahuo.png")

  ul.list(v-if="isLogin")
    li Update passw0rd
    li Update Info
    li Log Out
  ul.list(v-else)
    li Log In
    li Register
</template>

<script>
export default {
  name: "user-info",
  data: function() {
    return {
      isLogin: true,
      // isLogin: false,
      name: "Clapeysron",
      rank: "5",
      score: "8250",
    }
  }
}
</script>

<style lang="stylus">

.login
  position absolute
  top 10px
  right 10px
  display flex
  align-items center

  .avatar
    width 46px
    height 46px
    margin-left 5px
    padding 10px
    border-radius 50%

  .unlogin
    font-size 16px
    font-weight bold

  .userinfo
    >p
      margin 0
      text-align right
      font-size 9px
      font-weight bold
      color #979797

    .name
      font-size 18px
      color #fff

  .list
    display none
    position absolute
    top 70px
    right -28px
    width 120px
    margin 0
    padding 0

    background-color #000
    border-radius 10px

    >li
      width 100%
      margin 12px 0
      list-style none
      text-align center
      font-size 9px
      font-weight bold
      cursor pointer

    &:before
      position absolute
      top -10px
      right calc(50% - 10px)
      content " "
      width 0
      height 0
      border-left 10px solid transparent
      border-right 10px solid transparent
      border-bottom 10px solid #000

    &:hover
      display block

  &:hover .list
      display block

</style>

