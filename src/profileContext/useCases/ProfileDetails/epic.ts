import {Epic, ofType, StateObservable} from 'redux-observable';
import { AppState } from "../../../redux_configuration/appState";
import { LOAD_PROFILE_DETAILS } from "./actionType";
import { ProfileService } from "../../domain/gateway/profileService";
import { loadProfileDetailsFailed, loadProfileDetailsSuccess } from './action';
import { User } from '../../domain/entity/user';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

export const loadUserInfo : Epic = (
    action$,
    store : StateObservable<AppState>,
    {profileService}: {profileService : ProfileService}
)=> 
action$.pipe(
    ofType(LOAD_PROFILE_DETAILS),
    switchMap((action) =>
        profileService.loadProfileDetails(action.payload).pipe(
            map((userInfo : User) => loadProfileDetailsSuccess(userInfo)),
            catchError(error=> of(loadProfileDetailsFailed(error))),
        )
    )
)