import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ExampleStateInterface } from './state'

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  someAction (/* context */) {
    //
  },
  fetchUserData  ({ commit }, userData) {
    console.log('action')
    commit('SET_USER_DATA', userData)
  },
  logout  ({ commit }) {
    console.log('action')
    const userData = {
      id: '',
      name: '',
      Image: ''
    }
    commit('SET_USER_DATA', userData)
  }

}

export default actions
