<template lang="pug">
canvas(
  width=1160
  height=800
  ref="gameCanvas"
)
</template>

<script>
import lifeGame from '../../scripts/LifeGame'

export default {
  name: "life-game",
  mounted() {
    const driector = lifeGame(this.$refs.gameCanvas)
    driector.draw()

    setTimeout(() => {
      driector.run()
    }, 1000 * 5)
  },
}
</script>

<style lang="stylus">

</style>
