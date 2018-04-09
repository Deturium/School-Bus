<template lang="pug">
.div
  fliter-bar(
    :selected="selected"
    :types='["ALL", "CRYPTO", "MISC", "PPC", "PWN", "REVERSE", "WEB"]'
    :typeChangeHandle="typeChangeHandle"
  )
  rank-table(
    :ranks="ranks"
  )
</template>

<script>
import { mapState } from 'vuex'
import FliterBar from "@/FliterBar";
import RankTable from './RankTable'

export default {
  name: "scoreboard",
  data: function() {
    return {
      selected: "ALL",
    }
  },
  computed: mapState([
    "ranks"
  ]),
  methods: {
    typeChangeHandle(type) {
      this.selected = type
      this.$store.dispatch('fetchRank', this.selected)
    }
  },
  created() {
    this.selected = this.$route.params.type ? this.$route.params.type : "ALL"
    this.$store.dispatch('fetchRank', this.selected)
  },
  components: {
    RankTable, FliterBar
  }
};
</script>

<style lang="stylus">

</style>
