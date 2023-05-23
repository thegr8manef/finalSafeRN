import{Observable} from "rxjs";
import { result } from "../entity/result";

export interface ProfileService{
    loginMsal(): Observable<result>
}