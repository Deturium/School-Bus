import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
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
