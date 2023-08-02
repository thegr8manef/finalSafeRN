import { AppState } from '../../../src/redux_configuration/appState';
import { Stat } from '../../../src/statisticContext/domain/entity/Stat';
import { StatObservation } from '../../../src/statisticContext/domain/entity/statObservation';
import { StatRisk } from '../../../src/statisticContext/domain/entity/statRisk';
import { StatVisit } from '../../../src/statisticContext/domain/entity/statVisit';
import { loadLocalStats, loadLocalStatsFailed, loadLocalStatsSuccess } from '../../../src/statisticContext/useCases/LoadLocalStats/actions';
import { loadLocalStatErrorSelector, loadLocalStatLoadingSelector, localStatsSelector } from '../../../src/statisticContext/useCases/LoadLocalStats/selectors';
import { ReduxStoreWO } from '../../reduxStore.wo';
import { Store } from 'redux';

const deepFreeze = require('deep-freeze');

describe('Load local statistic flow', () => {
  let store: Store<AppState>;
  let reduxStoreWO: ReduxStoreWO;
  const statRisk = new StatRisk(
    { label: 'Low', value: 10 },
    { label: 'Medium', value: 20 },
    { label: 'High', value: 30 },
    { label: 'Very High', value: 40 },
  );

  const statVisit = new StatVisit(
    10,
    20,
    30,
    40,
    100,
  );

  const statObservation = new StatObservation(
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
  );
  const stat = new Stat(
    statRisk,
    statVisit,
    statObservation,
    1,
    1590402837,
  );


  beforeEach(() => {
    reduxStoreWO = new ReduxStoreWO();
    store = reduxStoreWO.getStore();
    deepFreeze(store.getState());
  });

  it('statistic reducer should have a initial state ', () => {
    expect(loadLocalStatLoadingSelector(store.getState())).toBeFalsy();
    expect(localStatsSelector(store.getState())).toBeUndefined();
  });

  it('should start loading local statistic', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 1) {
        expect(loadLocalStatLoadingSelector(store.getState())).toBeTruthy();
        expect(loadLocalStatErrorSelector(store.getState())).toBeUndefined();
        done();
      }
    });
    store.dispatch(loadLocalStats());
  });


  it('should return error when loading statistic failed ', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 1) {
        expect(loadLocalStatLoadingSelector(store.getState())).toBeFalsy();
        expect(loadLocalStatErrorSelector(store.getState())).toBe('ERROR');
        done();
      }
    });
    store.dispatch(loadLocalStatsFailed('ERROR'))
  });


  it('should load local statistic success ', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 2) {
        expect(loadLocalStatLoadingSelector(store.getState())).toBeFalsy();
        expect(loadLocalStatErrorSelector(store.getState())).toBeUndefined();
        done();
      }
    });
    store.dispatch(loadLocalStats());
    store.dispatch(loadLocalStatsSuccess(stat));
  });
});
