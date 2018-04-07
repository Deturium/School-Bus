<template lang="pug">
.div
  fliter-bar(
    :types='["ALL", "CRYPTO", "MISC", "PPC", "PWN", "REVERSE", "WEB"]'
  )
  rank-table
</template>

<script>

import FliterBar from "@@/FliterBar";
import RankTable from './RankTable'

export default {
  name: "scoreboard",
  components: {
    RankTable, FliterBar
  }
};
</script>

<style lang="stylus">

</style>
