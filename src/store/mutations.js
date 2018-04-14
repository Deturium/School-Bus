import * as t from './mutation-types'

export default {
  [t.LOG_IN](state, userInfo) {
    state.isLogIn = true
    // userInfo = {
    //   name: string,
    //   rank: number,
    //   score: number,
    // }
    state.userInfo = userInfo
  },

  [t.LOG_OUT](state) {
    state.isLogIn = false
  },

  [t.SHOW_POPUPFORM](state, formName) {
    state.popForm.formName = formName
    state.popForm.isShow = true
  },

  [t.HIDE_POPUPFORM](state) {
    state.popForm.isShow = false
  },

  [t.ADD_NOTIFICATION](state, payload) {
    // payload: {
    //   title: string,
    //   description: string,
    //   type: string,
    //   survivalTime: number
    // }
    state.notifications.push(payload)
  },

  [t.UPDATE_CHALLENGES](state, challenges) {
    state.challenges = challenges
  },

  [t.UPDATE_RANKS](state, ranks) {
    state.ranks = ranks
  },

  [t.UPDATE_ANNOUNCEMENTS](state, announcements) {
    state.announcements = announcements
  },

  [t.SLOVE_CHALLENGE](state, challenge) {
    challenge.is_solved = true
    challenge.early_pwner.push(state.userInfo.name)
    state.userInfo.score += challenge.points
  },
}
