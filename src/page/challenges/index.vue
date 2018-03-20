<template lang="pug">
.challenges
  fliter-bar
  c-group(
    :challenges="challenges"
  )
  c-group(
    :challenges="challenges"
  )
</template>

<script>
import FliterBar from "@@/FliterBar";
import CGroup from "./CGroup";

export default {
  name: "challenges",
  computed: {
    challenges () {
	    return this.$store.state.challenges
    }
  },
  components: {
    FliterBar, CGroup
  }
};
</script>

<style lang="stylus">
</style>
