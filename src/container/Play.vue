<template lang="pug">
.play
  type-bar
  .q-wrapper
    q-box(
      v-for="(q, i) in qs"
      :key="i"
      :id="i+1"
      :name="q.name"
      :type="q.type"
      :score="q.score"
      :onClick="handleClick"
    )
    q-body(v-show="isShow")
</template>

<script>
import QBox from "../components/QBox";
import TypeBar from "../components/TypeBar";
import QBody from "../components/QBody";

export default {
  name: "play",
  data: function() {
    return {
      isShow: false,
      qs: [
        {
          name: "Check In",
          type: "Misc",
          score: 50
        },
        {
          name: "Check In Two Lines",
          type: "Web",
          score: 100
        },
        {
          name: "Check In Two Lines",
          type: "Web",
          score: 100
        },
        {
          name: "Check In Two Lines",
          type: "Web",
          score: 100
        },
        {
          name: "Check In Two Lines",
          type: "Web",
          score: 100
        },
        {
          name: "Check In Two Lines",
          type: "Web",
          score: 100
        },
      ]
    };
  },
  methods: {
    handleClick: function(id) {
      this.isShow = !this.isShow
    }
  },
  components: {
    QBox, TypeBar, QBody
  }
};
</script>

<style lang="stylus">
.play {
  margin: 0 auto;

  .q-wrapper {
    width: 260 * 4px;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    // justify-content center
  }
}
</style>
