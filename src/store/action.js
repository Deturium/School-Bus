// utility func
async function zjusecFetch(url, init) {
  const baseUrl = "/api/v1"

  const requestURL = `${baseUrl}/${url}/`

  console.log("Fetch: " + requestURL)

  try {
    const response = await fetch(requestURL, init)
    const res = await response.json()

    if (res.Succeed) {
      return res["Message"]
    }

  } catch(e) {
    console.log(`Error: fetch ${url} fail`)
    return null
  }

  // const xhr = new XMLHttpRequest()
  // xhr.onload = function() {
  //
  // }
  // xhr.open('get', baseUrl + url, true)
  // xhr.send()
}

async function GET(url) {

  const init = {
    // mode: "no-cors",
    // headers: new Headers({
    //   'Accept': 'application/json'
    // }),
    credentials: 'include', // with cookie
  }

  return await zjusecFetch(url, init)
}

async function POST(url, params) {

  const init = {
    method: 'POST',
    body: Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&'),
    credentials: 'include',
  }

  return await zjusecFetch(url, init)
}


// addNotification payload
const networkErr = {
  title: 'Network Error',
  description: "Please check your network.",
  type: "",
  survivalTime: 10
}

const logInErr = {
  title: 'Log In Fail',
  description: 'Please check your username and password.',
  type: "",
  survivalTime: 5
}

const submitFlagErr = {
  title: 'Submit Fail',
  description: 'Please check and try again.',
  type: "",
  survivalTime: 7
}

const unLogInErr = {
  title: 'Un LogIn',
  description: 'Please Log In first.',
  type: "",
  survivalTime: 10
}

const updateInfoErr = {
  title: 'Update Fail',
  description: 'Please check and try again.',
  type: "",
  survivalTime: 7
}

const registerErr = {
  title: 'Register Fail',
  description: 'Please check and try again.',
  type: "",
  survivalTime: 7
}

export default {

  async fetchAnnouncement({state, commit}) {
    const announcements = await GET('announcement/all')
    if (!announcements) {
      commit('addNotification', networkErr)
      return
    }

    state.announcements = announcements
  },

  async fetchRank({state, commit}, type) {
    const ranks = await GET('ranks/' + type.toLowerCase())
    if (!ranks) {
      commit('addNotification', networkErr)
      return
    }

    state.ranks = ranks
  },

  async fetchChallenge({state, commit}) {
    const fetchChallenges = await GET('challenges')
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
      commit('addNotification', unLogInErr)
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
    commit('addNotification', submitFlagErr)
  },

  async logIn({commit}, {username, password, onError}) {
    // frontend check
    if (username && password) {

      // TODO: backend check
      username = 'admin'
      password = '123'

      const userInfo = await POST('login', {
        username,
        password,
      })

      if (1) {
        // log in success
        commit('logIn')
        commit('hidePopupForm')
        return
      }
    }

    // log in fail
    onError()
    commit('addNotification', logInErr)
  },

  async register({commit}, {stuNo}) {
    // frontend check
    if (stuNo) {

      // TODO: backend check
      const response = await POST('', {
        stuNo,
        password,
      })

      if (response) {
        commit('hidePopupForm')
        return
      }
    }

    commit('addNotification', registerErr)
  },

  async updateInfo({commit}, {oldPassworld, newPassword, phone, comment}) {
    // frontend check
    if (oldPassworld) {

      // TODO: backend check

      const response = await POST('login', {
        old_passworld: oldPassworld,
        new_password: newPassworld,
        phone,
        comment,
      })

      if (response) {
        // update success
        commit('hidePopupForm')
        return
      }
    }

    // update fail
    commit('addNotification', updateInfoErr)
  },
}
