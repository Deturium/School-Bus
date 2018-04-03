<template lang="pug">
.challenges
  fliter-bar
  c-group(
    v-for="group in challenges"
    :key="group.category"
    :category="group.category"
    :challenges="group.challenges"
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
  created() {
    this.$store.dispatch('fetchChallenge')
  },
  components: {
    FliterBar, CGroup
  }
};
</script>

<style lang="stylus">
</style>
