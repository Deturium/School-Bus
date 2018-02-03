<template lang="pug">
.q-group(v-show="qs.length")
  .tit
    | - Welcome -
  .flex
    q-box(
      v-for="(q, i) in qs"
      :key="q.name + i"
      :order="(~~(i/boxPerLine))*2"
      :name="q.name"
      :type="q.type"
      :score="q.score"
      :onClick="handleClick"
    )
    q-body(
      v-show="isShow"
      :order="order"
    )
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
      order: 0,

      boxPerLine: 4 // a const config now
    }
  },
  props: [
    "qs"
  ],
  methods: {
    handleClick: function(order) {
      this.isShow = !this.isShow
      this.order = order+1
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

  .flex
    width: 260 * 4px;
    margin: auto;
    display: flex;
    flex-wrap wrap
    justify-content center
</style>
