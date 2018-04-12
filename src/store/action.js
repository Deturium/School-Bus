async function zjusecFetch(url) {
  const baseUrl = "/api/v1/"

  // console.log("fetch " + url)

  try {
    const res = await fetch(baseUrl + url)
      .then(res => res.json())

    if (res.Succeed) {
      return res["Message"]
    }

  } catch(e) {
    // console.log(`Error: fetch ${url} fail`)
    return null
  }

  // const xhr = new XMLHttpRequest()
  // xhr.onload = function() {
  //
  // }
  // xhr.open('get', baseUrl + url, true)
  // xhr.send()
}

const networkErr = {
  title: 'Network Error',
  description: "Please check your network.",
  type: "",
  survivalTime: 7
}


export default {

  async fetchAnnouncement({state, commit}) {
    const announcements = await zjusecFetch('announcement')
    if (!announcements) {
      commit('addNotification', networkErr)
      return
    }

    state.announcements = announcements
  },

  async fetchRank({state, commit}, type) {
    type = type === 'ALL' ? '' : '/' + type.toLowerCase()
    const ranks = await zjusecFetch('ranks' + type)
    if (!ranks) {
      commit('addNotification', networkErr)
      return
    }

    state.ranks = ranks
  },

  async fetchChallenge({state, commit}) {
    const fetchChallenges = await zjusecFetch('challenges')
    if (!fetchChallenges) {
      commit('addNotification', networkErr)
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

    state.challenges = stateChallenges
  },

  async submitFlag({state, commit}, {flag, challenge, onSuccess, onError}) {

    // logIn check
    if (!state.isLogIn) {
      commit('addNotification', {
        title: 'Un LogIn',
        description: 'Please Log In first.',
        type: "",
        survivalTime: 12
      })
      return
    }

    // frontend check
    if (flag) {

      // TODO: backend check
      if (1) {
        // flag correct
        onSuccess()
        commit('solveChallenge', challenge)
      }
      return
    }

    // flag error
    onError()
    commit('addNotification', {
      title: 'Submit Fail',
      description: 'Please check and try again.',
      type: "",
      survivalTime: 7
    })
  },

  async logIn({commit}, {username, password, onError}) {
    // frontend check
    if (username && password) {

      // TODO: backend check
      if (1) {
        // log in success
      commit('logIn')
      commit('hidePopupForm')
      return
      }
    }

    // log in fail
    onError()
    commit('addNotification', {
      title: 'Log In Fail',
      description: 'Please check your username and password.',
      type: "",
      survivalTime: 7
    })
  },
}
