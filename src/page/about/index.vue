<template lang="pug">
.about
  h2.tit - News -
  announcement(
    v-for="(anno, i) in announcements"
    :key="i"
    :initShow="false"
    :time="anno[0]"
    :title="anno[1]"
    :body="anno[2]"
  )

  h2.tit - About AAA -
  img.team-icon(src="../../assets/AAA_logo_with_name.png")

  p AAA (Azure Assassin Alliance) 战队是由浙江大学信息安全爱好者自发组织，
    | 浙江大学计算机学院支持建立的团队，队伍中每一位成员都对信息安全有无与伦比的热爱，
    | 因此对 CTF 比赛总是充满了激情。可惜人在江湖，身不由己，正所谓
    | 天下风云出我辈，一入江湖岁月催。皇图霸业谈笑中，不胜人生一场醉

  p AAA 的第一代主力成员现已分散在全国各地，但我们坚信
    |  “江山代有才人出，各领风骚数百年”
    | 希望有越来越多志同道合的朋友加入，愿 AAA 之火永不熄灭。


  h2.tit - About 本平台 -
  p 'School-Bus' 是一个面向所有 ZJU 学生开放的 CTF 练习平台，
    | 同学们能够在这个平台上学习和训练自己各方面的 Hacking 技能。
    | 本平台将涵盖 Pwnable, Reverse, Web, Crypto, Misc, Program 等全类型的题目，
    | 我们将会持续更新，同时对于表现出色的同学也会给予一定的奖励。

  p 平台采用 Jeopardy 解题模式，解决题目之后你将会得到
    | 一串 'AAA{*******}' 格式的字符串，将这个字符串提交到比赛平台即可获得相应的分数


  h2.tit - Rules & Tips -
  ol.rules
    li 禁止一切形式的拒绝服务攻击。（ 如果需要 Bruteforce 我们会在题目描述中单独说明
    li 无特殊说明 flag 的格式均为 AAA{**************}
    li 如果发现平台 Bug 请报告给管理员
    li 强烈推荐记录 writeup（即题目的解法和解题过程中遇到的困难等），
      | 但强烈<em> 不 </em>推荐公开 writeup，请不要让其他同学能够在网上搜到你的 writeup
    li 禁止交换 flag 等作弊行为。若对题目有疑问或希望得到 hint 请在群内提问或 Email 管理员
    li 通过 Google 快速学习新知识是 CTF 中必不可少的技能<br>
      | Google is the best teacher in the world.


  h2.tit - Contact -
  h4.sub-tit EMAIL
  p aaa.zju@zju.gmail
  h4.sub-tit ZJU Security QQ群
  p 完成任意一道 'Welcome' 类的题目<br>群号就在 flag 中
  h4.sub-tit Develop Team
  p Hydrogen Clapeysron
</template>

<script>
import Announcement from './Announcement'
import { mapState } from 'vuex'

export default {
  name: "about",
  components: {
    Announcement
  },
  computed: mapState([
    "announcements"
  ]),
  created: function() {
    this.$store.dispatch('fetchAnnouncement')
  }
}
</script>

<style lang="stylus">

@import "../../stylus/mixins"

$max-width = 750px

.about
  width $max-width
  margin 0 auto

  .team-icon
    display block
    margin 40px auto
    width 250px

  .tit
    title-mixins()
    margin-top 70px

  p, li
    line-height 1.8
    font-size 16px
    font-weight normal
    color #ccc
    text-indent 2em
    text-align left

  .rules
    margin-left 2em

    >li
      padding .7em 1em
      text-indent 0
      line-height 1.5
      // list-style-type decimal

  em
    font-weight bold
    font-style normal

  .sub-tit
    sub-tit-mixins()

    +p
      margin-top 5px
      text-align center
      text-indent 0
</style>
