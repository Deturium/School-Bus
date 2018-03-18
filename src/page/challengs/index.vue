<template lang="pug">
.challengs
  fliter-bar
  c-group(
    :challengs="challengs"
  )
  c-group(
    :challengs="challengs"
  )
</template>

<script>
import FliterBar from "@@/FliterBar";
import CGroup from "./CGroup";

export default {
  name: "challengs",
  data: function() {
    return {
      isShow: false,
    };
  },
  computed: {
    challengs () {
	    return this.$store.getters.challengs
    }
  },
  components: {
    FliterBar, CGroup
  }
};
</script>

<style lang="stylus">
</style>
