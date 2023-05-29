import {AppState} from '../../../redux_configuration/appState';
import { User } from '../../domain/entity/user';

export const loadUserInfoSelector = (appState : AppState) : boolean =>
    appState.profile.loadProfileDetails.loading

    export const loadUserInfoErrorSelector = (appState : AppState) : string | undefined =>
    appState.profile .loadProfileDetails.error


    export const loadUserInfoSuccessSelector = (appState : AppState) : User | undefined =>
    appState.profile.loadProfileDetails.user