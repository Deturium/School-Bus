<template lang="pug">
.div
  fliter-bar
  rank-table
</template>

<script>

import FliterBar from "../../components/FliterBar";
import RankTable from './children/RankTable'

export default {
  name: "scoreboard",
  components: {
    RankTable, FliterBar
  }
};
</script>

<style lang="stylus">

</style>
