<template lang="pug">
div.app-root
  popup-form
  head-nav
    user-info
  .main-container
    router-view
  foot-nav
</template>

<script>
import HeadNav from '@/HeadNav'
import FootNav from '@/FootNav'
import UserInfo from '@@/UserInfo'
import PopupForm from '@@/PopupForm'

export default {
	name: 'app',
	components: {
    HeadNav, FootNav, UserInfo, PopupForm
	}
}
</script>

<style lang="stylus">
$max-width = 1160px

@font-face
  font-family CenturyGothic
  src url('/assets/CenturyGothic.ttf')

body
  font-size 14px
  font-family 'CenturyGothic', \
    system, -apple-system, BlinkMacSystemFont, \
    'Century Gothic', \
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei"
  background-color #1F1F1F

.app-root
  width $max-width
  margin 0 auto

.main-container
  min-height 80vh
  margin 0 auto
</style>
