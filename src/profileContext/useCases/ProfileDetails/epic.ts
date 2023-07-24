import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {LOAD_PROFILE_DETAILS} from './actionType';
import {ProfileService} from '../../domain/gateway/profileService';
import {loadProfileDetailsFailed, loadProfileDetailsSuccess} from './action';
import {User} from '../../domain/entity/user';
import {concatMap, switchMap} from 'rxjs/operators';
import {updateLocalProfile} from '../UpdateLocalProfile/actions';
import {loadData} from '../../../common/synchronisationContext/useCases/LoadData/actions';

export const loadUserInfo: Epic = (
  action$,
  store: StateObservable<AppState>,
  {profileService}: {profileService: ProfileService},
) =>
  action$.pipe(
    ofType(LOAD_PROFILE_DETAILS),
    switchMap(action =>
      profileService.loadProfileDetails(action.payload).pipe(
        concatMap((userInfo: User) => {
          return [
            loadProfileDetailsSuccess(userInfo),
            updateLocalProfile(userInfo),
            loadData(action.payload),
          ];
        }),
      ),
    ),
  );
