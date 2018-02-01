<template lang="pug">
.play
  type-bar
  .q-wrapper
    q-box(
      name="Check In Two Lines"
      type="Misc"
      score="50"
    )
    q-box(
      name="Check In"
      type="Web"
      score="100"
    )
    q-body
</template>

<script>
import QBox from "../components/QBox"
import QBody from "../components/QBody"
import TypeBar from "../components/TypeBar"

export default {
  name:"play",
  components: {
    QBox, TypeBar, QBody
  }
}
</script>

<style lang="stylus">
.play
  margin 0 auto
  .q-wrapper
    width 960
    display flex
    flex-wrap wrap
    margin 30px
    justify-content center
</style>
