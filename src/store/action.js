
import { GET, POST } from './fetch'
import * as np from './notification-payloads'

export default {

  async fetchChallenge({commit}) {
    const fetchChallenges = await GET('challenges/')
    if (!fetchChallenges) {
      commit('ADD_NOTIFICATION', np.networkErr)
      return
    }

    const stateChallenges = fetchChallenges.map((cate) => {
      // flatMap
      const challengeArr = []
      for (let t of cate.types) {
        for (let c of t.challenges) {
          // attach type info to each challenge
          c.type = t.type
          challengeArr.push(c)
        }
      }
      return {
        category: cate.category,
        challenges: challengeArr
      }
    })
    commit('UPDATE_CHALLENGES', stateChallenges)
  },

  async fetchRank({commit}, type) {
    const ranks = await GET('ranks/' + type.toLowerCase() + '/')
    if (!ranks) {
      commit('ADD_NOTIFICATION', np.networkErr)
      return
    }

    commit('UPDATE_RANKS', ranks)
  },

  async fetchAnnouncement({commit}) {
    const announcements = await GET('announcement/all')
    if (!announcements) {
      commit('ADD_NOTIFICATION', np.networkErr)
      return
    }

    commit('UPDATE_ANNOUNCEMENTS', announcements)
  },



  async logIn({commit}, {username, password}) {
    // frontend check
    if (username && password) {
      const response = await POST('login/', {
        username,
        password,
      })

      commit('UPDATE_USERINFO', {
        name: "Clapeysron",
        rank: 5,
        point: 8250,
      })

      if (1) {
        // log in success
        commit('LOG_IN')
        commit('HIDE_POPUPFORM')
        return
      }
    }

    // log in fail
    commit('ADD_NOTIFICATION', np.logInErr)
    return Promise.reject()
  },

  async register({commit}, {stuNo}) {
    // frontend check
    if (stuNo) {
      // TODO: backend check
      const response = await POST('', {
        stuNo,
      })

      if (response) {
        commit('HIDE_POPUPFORM')
      }
    }
  },

  async updateInfo({commit}, {oldPassworld, newPassword, phone, comment}) {
    // frontend check
    if (oldPassworld) {
      // TODO: backend check
      const response = await POST('', {
        old_passworld: oldPassworld,
        new_password: newPassworld,
        phone,
        comment,
      })

      if (response) {
        // update success
        commit('HIDE_POPUPFORM')
        return
      }
    }

    // update fail
    commit('ADD_NOTIFICATION', np.updateInfoErr)
  },



  async submitFlag({state, commit}, {flag, challenge}) {
    // logIn check
    if (!state.isLogIn) {
      commit('ADD_NOTIFICATION', np.unLogInErr)
      return Promise.reject()
    }
    // frontend check
    if (flag) {
      // TODO: backend check
      if (1) {
        // flag correct
        commit('SLOVE_CHALLENGE', challenge)
        return Promise.resolve()
      }
    }

    commit('ADD_NOTIFICATION', np.submitFlagErr)
    return Promise.reject()
  },

}
