<template lang="pug">
  <canvas id="game"></canvas>
</template>

<script>
import { Director } from "../scripts/GameEngine";
import { LifeGameScene } from "../scripts/LifeGame";

function __main() {
  const canvas = document.getElementById("game");

  const D = new Director(canvas, null, {
    fps: 1,
    enablePause: false
  });

  const scene = new LifeGameScene(D);

  D.setScene(scene).run();
}

export default {
  name: "Game",
  mounted: function() {
    __main()
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
