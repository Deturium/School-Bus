<template lang="pug" >
.header
  nav
    a.item(href='index.html') Home
    a.item(href='play.html') Play
    a.item Rank
    a.item Activities
    a.item Bonus

  nav
    a.item Login in

</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="stylus">
@import '../styles/var.styl'

.header
  max-width: layout-max-width
  margin: 0 auto
  display: flex
  justify-content: space-between

  .item
    display: inline-block
    padding: 10px 20px
    letter-spacing: 0.05em
    color: theme-color-900
    cursor: pointer
    text-decoration: none

    &:hover
      color: theme-color-100
      background-color: rgba(theme-color-400, .85)
</style>
