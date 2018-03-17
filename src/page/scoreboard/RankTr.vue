<template lang="pug">
tr.rank-tr
  td(:style="{color: rankColor}") {{ rank }}
  td {{ user }}
  td {{ points }}
  td.comments {{ comments }}
</template>

<script>
export default {
  name: "rank-tr",
  props: [
    "rank",
    "user",
    "points",
    "comments",
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

  .comments
    font-weight normal

  &:hover
    background-color #333
</style>
