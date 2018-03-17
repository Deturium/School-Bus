<template lang="pug">
.q-group(v-show="qs.length")
  .tit
    | - Welcome -
  .flex
    q-box(
      v-for="(q, i) in qs"
      :key="q.name + i"
      :order="(~~(i/boxPerLine))*2"
      :name="q.name"
      :type="q.type"
      :score="q.score"
      :onClick="handleClick"
    )
    transition(name="fade")
      q-body(
        v-show="isShow"
        :order="bodyOrder"
      )
</template>

<script>
import QBox from "./QBox";
import QBody from "./QBody";

export default {
  name: "QGroup",
  components: {
    QBox, QBody
  },
  data: function() {
    return {
      isShow: false,
      bodyOrder: 0,

      boxPerLine: 4 // a const config now
    }
  },
  props: [
    "qs"
  ],
  methods: {
    handleClick: function(order) {
      this.isShow = !this.isShow
      this.bodyOrder = order + 1
    }
  },
}
</script>

<style lang="stylus">

$container-width = 1040px // 260 * 4
.q-group

  width $container-width
  margin 0 auto

  .tit
    margin-top 50px
    margin-bottom 15px
    font-size 26px
    font-weight bold
    text-align center

  .flex
    display flex
    flex-wrap wrap

  .fade-enter-active
    transition all 1s
  .fade-leave-active
    transition all .5s

  .fade-enter,
  .fade-leave-to
    transform translateX(20%)
    opacity: 0

</style>
