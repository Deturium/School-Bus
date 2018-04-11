async function zjusecFetch(url) {
  const baseUrl = "/api/v1/"

  console.log("fetch " + url)

  try {
    const res = await fetch(baseUrl + url)
      .then((res) => {
        return res.json()
      })

    if (res.Succeed) {
      return res["Message"]
    }

  } catch(e) {
    console.log('Error: fetch fail')
  }

  // const xhr = new XMLHttpRequest()
  // xhr.onload = function() {
  //
  // }
  // xhr.open('get', baseUrl + url, true)
  // xhr.send()
}


export default {
  async fetchAnnouncement({ state }) {
    const announcements = await zjusecFetch('announcement')
    if (announcements)
      state.announcements = announcements
  },

  async fetchRank({ state }, type) {
    type = type === 'ALL' ? '' : '/' + type.toLowerCase()
    state.ranks = await zjusecFetch('ranks' + type)
  },

  async fetchChallenge({ state }) {
    const fetchChallenges = await zjusecFetch('challenges')
    const stateChallenges = []

    for (let cate of fetchChallenges) {
      const challengeArr = []
      for (let t of cate.types) {
        for (let c of t.challenges) {
          c.type = t.type
          challengeArr.push(c)
        }
      }
      stateChallenges.push({
        category: cate.category,
        challenges: challengeArr
      })
    }

    state.challenges = stateChallenges
  },

  async submitFlag({state, commit}, {flag, challenge}) {
    // TODO:

    // flag error
    commit('addNotification', {
      title: 'submit fail',
      description: 'Check and try again!',
      type: "",
      survivalTime: 0
    })

    // correct
    challenge.is_solved = true
    challenge.early_pwner.push(state.userInfo.name)
    state.userInfo.score += challenge.points
  },

  async logIn({commit}, {username, password}) {
    // if (!(username && password))
    //   return

    // TODO:
    if (password !== '') {
      commit('logIn')
      commit('hidePopupForm')
      return
    }

    commit('addNotification', {
      title: 'Log In Fail',
      description: 'Check your username and password, try again!',
      type: "",
      survivalTime: 10
    })
  },
}
