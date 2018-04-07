<template lang="pug">
.notification(
  v-show="isShow"
)
  h4 {{ title }}
  p {{ description }}
  div.close(
    @click="close"
  ) X
</template>

<script>
export default {
  name: "notification",
  // props: [
  //   "title",
  //   "description",
  // ],
  data: function() {
    return {
      isShow: true,
      title: "登陆失败",
      description: "Network Error, please check and retry."
    }
  },
  methods: {
    close() {
      this.isShow = false
    }
  },
}
</script>

<style lang="stylus" scoped>
.notification
  position fixed
  right 20px
  width 380px
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
</style>
