import {Epic, ofType, StateObservable} from 'redux-observable';
import { AppState } from "../../../redux_configuration/appState";
import { ProfileService } from "../../domain/gateway/profileService";
import { User } from '../../domain/entity/user';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import { UserConnectedService } from '../../domain/gateway/userConnectedService';
import { Profile } from '../../domain/entity/profile';
import { GET_USER_INFO } from './actionTypes';
import { getUserInfo } from './actions';

export const CheckedUserCOnnected : Epic = (
    action$,
    store : StateObservable<AppState>,
    {userService}: {userService : UserConnectedService}
)=> 
action$.pipe(
    ofType(GET_USER_INFO),
    switchMap((action) =>
        userService.getUserInfo().pipe(
            map((profile : Profile) => {return getUserInfo(profile)} )
            
        )
    )
)