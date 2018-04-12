export default {
  logIn(state) {
    state.isLogIn = true
  },

  logOut(state) {
    state.isLogIn = false
  },

  showPopupForm(state, formName) {
    state.popForm = {
      isShow: true,
      formName
    }
  },

  hidePopupForm(state) {
    state.popForm.isShow = false
  },

  addNotification(state, payload) {
    state.notifications.push(payload)
  },

  solveChallenge(state, challenge) {
    challenge.is_solved = true
    challenge.early_pwner.push(state.userInfo.name)
    state.userInfo.score += challenge.points
  },
}
