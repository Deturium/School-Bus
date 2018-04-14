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

// TODO:
@font-face
  font-family 'CenturyGothic'
  src url('./assets/CenturyGothic.ttf') format('truetype')

body
  font-size 14px
  font-family 'CenturyGothic', 'Century Gothic', \
    system, -apple-system, BlinkMacSystemFont, \
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei"
  background-color #1F1F1F

.app-root
  // position relative
  width $max-width
  margin 0 auto

  >.maincontainer
    min-height 80vh
    margin 0 auto
</style>
