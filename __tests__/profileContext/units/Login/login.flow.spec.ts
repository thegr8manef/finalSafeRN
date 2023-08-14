import { Profile } from '@contexts/profileContext/domain/entity/profile';
import { login } from '@contexts/profileContext/useCases/Login/action';
import { loginLoadingSelector, loginErrorSelector, profileSelector } from '@contexts/profileContext/useCases/Login/selectors';
import { setUserConnectedSelector } from '@contexts/profileContext/useCases/SetUserConnected/Selector';
import { setUserConnected } from '@contexts/profileContext/useCases/SetUserConnected/actions';
import { AppState } from 'react-native';
import {Store} from 'redux';
import { ReduxStoreWO } from "../../../reduxStore.wo"

const deepFreeze = require('deep-freeze');

describe('Login user flow', () => {
  let store: Store<AppState>;
  let reduxStoreWO: ReduxStoreWO;
  let profile: Profile;

  beforeEach(() => {
    reduxStoreWO = new ReduxStoreWO();
    store = reduxStoreWO.getStore();
    deepFreeze(store.getState());
    profile = new Profile(
      '123',
      'John Doe',
      'access_token',
      'test@test.com',
      'DR EIC TESTS',
      '-1',
    );
  });

  it('should have an initial state', () => {
    expect(loginLoadingSelector(store.getState())).toBeFalsy();
    expect(loginErrorSelector(store.getState())).toBeUndefined();
    expect(profileSelector(store.getState())).toBeUndefined();
  });

  it('should start loading on login', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 1) {
        expect(loginLoadingSelector(store.getState())).toBeTruthy();
        expect(loginErrorSelector(store.getState())).toBeUndefined();
        expect(profileSelector(store.getState())).toBeUndefined();
        done();
      }
    });
    store.dispatch(login());
  });

  it('should return error when login fails', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 2) {
        expect(loginLoadingSelector(store.getState())).toBeFalsy();
        expect(loginErrorSelector(store.getState())).toBe('ERROR');
        expect(profileSelector(store.getState())).toBeUndefined();
        done();
      }
    });
    store.dispatch(login());
    reduxStoreWO.loginMsalError('ERROR');
  });

  it('should return a profile on login success', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 3) {
        expect(loginLoadingSelector(store.getState())).toBeFalsy();
        expect(loginErrorSelector(store.getState())).toBeUndefined();
        expect(profileSelector(store.getState())).toEqual(profile);
        done();
      }
    });
    store.dispatch(login());
    reduxStoreWO.loginMsalNext(profile);
  });

  it('should set user connected to true', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 4) {
        expect(setUserConnectedSelector(store.getState())).toEqual(profile);
        done();
      }
    });
    store.dispatch(login());
    reduxStoreWO.loginMsalNext(profile);

    store.dispatch(setUserConnected(profile));
    reduxStoreWO.setUserConnectedNext(profile);
  });
});
