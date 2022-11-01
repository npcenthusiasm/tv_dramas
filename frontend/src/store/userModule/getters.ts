import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ExampleStateInterface } from './state'
// import { UserDataType } from 'src/components/models'
const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  },
  user (state) {
    return state.user
  }

}

export default getters
