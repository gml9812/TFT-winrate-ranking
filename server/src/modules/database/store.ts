//load nedb
import DataStore from 'nedb'
import { UserInfo } from './schema/user'

function createDataStore<T = {}>(schema: string, autoload = true) {
  const dataStore = new DataStore<T>({ filename: `store/${schema}`, autoload })

  return dataStore
}

//make db
const userStore = createDataStore<UserInfo>('user')


export { userStore }
