export default {
  LogIn(state) {
    state.isLogIn = true
  },

  LogOut(state) {
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

  changeFliterType(state, type) {
    state.filterType = type.toUpperCase()
  },


}
