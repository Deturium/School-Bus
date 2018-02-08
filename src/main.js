import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
	routes
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  render: h => h(App)
})
