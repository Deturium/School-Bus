<template lang="pug">
.challenges
  fliter-bar(
    :selected="selected"
    :types='["ALL", "UNSOLVED", "CRYPTO", "MISC", "PPC", "PWN", "REVERSE", "WEB"]'
    :typeChangeHandle="typeChangeHandle"
  )
  c-group(
    v-for="group in challenges"
    :filterType="selected"
    :key="group.category"
    :category="group.category"
    :challenges="group.challenges"
  )
</template>

<script>
import FliterBar from "@/FliterBar";
import CGroup from "./CGroup";

export default {
  name: "challenges",
  data: function() {
    return {
      selected: "ALL",
    }
  },
  computed: {
    challenges () {
	    return this.$store.state.challenges
    }
  },
  methods: {
    typeChangeHandle(type) {
      this.selected = type
    }
  },
  created() {
    if (!this.$store.state.challenges.length) {
      this.$store.dispatch('fetchChallenge')
    }
  },
  components: {
    FliterBar, CGroup
  }
};
</script>

<style lang="stylus">
</style>
