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
    state.announcements = await zjusecFetch('announcement')
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
    commit('showNotification', {
      title: 'submit fail',
      description: '革命尚未成功，同志仍需努力'
    })
    setTimeout(() => commit('hideNotification'), 1000 * 7)

    // correct
    challenge.is_solved = true
    challenge.early_pwner.push(state.userInfo.name)
    state.userInfo.score += challenge.points
  }
}
