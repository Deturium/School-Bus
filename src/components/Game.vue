<template lang="pug">
  <canvas id="game"></canvas>
</template>

<script>
import __main from "../scripts/LifeGame";

export default {
  name: "Game",
  mounted: function() {
    const canvas = document.getElementById("game");
    __main(canvas)
  }
};
</script>

<style lang="stylus">
#game-board {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -2;
}

#game {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  border: 2px solid #bdbdbd;
  opacity: 0.6;
}
</style>
