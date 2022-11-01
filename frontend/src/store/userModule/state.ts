import { UserDataType } from 'src/components/models'

export interface ExampleStateInterface {
  prop: boolean;
  user: UserDataType
}

function state (): ExampleStateInterface {
  return {
    prop: false,
    user: {
      id: '123',
      name: '',
      image: ''
    }
  }
}

export default state
