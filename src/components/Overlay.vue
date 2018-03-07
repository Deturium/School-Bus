<template lang="pug">
.overlay(
  v-show="isShow"
  @click="hide"
)
  | Hi~~
</template>

<script>
export default {
  name: "overlay",
  data: function() {
    return {
      isShow: false
    }
  },
  methods: {
    hide: function() {
      this.isShow = false
    }
  }

}
</script>

<style lang="stylus">
.overlay
  position fixed
  top calc(50% - 250px)
  left calc(50% - 400px)

  width 800px
  height 500px

  display flex
  justify-content center
  align-items center

  background-color black
  z-index 100

</style>
