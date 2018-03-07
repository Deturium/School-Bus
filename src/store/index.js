import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  userInfo: {

  },

  // challengs
  fliterType: "ALL",
  qs: [
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
  rank: [
    {
      user: "prayer",
      points: "8000",
      comments: "我爱himyth，himyth使我快乐"
    },
    {
      user: "hyln9",
      points: "7000",
      comments: "感谢各位大佬Orz"
    },
    {
      user: "zuhxs",
      points: "6000",
      comments: "<script>alert('xss')</script>"
    },
    {
      user: "Clapeysron",
      points: "5000",
      comments: "<script>alert('xss')</script>"
    },
  ]
}

const getters = {
  questions: state => {
    return state.fliterType === 'ALL'
      ? state.qs
      : state.qs.filter(
        q => q.type.toUpperCase() === state.fliterType
      )
  }
}

export default new Vuex.Store({
  state,
  getters,
	actions,
	mutations
})
