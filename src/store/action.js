import { GET, POST } from './utility'

export default {

  async fetchChallenge({commit}) {
    const res = await GET('challenges/')
    const challenges = res["Message"]

    commit('UPDATE_CHALLENGES', challenges)
  },

  async fetchRank({commit}, type) {
    const res = await GET('ranks/' + type.toLowerCase() + '/')
    const ranks = res["Message"]

    commit('UPDATE_RANKS', ranks)
  },

  async fetchAnnouncement({commit}) {
    const res = await GET('announcement/all')
    const announcements = res["Message"]

    commit('UPDATE_ANNOUNCEMENTS', announcements)
  },



  async logIn({dispatch, commit}, {username, password}) {
    if (username && password) {
      const res = await POST('login/', {
        username,
        password,
      })

      if (res['Succeed']) {
        // log in success
        const res = await GET('member/info/', {username})
        const retInfo = res["Message"]
        commit('UPDATE_USERINFO', {
          name: retInfo.username,
          rank: retInfo.rank,
          score: retInfo.point,
        })
        commit('LOG_IN')
        localStorage.setItem('username', username)
        commit('HIDE_POPUPFORM')

        // re fetch challenges
        dispatch('fetchChallenge')

        return Promise.resolve()

      } else {
        commit('ADD_NOTIFICATION', {
          title: 'LOGIN FAIL',
          description: res.Message,
          type: "ERROR",
          survivalTime: 5
        })

        return Promise.reject()
      }
    }

    // no username or password
    return Promise.reject()
  },

  async autoLogIn({commit}) {
    const username = localStorage.getItem('username')
    if (username) {
      const res = await GET('member/info/', {username})
      if (res["Succeed"]) {
        const retInfo = res["Message"]
        commit('UPDATE_USERINFO', {
          name: retInfo.username,
          rank: retInfo.rank,
          score: retInfo.point,
        })
        commit('LOG_IN')
      }
    }
  },

  async logOut({dispatch, commit}) {
    await GET('logout/')
    commit('LOG_OUT')
    localStorage.clear()
    dispatch('fetchChallenge')
  },

  async register({commit}, {stuNo, username, password, phone, comment}) {
    if (stuNo) {
      const res = await POST('register/', {
        student_id: stuNo,
        username,
        password,
        phone_number: phone,
        comment,
      })

      if (res["Succeed"]) {
        commit('ADD_NOTIFICATION', {
          title: 'REGISTER SUCCESS',
          description: res.Message,
          type: "HINT",
          survivalTime: 0
        })

      } else {
        commit('ADD_NOTIFICATION', {
          title: 'REGISTER FAIL',
          description: res.Message,
          type: "ERROR",
          survivalTime: 7
        })
      }
    }
  },

  async resetPassword({commit}, {stdNo, username}) {
    const res = await POST('password/reset/', {
      student_id: stdNo,
      username,
    })
    if (res["Succeed"]) {
      commit('ADD_NOTIFICATION', {
        title: 'RESET SUCCESS',
        description: res.Message,
        type: "HINT",
        survivalTime: 0
      })
      commit('HIDE_POPUPFORM')

    } else {
      commit('ADD_NOTIFICATION', {
        title: 'RESET FAIL',
        description: res.Message,
        type: "ERROR",
        survivalTime: 7
      })
    }
  },

  async updateInfo({commit}, {oldPassword, newPassword, phone, comment}) {
    if (oldPassword) {
      const res = await POST('member/update/', {
        old_password: oldPassword,
        new_password: newPassword,
        phone,
        comment,
      })

      if (res['Succeed']) {
        // update success
        const pwTooShort = -1 !== res.Message.indexOf('password is too short')
        const comTooLong = -1 !== res.Message.indexOf('comment is too long')

        commit('ADD_NOTIFICATION', {
          title: 'UPDATE SUCCESS',
          description: res.Message,
          type: (pwTooShort || comTooLong) ? "ERROR" : "HINT",
          survivalTime: 0
        })

        const reLogIn = -1 !== res.Message.indexOf('Please login again with new password')

        if (reLogIn) {
          commit('LOG_OUT')
          commit('SHOW_POPUPFORM', 'LogIn')
        }

      } else {
        commit('ADD_NOTIFICATION', {
          title: 'UPDATE FAIL',
          description: res.Message,
          type: "ERROR",
          survivalTime: 5
        })
      }
    }
  },



  async submitFlag({state, commit}, {flag, challenge}) {
    // logIn check
    // if (!state.isLogIn) {
    //   return Promise.reject()
    // }

    if (flag) {
      const res = await POST('flag/check/', {
        challenge_id: challenge.id,
        flag
      })

      if (res["Succeed"]) {
        // flag correct
        commit('SLOVE_CHALLENGE', challenge)
        return Promise.resolve()

      } else {
        commit('ADD_NOTIFICATION', {
          title: "SUBMIT FAIL",
          description: res.Message,
          type: "ERROR",
          survivalTime: 10
        })
        return Promise.reject()
      }
    } else {
      // no flag
      return Promise.reject()
    }
  },

}
