<template lang="pug">
.c-group(
  v-show="filterChallenges.length"
)
  h2.tit - {{ category }} -
  .flex
    c-box(
      v-for="(c, i) in filterChallenges"
      :key="c.id"
      :order="(~~(i/4))*2"
      :challenge="c"
      :clickHandle="clickHandle"
    )
    transition(
      name="fade"
    )
      c-body(
        v-if="isShow && checkFilterType(challenge)"
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
    "challenges"
  ],
  data: function() {
    return {
      isShow: false,
      bodyOrder: 0,
      id: parseInt(this.$route.params.id, 10),
    }
  },
  computed: {
    filterType() {
      return this.$store.state.filterType
    },
    filterChallenges() {
      return this.challenges.filter(this.checkFilterType)
    },
    challenge() {
      return this.challenges.find( c => c.id === this.id )
    },
  },
  methods: {
    checkFilterType(challenge) {
      if (this.filterType === 'ALL')
        return true
      if (this.filterType === 'UNSOLVED')
        return !challenge.is_solved

      return this.filterType === challenge.type.toUpperCase()
    },

    clickHandle: function(id, order) {

      // hide
      if (this.isShow && this.id === id){
        this.isShow = false
        history.replaceState(null, "AAA challenges", "/challenges")
        return
      }

      this.id = id
      this.bodyOrder = order + 1
      history.replaceState(null, this.challenge.title, "/challenges/" + id)

      // show
      if (!this.isShow) {
        this.isShow = true
        return
      }

      // toggle anthor challenges
      this.isShow = false
      setImmediate(() => {
        this.isShow = true
      })
    },

    submitHandle(id, isSolved) {
      if (isSolved)
        return

      // TODO:
      const userInfo = this.$store.state.userInfo
      this.challenge.is_solved = true
      this.challenge.early_pwner.push(userInfo.name)
      userInfo.score += this.challenge.points
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
    transform translateY(-80px)
    opacity 0

</style>
