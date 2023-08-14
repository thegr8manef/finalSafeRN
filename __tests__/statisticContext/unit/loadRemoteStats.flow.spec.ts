import { AppState } from '../../../src/redux_configuration/appState';
import { Stat } from '../../../src/statisticContext/domain/entity/Stat';
import { StatObservation } from '../../../src/statisticContext/domain/entity/statObservation';
import { StatRisk } from '../../../src/statisticContext/domain/entity/statRisk';
import { StatVisit } from '../../../src/statisticContext/domain/entity/statVisit';
import { loadRemoteStats, loadRemoteStatsFailed, loadRemoteStatsSuccess } from '../../../src/statisticContext/useCases/LoadRemoteStats/action';
import { loadRemoteStatsErrorSelector, loadRemoteStatsLoadingSelector, remoteStatsSelector } from '../../../src/statisticContext/useCases/LoadRemoteStats/selectors';
import { saveStats } from '../../../src/statisticContext/useCases/saveStats/actions';
import { ReduxStoreWO } from '../../reduxStore.wo';
import { Store } from 'redux';

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


  it('should return error when loading statistic failed ', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 1) {
        expect(loadRemoteStatsLoadingSelector(store.getState())).toBeFalsy();
        expect(loadRemoteStatsErrorSelector(store.getState())).toBe('ERROR');
        done();
      }
    });
    store.dispatch(loadRemoteStatsFailed('ERROR'))
  });


  it('should load remote statistic success ', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 3) {
        expect(loadRemoteStatsLoadingSelector(store.getState())).toBeFalsy();
        expect(loadRemoteStatsErrorSelector(store.getState())).toBeUndefined();
        done();
      }
    });

    store.dispatch(loadRemoteStats());
    store.dispatch(saveStats(stat));
    store.dispatch(loadRemoteStatsSuccess(stat));
  });
});
