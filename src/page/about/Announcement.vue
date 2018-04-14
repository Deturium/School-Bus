<template lang="pug">
.anno-cp
  .annometa(@click="toggle")
    time.annotime Update {{ time }}
    h4.annotit {{ title }}

  p.annobody(
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
.anno-cp
  margin 20px auto
  text-align left

  >.annometa
    display flex
    justify-content flex-start
    align-items center
    margin-top 50px
    color #ddd
    &:hover
      color #fff

    >.annotit,
    >.annotime
      margin 0
      font-size 18px
      font-weight bold
      cursor pointer

    >.annotime
      flex 0 0 auto
      margin-left 4em
      margin-right 1.5em

  >.annobody
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
