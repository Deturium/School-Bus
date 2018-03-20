import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {

  // PopForm
  popForm: {
    isShow: false,
    formName: "LogIn"
  },


  // UserInfo
  isLogIn: false,
  userInfo: {
    name: "Clapeysron",
    rank: "5",
    score: "8250",
  },

  // FliterBar
  fliterType: "ALL",

  // challenges
  challenges: [
    {
      id: 1,
      title: "Check In 243",
      description: "本题是传说中的签到题，flag为：AAA{Welcome_to_School_Bus}\n获取到flag后(当然这里只要Ctrl+C)，填入下方框框中，提交即可获得本题分数\n这里flag都是AAA{...}的格式，如果你做出了任何一个题目，欢迎加入qq群，群号就在flag里面。\nAAA期待你的加入！",
      hint: "没有Hint",
      attachments: "",
      points: 100,
      is_solved: false,
      pwned_times: 4,
      early_pwner: ["chenyuan", "zuhxs"]
    },
    {
      id: 2,
      title: "Check In 657",
      description: "本题是传说中的签到题，flag为：AAA{Welcome_to_School_Bus}\n获取到flag后(当然这里只要Ctrl+C)，填入下方框框中，提交即可获得本题分数\n这里flag都是AAA{...}的格式，如果你做出了任何一个题目，欢迎加入qq群，群号就在flag里面。\nAAA期待你的加入！",
      hint: "没有Hint",
      attachments: "",
      points: 100,
      is_solved: false,
      pwned_times: 4,
      early_pwner: ["chenyuan", "zuhxs"]
    },
    {
      id: 3,
      title: "Check In 656",
      description: "本题是传说中的签到题，flag为：AAA{Welcome_to_School_Bus}\n获取到flag后(当然这里只要Ctrl+C)，填入下方框框中，提交即可获得本题分数\n这里flag都是AAA{...}的格式，如果你做出了任何一个题目，欢迎加入qq群，群号就在flag里面。\nAAA期待你的加入！",
      hint: "没有Hint",
      attachments: "",
      points: 100,
      is_solved: false,
      pwned_times: 4,
      early_pwner: ["chenyuan", "zuhxs"]
    },
    {
      id: 4,
      title: "Check In 313",
      description: "本题是传说中的签到题，flag为：AAA{Welcome_to_School_Bus}\n获取到flag后(当然这里只要Ctrl+C)，填入下方框框中，提交即可获得本题分数\n这里flag都是AAA{...}的格式，如果你做出了任何一个题目，欢迎加入qq群，群号就在flag里面。\nAAA期待你的加入！",
      hint: "没有Hint",
      attachments: "",
      points: 100,
      is_solved: false,
      pwned_times: 4,
      early_pwner: ["chenyuan", "zuhxs"]
    },
    {
      id: 5,
      title: "Check In 432",
      description: "本题是传说中的签到题，flag为：AAA{Welcome_to_School_Bus}\n获取到flag后(当然这里只要Ctrl+C)，填入下方框框中，提交即可获得本题分数\n这里flag都是AAA{...}的格式，如果你做出了任何一个题目，欢迎加入qq群，群号就在flag里面。\nAAA期待你的加入！",
      hint: "没有Hint",
      attachments: "",
      points: 100,
      is_solved: true,
      pwned_times: 4,
      early_pwner: ["chenyuan"]
    },
    {
      id: 6,
      title: "Check In 321",
      description: "本题是传说中的签到题，flag为：AAA{Welcome_to_School_Bus}\n获取到flag后(当然这里只要Ctrl+C)，填入下方框框中，提交即可获得本题分数\n这里flag都是AAA{...}的格式，如果你做出了任何一个题目，欢迎加入qq群，群号就在flag里面。\nAAA期待你的加入！",
      hint: "没有Hint",
      attachments: "",
      points: 100,
      is_solved: true,
      pwned_times: 4,
      early_pwner: ["zuhxs"]
    },
  ],

  // scoreboard
  ranks: [
    {
      username: "Hydrogen",
      points: "8000",
      comment: "假装自己是第一"
    },
    {
      username: "hyln9",
      points: "7000",
      comment: "感谢各位大佬Orz"
    },
    {
      username: "zuhxs",
      points: "6000",
      comment: "<script>alert('alert')</script>"
    },
    {
      username: "Clapeysron",
      points: "5000",
      comment: "<script>alert('xss')</script>"
    },
  ]
}

const getters = {

}

export default new Vuex.Store({
  state,
  getters,
	actions,
	mutations
})
