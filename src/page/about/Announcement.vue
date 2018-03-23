<template lang="pug">
.anno
  .anno-meta(@click="toggle")
    time.anno-time Update {{ time }}
    h4.anno-tit {{ title }}

  p.anno-body(
    v-show="isShow"
    v-html="body"
  )

</template>

<script>
export default {
  name: "announcement",
  props: [
    "initShow",
    "time",
    "title",
    "body",
  ],
  data: function() {
    return {
      isShow: this.initShow
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
.anno
  margin 20px auto
  text-align left

  .anno-meta
    display flex
    justify-content flex-start
    align-items center

    margin-top 50px

  .anno-time,
  .anno-tit
    margin 0
    font-size 18px
    font-weight bold
    color #ddd
    cursor pointer

  .anno-time
    flex 0 0 auto
    margin-left 4em
    margin-right 1.5em

  .anno-tit:hover
    color #fff

  .anno-body
    margin-top 20px
    margin-bottom 80px

    text-align center

</style>
