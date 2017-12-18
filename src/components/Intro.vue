<template lang="pug">

.intro

  h2.intro-tit INTRODUCTION

  section.sec
    h4.tit What is 'AAA'?
    p.para
      | AAA (Azure Assassin Alliance) 战队是由浙江大学信息安全爱好者自发组织，浙江大学计算机学院支持建立的团队，队伍中每一位成员都对信息安全有无与伦比的热爱，因此对 CTF 比赛总是充满了激情。可惜人在江湖，身不由己，正所谓

    p.kaishu
      | 天下风云出我辈，一入江湖岁月催。皇图霸业谈笑中，不胜人生一场醉

    p.para
      | AAA 的第一代主力成员现已分散在全国各地，但我们坚信   “江山代有才人出，各领风骚数百年”   希望有越来越多志同道合的朋友加入，愿 AAA 之火永不熄灭。

  section
    h4.tit What is 'School-Bus'?

    img.img(:src='picAAA')

    p.para
      | 'School-Bus' 是一个面向所有 ZJU 学生开放的 CTF 练习平台，同学们能够在这个平台上学习和训练自己各方面的 Hacking 技能。本平台将涵盖 Pwnable, Reverse, Web, Crypto, Misc, Program 等全类型的题目，我们将会持续更新，同时对于表现出色的同学也会给予一定的奖励。

    p.para
      | 平台采用 Jeopardy 解题模式，解决题目之后你将会得到一串 'AAA{*******}' 格式的字符串，将这个字符串提交到比赛平台即可获得相应的分数。


  section.sec
    h4.tit Rules & Tips

    table.table
      tr: td
        | 1. 禁止一切形式的拒绝服务攻击。（ 如果需要 Bruteforce 我们会在题目描述中单独说明
      tr: td
        | 2. 无特殊说明 flag 的格式均为 <em>AAA{**************}</em>
      tr: td
        | 3. 如果发现平台 Bug 请报告给管理员
      tr: td
        | 4. 强烈推荐记录 writeup（即题目的解法和解题过程中遇到的困难等），但强烈 <em>不</em> 推荐公开 writeup，请不要让其他同学能够在网上搜到你的 writeup
      tr: td
        | 5. 禁止交换 flag 等作弊行为。若对题目有疑问或希望得到 hint 请在群内提问或 Email 管理员
      tr: td
        | 6. 通过 Google 快速学习新知识是 CTF 中必不可少的技能。 Google is the best teacher in the world.


  section.sec
    h4.tit Contact

    table.table
      tr
        td admin
        td AAA (aaa.zju#gmail)
      tr
        td QQ Group
        td 完成任意一道 'Welcome' 类的题目，群号就在 flag 中 →_→ 开始玩耍

</template>

<script>
import AAA from '../assets/AAA.png'

export default {
  name: 'Intro',
  data() {
    return {
      picAAA: AAA
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/var.styl'

.intro
  max-width: 860px
  margin: 0 auto
  margin-top: 100px

  .intro-tit
    margin: 40px 0
    font-size: 3em

  .sec
    margin: 40px
    margin-bottom: 80px

  .tit
    text-align: center
    font-size: 1.5em

  .img
    display: block
    width: 300px
    margin: 30px auto

  .para
    line-height: 1.5
    letter-spacing: 0.1em
    text-indent: 2em

  .table
    width: 100%
    border-collapse: collapse

  .table th,
  .table td
    padding: 10px 20px
    border: 2px solid theme-color-900

  em
    font-style: normal
    font-weight: bold

  .kaishu
    text-align: center
    font-family:"Zhuyin Kaiti", "Han Kaiti", "KaiTi"

</style>

