<template lang="pug">
.news
  .new-meta(@click="toggle")
    time.news-time Update {{ time }}
    h4.news-tit {{ title }}

  p.news-body(
    v-show="isShow"
  ) {{ body }}

</template>

<script>
export default {
  name: "news",
  props: [
    "time",
    "title",
    "body",
  ],
  data: function() {
    return {
      isShow: true
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="stylus">
.news
  margin 20px auto
  text-align center

  .new-meta
    text-align left

  .news-time,
  .news-tit
    display inline-block
    margin 0
    margin-top 25px
    font-size 18px
    font-weight bold
    color #ddd
    cursor pointer

  .news-time
    margin-left 6em
    margin-right 1.5em

  .news-tit:hover
    color #fff

  .news-body
    text-indent 2em
    text-align center
</style>
