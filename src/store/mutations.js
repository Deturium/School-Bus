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

  showNotification(state, {title, description}) {
    state.notification.isShow = true
    state.notification.title = title
    state.notification.description = description
  },

  hideNotification(state) {
    state.notification.isShow = false
  },

}
