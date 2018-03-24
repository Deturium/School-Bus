<template lang="pug">
.c-group
  h2.tit - {{ category }} -
  .flex
    c-box(
      v-for="(c, i) in challenges"
      :key="c.id"
      :order="(~~(i/4))*2"

      :id="c.id"
      :title="c.title"
      :type="c.type"
      :points="c.points"

      :clickHandle="clickHandle"
    )
    transition(name="fade")
      c-body(
        v-if="isShow"
        :order="bodyOrder"

        :challenge="challenge"
        :submitHandle="submitHandle"
      )
</template>

<script>
import CBox from "./CBox";
import CBody from "./CBody";

export default {
  name: "c-group",
  props: [
    "category",
    "types"
  ],
  data: function() {
    return {
      isShow: false,
      bodyOrder: 0,
      id: NaN
    }
  },
  computed: {
    challenges() {
      const challenges = []
      for (let t of this.types)
        for (let c of t.challenges) {
          c.type = t.type
          challenges.push(c)
        }
      return challenges
    },
    challenge() {
      return this.challenges.find( c => c.id === this.id )
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

      this.challenge.is_solved = true
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
