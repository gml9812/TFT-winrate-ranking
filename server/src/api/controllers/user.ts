//signIn
import { ApiResponse } from "../../types";
import { ErrMsg } from "../../errors";
import { comparePassword, encryptPassword } from "../../modules/encryption";

//update
import {
  UserInfo,
  createUser,
  findUser,
  isUniqueUserId,
} from "../../modules/database/schema/user";

export const test = async (req, res) => {
  res.send(1234);
};

export const signOut = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
  });

  res.redirect("/api/page/");
};

export const createId = async (req, res) => {
  const { userId, password, email, name, phone, address } =
    req.body as UserInfo;

  const signUpResponse: ApiResponse = { err: null };

  if (!(await isUniqueUserId(userId))) {
    signUpResponse.err = {};
    signUpResponse.err.userId = ErrMsg.duplicatedUserId;
    return;
  }

  const [, newUser] = await createUser({
    userId,
    password: await encryptPassword(password),
    email,
    name,
    phone,
    address,
  });

  req.session.user = newUser;

  res.json(signUpResponse);
};
