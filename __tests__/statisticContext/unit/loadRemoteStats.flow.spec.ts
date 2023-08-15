
import { Stat } from '@contexts/statisticContext/domain/entity/Stat';
import { StatObservation } from '@contexts/statisticContext/domain/entity/statObservation';
import { StatRisk } from '@contexts/statisticContext/domain/entity/statRisk';
import { StatVisit } from '@contexts/statisticContext/domain/entity/statVisit';
import { loadRemoteStats } from '@contexts/statisticContext/useCases/LoadRemoteStats/action';
import { loadRemoteStatsLoadingSelector, remoteStatsSelector, loadRemoteStatsErrorSelector } from '@contexts/statisticContext/useCases/LoadRemoteStats/selectors';
import { AppState } from 'react-native';
import { ReduxStoreWO } from '../../reduxStore.wo';
import { Store } from 'redux';
import { saveStatsLoadingSelector } from '@contexts/statisticContext/useCases/saveStats/selectors';

const deepFreeze = require('deep-freeze');

describe('Load remote statistic flow', () => {
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
    expect(loadRemoteStatsLoadingSelector(store.getState())).toBeFalsy();
    expect(remoteStatsSelector(store.getState())).toBeUndefined();
  });

  it('should start loading remote statistic', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 1) {
        expect(loadRemoteStatsLoadingSelector(store.getState())).toBeTruthy();
        expect(loadRemoteStatsErrorSelector(store.getState())).toBeUndefined();
        done();
      }
    });
    store.dispatch(loadRemoteStats());
  });


  it('should return error when loading remote statistic failed ', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 2) {
        expect(loadRemoteStatsLoadingSelector(store.getState())).toBeFalsy();
        expect(loadRemoteStatsErrorSelector(store.getState())).toBe('ERROR');
        done();
      }
    });
    store.dispatch(loadRemoteStats())
    reduxStoreWO.loadStatisticError('ERROR')
  });


  it('should load remote statistic success ', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 3) {
        expect(loadRemoteStatsLoadingSelector(store.getState())).toBeFalsy();
        expect(loadRemoteStatsErrorSelector(store.getState())).toBeUndefined();
        expect(saveStatsLoadingSelector(store.getState())).toBeTruthy()
        done();
      }
    });

    store.dispatch(loadRemoteStats());
    reduxStoreWO.loadStatisticNext(stat)
  });
});
