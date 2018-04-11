<template lang="pug">
table.develope-team
  tbody
    tr
      td.duty 设计
      td Clapeysron
    tr
      td.duty 前端
      td Hydrogen
    tr
      td.duty 后端
      td Himyth
    tr
      td.duty 运维
      td ChenYuan
</template>

<script>
export default {
  name: "develope-team",
}
</script>

<style lang="stylus">
.develope-team
  margin 15px auto
  font-size 16px
  color #ccc
  text-align center
  border-collapse collapse

  td
    padding 5px 20px
    border 1px solid #ccc

  .duty
    font-weight bold

</style>
