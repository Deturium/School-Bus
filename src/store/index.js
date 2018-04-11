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

  // Notification
  notifications: [
    // {
    //   title: "aaa",
    //   description: "dddd",
    //   type: "",
    //   survivalTime: 4
    // },
    // {
    //   title: "ccc",
    //   description: "eeeee",
    //   type: "",
    //   survivalTime: 0
    // }
  ],

  // UserInfo
  isLogIn: false,
  userInfo: {
    name: "Clapeysron",
    rank: "5",
    score: 8250,
  },

  // challenges
  challenges: [

  ],

  // scoreboard
  ranks: [

  ],

  // about & news
  announcements: [

  ],
}

const getters = {

}

export default new Vuex.Store({
  state,
  getters,
	actions,
	mutations
})
