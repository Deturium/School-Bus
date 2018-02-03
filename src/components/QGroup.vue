<template lang="pug">
.q-group(v-show="qs.length")
  .tit
    | - Welcome -
  .line
    q-box(
      v-for="(q, i) in qs"
      :key="q.name + i"
      :id="i+1"
      :name="q.name"
      :type="q.type"
      :score="q.score"
      :onClick="handleClick"
    )
  q-body(v-if="isShow")
</template>

<script>
import QBox from "./QBox";
import QBody from "./QBody";

export default {
  name: "QGroup",
  components: {
    QBox, QBody
  },
  data: function() {
    return {
      isShow: false,
    }
  },
  props: [
    "qs"
  ],
  methods: {
    handleClick: function(id) {
      this.isShow = !this.isShow
    }
  },
}
</script>

<style lang="stylus">
.q-group
  .tit
    margin-top 30px
    font-size 26px
    font-weight bold
    text-align center

  .line
    width: 260 * 4px;
    margin: auto;
    display: flex;
    flex-wrap wrap
    // justify-content center
</style>
