//load nedb
import DataStore from "nedb";
import { ChallengerUserInfo } from "./schema/challengerUser";

function createDataStore<T = {}>(schema: string, autoload = true) {
  const dataStore = new DataStore<T>({ filename: `store/${schema}`, autoload });

  return dataStore;
}

//make db
const krChallengerStore = createDataStore<ChallengerUserInfo>("krChallenger");

export { krChallengerStore };
