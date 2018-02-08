<template lang="pug">
.challengs
  type-bar
  q-group(
    :qs="qs"
  )
  q-group(
    :qs="qs"
  )
</template>

<script>
import TypeBar from "./children/TypeBar";
import QGroup from "./children/QGroup";

export default {
  name: "challengs",
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
  margin: 0 auto;
}
</style>
