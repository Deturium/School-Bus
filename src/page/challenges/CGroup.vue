<template lang="pug">
.c-group(v-show="challenges.length")
  h2.tit
    | - Welcome -
  .flex
    c-box(
      v-for="(c, i) in challenges"
      :key="c.id"
      :order="(~~(i/4))*2"

      :id="c.id"
      :title="c.title"
      :points="c.points"

      :clickHandle="clickHandle"
    )
    transition(name="fade")
      c-body(
        v-show="isShow"
        :order="bodyOrder"

        :challenge="challenge"
        :submitHandle="submitHandle"
      )
</template>

<script>
import CBox from "./CBox";
import CBody from "./CBody";
import { functionDeclaration } from 'babel-types';

export default {
  name: "c-group",
  props: [
    "challenges"
  ],
  data: function() {
    return {
      isShow: false,
      bodyOrder: 0,
      id: this.challenges[0].id,
    }
  },
  computed: {
    challenge: function() {
      return this.challenges[this.id-1]
    }
  },
  methods: {
    clickHandle: function(id, order) {
      // show
      if (!this.isShow) {
        this.id = id
        this.isShow = true
        this.bodyOrder = order + 1
        return
      }

      // hide
      if (this.id === id){
        this.isShow = false
        return
      }

      // toggle another challenge
      this.id = id
      this.bodyOrder = order + 1
    },
    submitHandle(id, isSolved) {
      if (isSolved)
        return

      // TODO:
      this.challenges[id-1].is_solved = true
    },
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
