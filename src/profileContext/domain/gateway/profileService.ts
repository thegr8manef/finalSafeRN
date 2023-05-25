import{Observable} from "rxjs";
import { Profile } from "../entity/profile";

export interface ProfileService{
    loginMsal(): Observable<Profile>
}