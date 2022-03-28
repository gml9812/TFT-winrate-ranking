import {
  makeCreateFunction,
  makeFindFunction,
  makeRemoveFunction,
  makeUpdateFunction,
} from "../crud";

import { krChallengerStore } from "../store";

export type ChallengerUserInfo = {
  summonerName: string;
  averagePlacement: number;
};

export const createUser = makeCreateFunction(krChallengerStore);
export const findUser = makeFindFunction(krChallengerStore);
export const updateUser = makeUpdateFunction(krChallengerStore);
export const deleteUser = makeRemoveFunction(krChallengerStore);
