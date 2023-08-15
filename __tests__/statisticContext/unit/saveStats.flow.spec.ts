
import { Stat } from '@contexts/statisticContext/domain/entity/Stat';
import { StatObservation } from '@contexts/statisticContext/domain/entity/statObservation';
import { StatRisk } from '@contexts/statisticContext/domain/entity/statRisk';
import { StatVisit } from '@contexts/statisticContext/domain/entity/statVisit';
import { saveStats, saveStatsFailed, saveStatsSuccess } from '@contexts/statisticContext/useCases/saveStats/actions';
import { saveStatsLoadingSelector, saveStatsErrorSelector } from '@contexts/statisticContext/useCases/saveStats/selectors';

import { ReduxStoreWO } from '../../reduxStore.wo';
import { Store } from 'redux';
import { AppState } from '@redux/appState';

const deepFreeze = require('deep-freeze');

describe('save statistic flow', () => {
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

  it('save stats should have a initial state ', () => {
    expect(saveStatsLoadingSelector(store.getState())).toBeFalsy();
    expect(saveStatsErrorSelector(store.getState())).toBeUndefined();
  });

  it('should start saving statistic', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 1) {
        expect(saveStatsLoadingSelector(store.getState())).toBeTruthy();
        expect(saveStatsErrorSelector(store.getState())).toBeUndefined();
        done();
      }
    });
    store.dispatch(saveStats(stat));
  });


  it('should return error when save stats ', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 2) {
        expect(saveStatsLoadingSelector(store.getState())).toBeFalsy();
        expect(saveStatsErrorSelector(store.getState())).toBe('ERROR');
        done();
      }
    });
    store.dispatch(saveStats(stat));
    reduxStoreWO.saveStatsError('ERROR')
  });


  it('should save stats statistic success ', done => {
    let eventCounter = 0;
    store.subscribe(() => {
      if (++eventCounter === 3) {
        expect(saveStatsLoadingSelector(store.getState())).toBeFalsy();
        expect(saveStatsErrorSelector(store.getState())).toBeUndefined();
        done();
      }
    });
    store.dispatch(saveStats(stat));
    reduxStoreWO.saveStatsNext()
  });
});
