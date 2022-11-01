
import { UserDataType } from 'src/components/models'
import { MutationTree } from 'vuex'
import { ExampleStateInterface } from './state'

const mutation: MutationTree<ExampleStateInterface> = {
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  },
  SET_USER_DATA (state, userData: UserDataType) {
    console.log('mutation')
    state.user = userData
  }
}

export default mutation
