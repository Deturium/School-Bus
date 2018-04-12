<template lang="pug">
.anno
  .anno-meta(@click="toggle")
    time.anno-time Update {{ time }}
    h4.anno-tit {{ title }}

  p.anno-body(
    v-if="isShow"
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
    color #ddd

    &:hover
      color #fff

  .anno-time,
  .anno-tit
    margin 0
    font-size 18px
    font-weight bold
    cursor pointer

  .anno-time
    flex 0 0 auto
    margin-left 4em
    margin-right 1.5em

  .anno-body
    // display flex
    // flex-direction column
    // align-items center
    margin-top 20px
    margin-bottom 80px
    text-align center

    img
      width 580px
      margin 15px

    a
      color currentColor
      text-decoration none
      &:hover
        text-decoration underline

</style>
