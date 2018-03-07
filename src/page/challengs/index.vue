<template lang="pug">
.challengs
  fliter-bar
  q-group(
    :qs="qs"
  )
  q-group(
    :qs="qs"
  )
</template>

<script>
import FliterBar from "./children/FliterBar";
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
    QGroup, FliterBar
  }
};
</script>

<style lang="stylus">
</style>
