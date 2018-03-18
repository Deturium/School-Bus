<template lang="pug">
div
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
body
  background-color #1F1F1F
  color white
  font-size 14px
  font-family: 'Century Gothic', sans-serif;

.main-container
  min-height 80vh
  margin 0 auto
</style>
