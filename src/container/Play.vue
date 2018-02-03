<template lang="pug">
.play
  type-bar
  q-group(
    :qs="qs"
  )
  q-group(
    :qs="qs"
  )
</template>

<script>
import TypeBar from "../components/TypeBar";
import QGroup from "../components/QGroup";

export default {
  name: "play",
  data: function() {
    return {
      isShow: false,
    };
  },
  computed: {
    qs () {
	    return this.$store.getters.questions
    }
  },
  components: {
    QGroup, TypeBar
  }
};
</script>

<style lang="stylus">
.play {
  min-height 80vh
  margin: 0 auto;
}
</style>
