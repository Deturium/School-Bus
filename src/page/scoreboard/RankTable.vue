<template lang="pug">
table.rank-table
  caption.table-tit - Rank Table -
  thead
    tr.rank-head
      th RANK
      th USER
      th POINTS
      th COMMENTS
    //- used as margin-bottom
    tr: th.margin-tr
  tbody
    rank-tr(
      v-for="(r, i) in ranks"
      :key="r.user"
      :rank='i + 1'
      :user="r.user"
      :points="r.points"
      :comments="r.comments"
    )
</template>

<script>
import { mapState } from 'vuex'
import RankTr from './RankTr'

export default {
  name: "rank-table",
  computed: mapState([
    "ranks"
  ]),
  components: {
    RankTr
  }
};
</script>

<style lang="stylus">
@import "../../stylus/mixins"

$max-width = 810px
$th-color = #8e8e8e

.rank-table
  width $max-width
  margin 50px auto
  border-collapse collapse

  .table-tit
    title-mixins()
    margin 0
    margin-bottom 40px

  .rank-head
    border-bottom 1px solid $th-color

  th
    padding-bottom 5px
    color $th-color

  .margin-tr
    height 20px

</style>
