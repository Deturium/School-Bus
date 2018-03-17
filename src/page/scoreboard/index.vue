<template lang="pug">
.div
  fliter-bar
  rank-table
</template>

<script>

import FliterBar from "~/FliterBar";
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
