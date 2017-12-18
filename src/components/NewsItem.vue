<template lang="pug" >
article.new
  .meta
    time 2019.10.13
    h4(@click="toggle") {{ title }}

  div(v-show="isHidden")
    p.para {{ content }}

    a.link [ LINK 1 ]
    a.link [ LINK 2 ]
</template>

<script>
export default {
  name: "NewsItem",
  props: [
    'title', 'content'
  ],
  data: function() {
    return {
      isHidden: true
    }
  },
  methods: {
    toggle: function() {
      this.isHidden = !this.isHidden
    },
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/var.styl'

.new
  margin: 40px

.meta
  > time
    margin: 0
  > h4
    margin: 10px 0 20px 0
    font-size: 1.5em
    cursor: pointer

.para
  line-height: 1.5
  letter-spacing: 0.1em
  text-indent: 2em

.link
  margin-right: 2em

</style>
