<template lang="pug">
div.app-root
  icons
  notification
  popup-form
  head-nav
    user-info
  .maincontainer
    router-view
  foot-nav
</template>

<script>
import Icons from '@/Icons'
import HeadNav from '@/HeadNav'
import FootNav from '@/FootNav'
import UserInfo from '@@/UserInfo'
import PopupForm from '@@/PopupForm'
import Notification from '@@/Notification'

export default {
	name: 'app',
	components: {
    HeadNav, FootNav, PopupForm, Notification, UserInfo, Icons
  },
  created() {
    this.$store.dispatch('autoLogIn')
  }
}
</script>

<style lang="stylus">
$max-width = 1160px

@font-face
  font-family GOTHIC
  src url('../static/fonts/GOTHIC.ttf') format('truetype')
@font-face
  font-family GOTHIC
  src url('../static/fonts/GOTHICB.ttf') format('truetype')
  font-weight bold
@font-face
  font-family GOTHIC
  src url('../static/fonts/GOTHICI.ttf') format('truetype')
  font-style italic
@font-face
  font-family GOTHIC
  src url('../static/fonts/GOTHICBI.ttf') format('truetype')
  font-weight bold
  font-style italic

body
  font-family GOTHIC, Roboto, \
    system, -apple-system, BlinkMacSystemFont, \
    "Helvetica Neue", Helvetica, \
    "PingFang SC", "Hiragino Sans GB", \
    "Microsoft YaHei"
  font-size 14px
  background-color #1F1F1F

.app-root
  width $max-width
  margin 0 auto

  >.maincontainer
    min-height 80vh
    margin 0 auto
</style>
