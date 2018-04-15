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
	}
}
</script>

<style lang="stylus">
$max-width = 1160px

@font-face
  font-family Roboto
  src url('../static/fonts/Roboto-Regular.ttf') format('truetype')
@font-face
  font-family Roboto
  src url('../static/fonts/Roboto-Bold.ttf') format('truetype')
  font-weight bold
@font-face
  font-family Roboto
  src url('../static/fonts/Roboto-Italic.ttf') format('truetype')
  font-style italic
@font-face
  font-family Roboto
  src url('../static/fonts/Roboto-BoldItalic.ttf') format('truetype')
  font-weight bold
  font-style italic

body
  font-size 14px
  // font-family "Century Gothic" // font choose by Clapeysron
  font-family Roboto, \
    system, -apple-system, BlinkMacSystemFont, \
    "Helvetica Neue", Helvetica, \
    "PingFang SC", "Hiragino Sans GB", \
    "Microsoft YaHei"
  background-color #1F1F1F

.app-root
  width $max-width
  margin 0 auto

  >.maincontainer
    min-height 80vh
    margin 0 auto
</style>
