async function zjusecFetch(url) {
  const baseUrl = "api/v1/"

  // console.log("fetch " + url)

  const res = await fetch(baseUrl + url)
    .then((res) => {
      return res.json()
    })


  if (res.Succeed) {
    return res["Message"]
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

  async fetchRank({ state }) {
    state.ranks = await zjusecFetch('ranks')
  },

  async fetchChallenge({ state }) {
    const fetchChallenges = await zjusecFetch('Challenges')
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
}
