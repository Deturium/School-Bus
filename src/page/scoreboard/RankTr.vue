<template lang="pug">
tr.rank-tr
  td(:style="{color: rankColor}") {{ rank }}
  td {{ username }}
  td {{ points }}
  td.comment {{ comment }}
</template>

<script>
export default {
  name: "rank-tr",
  props: [
    "rank",
    "username",
    "points",
    "comment",
  ],
  computed: {
    rankColor: function() {
      const colorDict = {
        1: "#EEC710",
        2: "#A8A8A8",
        3: "#A77D00",
      }
      return colorDict[this.rank]
    }
  },
};
</script>

<style lang="stylus">
.rank-tr
  text-align center

  > td
    padding 15px
    font-weight bold
    color #ccc

  .comment
    font-weight normal

  &:hover
    background-color #333
</style>
