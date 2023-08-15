import {Store} from 'redux';

import {ReduxStoreWO} from '../../reduxStore.wo';
import {AppState} from '../../../src/redux_configuration/appState';
import {
  loadDataErrorSelector,
  loadingDataSelector,
} from '@contexts/synchronisationContext/useCases/LoadData/selectors';
import {loadData} from '@contexts/synchronisationContext/useCases/LoadData/actions';
import {Site} from '@contexts/visiteContext/domain/entity/Site';

const deepFreeze = require('deep-freeze');

describe('synchonisation data flow', () => {
  let store: Store<AppState>;
  let reduxStoreWO: ReduxStoreWO;
  const accessTokenFake = 'ABCEJJEJEJJEJE';
  beforeEach(() => {
    reduxStoreWO = new ReduxStoreWO();
    store = reduxStoreWO.getStore();
    deepFreeze(store.getState());
  });

  it('should have a initial state ', () => {
    expect(loadingDataSelector(store.getState())).toBeFalsy();
    expect(loadDataErrorSelector(store.getState())).toBeUndefined();
  });

  it('should start loading data', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 1) {
        expect(loadingDataSelector(store.getState())).toBeTruthy();
        expect(loadDataErrorSelector(store.getState())).toBeUndefined();
        done();
      }
    });
    store.dispatch(loadData(accessTokenFake));
  });

  it('should return error when loading lastUpdateDate  failed ', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 2) {
        expect(loadingDataSelector(store.getState())).toBeFalsy();
        expect(loadDataErrorSelector(store.getState())).toBe('ERROR');
        done();
      }
    });
    store.dispatch(loadData(accessTokenFake));
    reduxStoreWO.loadLastUpdateDateError('ERROR');
  });

  it('should return error when loading Data failed ', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 2) {
        expect(loadingDataSelector(store.getState())).toBeFalsy();
        expect(loadDataErrorSelector(store.getState())).toBe('ERROR');
        done();
      }
    });
    store.dispatch(loadData(accessTokenFake));
    reduxStoreWO.loadLastUpdateDateNext('-1');
    reduxStoreWO.loadDataError('ERROR');
  });

  it('should return error when saving data  failed ', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 2) {
        expect(loadingDataSelector(store.getState())).toBeFalsy();
        expect(loadDataErrorSelector(store.getState())).toBe('ERROR');
        done();
      }
    });
    store.dispatch(loadData(accessTokenFake));
    reduxStoreWO.loadLastUpdateDateNext('-1');
    reduxStoreWO.loadDataNext([
      new Site(
        '1',
        'name',
        '',
        1,
        true,
        '',
        '',
        '',
        1,
        -1,
        'ref',
        'RDK',
        '',
        '1',
        'dd', 11, ''
      ),
      new Site(
        '2',
        'name 2',
        '',
        1,
        true,
        '',
        '',
        '',
        1,
        -1,
        'ref',
        'RDK',
        '',
        '2',
        'dd', 1, ''
      ),
    ]);
    reduxStoreWO.saveDataError('ERROR');
  });

  it('should success load data && save it in db ', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 2) {
        expect(loadingDataSelector(store.getState())).toBeFalsy();
        expect(loadDataErrorSelector(store.getState())).toBeUndefined();
        done();
      }
    });
    store.dispatch(loadData(accessTokenFake));
    reduxStoreWO.loadLastUpdateDateNext('-1');
    reduxStoreWO.loadDataNext([
      new Site(
        '1',
        'name',
        '',
        1,
        true,
        '',
        '',
        '',
        1,
        -1,
        'ref',
        'RDK',
        '',
        '1',
        'dd',1, ''
      ),
      new Site(
        '2',
        'name 2',
        '',
        1,
        true,
        '',
        '',
        '',
        1,
        -1,
        'ref',
        'RDK',
        '',
        '2',
        'dd', 11, ''
      ),
    ]);
    reduxStoreWO.saveDataNext();
  });
});
