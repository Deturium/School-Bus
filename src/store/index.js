import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {

  // PopForm
  popForm: {
    isShow: false,
    formName: "Log In"
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

  // challengs
  challengs: [
    {
      name: "Check In",
      type: "Misc",
      score: 50
    },
    {
      name: "Check In Two Lines",
      type: "Crypto",
      score: 100
    },
    {
      name: "Check In 2 Lines",
      type: "Crypto",
      score: 130
    },
    {
      name: "Check In Two Lines",
      type: "Web",
      score: 70
    },
    {
      name: "Check In 2 Lines",
      type: "PPC",
      score: 100
    },
    {
      name: "Check In Two Lines",
      type: "Web",
      score: 100
    },
  ],

  // scoreboard
  ranks: [
    {
      user: "Hydrogen",
      points: "8000",
      comments: "假装自己是第一"
    },
    {
      user: "hyln9",
      points: "7000",
      comments: "感谢各位大佬Orz"
    },
    {
      user: "zuhxs",
      points: "6000",
      comments: "<script>alert('alert')</script>"
    },
    {
      user: "Clapeysron",
      points: "5000",
      comments: "<script>alert('xss')</script>"
    },
  ]
}

const getters = {
  challengs: state => {
    return state.fliterType === 'ALL'
      ? state.challengs
      : state.challengs.filter(
        c => c.type.toUpperCase() === state.fliterType
      )
  }
}

export default new Vuex.Store({
  state,
  getters,
	actions,
	mutations
})
