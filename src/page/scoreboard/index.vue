<template lang="pug">
table.rank-table
  tr.rank-head
    th RANK
    th USER
    th POINTS
    th COMMENTS
  tr: td.empty-tr
  rank-tr(
    v-for="(r, i) in rank"
    :key="r.user"
    :rank='i + 1'
    :user="r.user"
    :points="r.points"
    :comments="r.comments"
  )

</template>

<script>

import RankTr from './children/RankTr'

export default {
  name: "rank-table",
  data: function() {
    return {
      rank: this.$store.state.rank
    }
  },
  components: {
    RankTr
  }
};
</script>

<style lang="stylus">
.rank-table
  width 1100px
  margin 0 auto
  border-collapse collapse

  .rank-head
    border-bottom 1px solid #8e8e8e

  th
    padding-bottom 5px
    color #8e8e8e

  .empty-tr
    height 20px

</style>
