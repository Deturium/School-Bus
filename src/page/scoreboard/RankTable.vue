<template lang="pug">
table.rank-table
  caption.title - Rank Table -
  thead
    tr.head
      th RANK
      th USER
      th POINTS
      th COMMENT
    //- used as margin-bottom
    tr: th.margintr
  tbody
    rank-tr(
      v-for="(r, i) in ranks"
      :key="r.userid"
      :rank='i + 1'
      :username="r.username"
      :points="r.points"
      :comment="r.comment"
    )
</template>

<script>
import RankTr from './RankTr'

export default {
  name: "rank-table",
  props: [
    "ranks"
  ],
  components: {
    RankTr
  },
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

  .title
    title-mixins()
    margin 0
    margin-bottom 40px

  .head
    border-bottom 1px solid $th-color
    >th
      padding-bottom 5px
      color $th-color

  .margintr
    height 20px

</style>
