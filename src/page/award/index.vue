<template lang="pug">
.award
  h2.tit - NHD 魔力值兑换 -
  h4.subtit 兑换规则
  ol.rules
    li 签到不消耗积分，但需要积分满足一定条件，需要的积分由本公式给出：
      code int(math.ceil((float(i)/20)**5 * 20000 + 150)) if i<20 else 20150
    li 如果积分不满足上述条件但满足>=500，你仍然可以签到获得25~300魔力值
    li 每天可以获得一次 bonus，如果今天已经获取，欢迎明天再来
    li AAA 对本 bonus 不做担保，规则以后可能发生变化

  transition(name="fade-in")
    p.prompt(v-show="showPrompt")
      //- | 您今天已经签到，请明天再来~
      | 暂时还没写好哦~

  m-button.exchange(
    text="兑换"
    :clickHandle="exchange"
  )
</template>

<script>
import MButton from '@/MButton'

export default {
  name: "award",
  data: function() {
    return {
      showPrompt: false
    }
  },
  methods: {
    exchange() {
      this.showPrompt = true
    }
  },
  components: {
    MButton
  }
}
</script>

<style lang="stylus">
@import "../../stylus/mixins"

.award
  width 750px
  margin 0 auto
  text-align center

  .tit
    title-mixins()
    margin-top 70px

  .subtit
    subtit-mixins()
    margin-top 50px

  .rules
    margin-left 3em
    margin-bottom 30px
    text-align left

    >li
      padding .7em 1em
      line-height 1.5
      font-size 16px
      color #ccc
      text-indent 2em
      text-indent 0

    code
      font-family "Consolas"

  .prompt
    margin 30px
    font-size 16px
    font-weight bold
    color #eee

  .fade-in-enter-active
    transition all 1s
  // .fade-in-leave-active

  .fade-in-enter,
  .fade-in-leave-to
    transform translateX(20%)
    opacity 0
</style>
