async function zjusecFetch(url) {
  const baseUrl = "api/v1/"

  console.log("fetch " + url)

  const res = await fetch(baseUrl + url)
    .then((res) => {
      console.log(res.json)
      return res.json()
    })


  if (res.Succeed) {
    return res["Message"]
  }
  // const xhr = new XMLHttpRequest()
  // xhr.onload = function() {

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
    state.challenges = await zjusecFetch('Challenges')
  },
}
