<template lang="pug" >

.news

  h2.tit NEWS

  article.new
    .meta
      time 2019.10.13
      h4.js-news-title 恭喜AAA在TCTF-RisingStar CTF中荣获冠军

    p.content.js-news-content
      |  TCTF是由中国网络空间安全协会竞评演练工作委员会指导，由腾讯安全发起、腾讯安全联合实验室主办，0ops安全团队、北京邮电大学协办的腾讯信息安全争霸赛，致力于联合行业战略伙伴建立国内首个专业安全人才培养平台，发掘、培养有志于安全事业的年轻人，帮助他们实现职业理想，站上世界舞台。RisingStar CTF由主办方定向邀请合作的高校学生战队参加，题目、计分排名规则与0CTF相同。

    .link


  article.new
    .meta
      time 2019.10.13
      h4.js-news-title 专访AAA队长朱梦凡 | 走到今天全靠成员的坚持

    p.content.js-news-content
      |  在前不久刚结束的第四届XCTF联赛揭幕战武汉站WHCTF线上赛的比赛中，来自浙江大学的AAA战队给我们带来了一场完美的绝杀！在距离比赛还有一个小时结束时，成功反超清华大学的Redbud战队，最终赢得比赛第一名，直接杀入第四届XCTF总决赛，可以说是既精彩又刺激！

    .link


</template>

<script>
export default {
  name: "News"
};
</script>

<style lang="stylus" scoped>
@import '../styles/var.styl'

.news
  max-width: 860px
  margin: 0 auto

  .tit
    margin: 40px 0
    font-size: 3em

  .new
    margin: 40px

  .meta
    > time
      margin: 0
    > h4
      margin: 10px 0 20px 0
      font-size: 1.5em
      cursor: pointer

  .content
    line-height: 1.5
    letter-spacing: 0.1em
    text-indent: 2em


</style>
