
import { combineReducers } from "redux";
import { ProfileState } from "./state";
import { reducerSignup } from "../usecases/signup/reducer";

export const reducerProfile = combineReducers<ProfileState>({
  signup: reducerSignup
})
