<template lang="pug">
transition(
  name="fade"
)
  .notification(
    v-show="isShow"
  )
    h4 {{ title }}
    p {{ description }}
    svg.icon.close(
      aria-hidden="true"
      @click="close"
    )
      use(xlink:href="#icon-close")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "notification",
  computed: mapState({
    isShow: state => state.notification.isShow,
    title: state => state.notification.title,
    description: state => state.notification.description,
  }),
  methods: {
    close() {
      this.$store.commit('hideNotification')
    }
  },
}
</script>

<style lang="stylus" scoped>
.notification
  position fixed
  right 20px
  width 350px
  background-color #444
  z-index 1000
  opacity .9
  border-radius 10px

  h4, p
    margin 20px 30px

  h4
    font-size 16px
    font-weight bold
    color #fff

  p
    font-size 14px
    color #ddd

  .close
    position absolute
    top 20px
    right 20px
    color #fff
    cursor pointer

.fade-enter-active
  transition all .5s
.fade-leave-active
  transition all .3s

.fade-enter,
.fade-leave-to
  transform translateY(-30px)
  opacity 0

</style>
