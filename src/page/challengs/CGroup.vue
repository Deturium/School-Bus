<template lang="pug">
.c-group(v-show="challengs.length")
  h2.tit
    | - Welcome -
  .flex
    c-box(
      v-for="(c, i) in challengs"
      :key="c.name + i"
      :order="(~~(i/boxPerLine))*2"

      :id="c.name + i"
      :name="c.name"
      :type="c.type"
      :score="c.score"
      :clickHandle="clickHandle"
    )
    transition(name="fade")
      c-body(
        v-show="isShow"
        :order="bodyOrder"
      )
</template>

<script>
import CBox from "./CBox";
import CBody from "./CBody";

export default {
  name: "c-group",
  data: function() {
    return {
      isShow: false,
      bodyOrder: 0,
      id: "",

      boxPerLine: 4 // a const config now
    }
  },
  props: [
    "challengs"
  ],
  methods: {
    clickHandle: function(id, order) {
      if (!this.isShow) {
        this.isShow = true
        this.bodyOrder = order + 1
      } else if (this.id === id){
        this.isShow = false
      } else {
        this.bodyOrder = order + 1
      }

      this.id = id
    }
  },
  components: {
    CBox, CBody
  },
}
</script>

<style lang="stylus">

@import "../../stylus/mixins"

$container-width = 1040px // 260 * 4
.c-group

  width $container-width
  margin 0 auto

  .tit
    title-mixins()

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
    opacity 0

</style>
