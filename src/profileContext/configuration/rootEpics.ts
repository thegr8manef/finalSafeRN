import { combineEpics } from "redux-observable";
import { signupEpic } from "../usecases/signup/epic";

export const profileRootEpics = combineEpics(
  signupEpic
)
