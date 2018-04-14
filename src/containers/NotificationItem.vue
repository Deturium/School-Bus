<template lang="pug">
transition(name="fade")
  .notification-item(
    v-if="isSurvival"
  )
    h4.title(:style="{color: typeColor}") {{ title }}
    p.description {{ description }}
    svg.icon.closeicon(
      aria-hidden="true"
      @click="close"
    )
      use(xlink:href="#icon-close")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "notification-item",
  props: [
    "title",
    "description",
    "type",
    "survivalTime",
  ],
  data: function() {
    return {
      isSurvival: true
    }
  },
  created() {
    if (this.survivalTime) {
      setTimeout(() => {
        this.close()
      }, this.survivalTime * 1000)
    }
  },
  computed: {
    typeColor() {
      const colorDict = {
        'HINT': '#fff',
        'ERROR': '#e83434',
      }
      return colorDict[this.type]
    }
  },
  methods: {
    close() {
      this.isSurvival = false
    }
  },
}
</script>

<style lang="stylus" scoped>
.notification-item
  position relative
  margin 20px
  padding 1px
  background-color rgba(44, 44, 44, .9)
  border-radius 5px

  >.title,
  >.description
    margin 20px 30px

  >.title
    font-size 16px
    font-weight bold

  >.description
    font-size 14px
    color #bbb

  >.closeicon
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
