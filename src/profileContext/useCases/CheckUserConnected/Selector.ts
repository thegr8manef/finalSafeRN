import { AppState } from "../../../redux_configuration/appState";

export const setUserInfoSelector = (appState : AppState) => 
        appState.profile.checkUserConnected.profile

export const getUserInfoSelector = (appState : AppState) =>
        appState.profile.checkUserConnected.profile
