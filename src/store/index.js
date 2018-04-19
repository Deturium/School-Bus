import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,

  strict: process.env.NODE_ENV !== 'production',
})

// HMR config
// https://vuex.vuejs.org/zh-cn/hot-reload.html
if (module.hot) {
  module.hot.accept(['./mutations', './action'], () => {
    const newMutations = require('./mutations').default
    const newAction = require('./action').default

    store.hotUpdate({
      mutations: newMutations,
      actions: newAction,
    })
  })
}

export default store
