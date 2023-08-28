

import { ReduxStoreWO } from '../../reduxStore.wo';
import { Store } from 'redux';
import { AppState } from "@redux/appState";
import { loadVisitsErrorSelector, loadingVisitsSelector,loadVisitsSelector } from '@contexts/visiteContext/useCases/LoadVisits/selector';
import { LoadVisits } from '../../../src/contexts/visiteContext/useCases/LoadVisits/action';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
const deepFreeze = require('deep-freeze');

describe('Load Visites flow', () => {
    let store: Store<AppState>;
    let reduxStoreWO: ReduxStoreWO;

    const mockedVisits: Visit[] = [{
        tp: undefined,
        dt: undefined,
        tk: undefined,
        rq: undefined,
        cdc: undefined
    }]

    beforeEach(() => {
        reduxStoreWO = new ReduxStoreWO();
        store = reduxStoreWO.getStore();
        deepFreeze(store.getState());
    });

    it('should have a initial state ', () => {
        expect(loadingVisitsSelector(store.getState())).toBeFalsy();
        expect(loadVisitsErrorSelector(store.getState())).toBeUndefined();
        expect(loadVisitsSelector(store.getState())).toBeUndefined()
    });

    it('should start loading visits', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 1) {
                expect(loadingVisitsSelector(store.getState())).toBeTruthy();
                expect(loadVisitsErrorSelector(store.getState())).toBeUndefined();
                expect(loadVisitsSelector(store.getState())).toBeUndefined()
                done();
            }
        });
        store.dispatch(LoadVisits());
    });


    it('should return error when loading visits failed ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(loadingVisitsSelector(store.getState())).toBeFalsy();
                expect(loadVisitsErrorSelector(store.getState())).toBe('ERROR');
                expect(loadVisitsSelector(store.getState())).toBeUndefined()
                done();
            }
        });
        store.dispatch(LoadVisits())
        reduxStoreWO.loadVisitsError('ERROR')
    });


    it('should load visits successfuly ', done => {
        let eventCounter = 0;
        store.subscribe(() => {            
            if (++eventCounter === 2) {
                expect(loadingVisitsSelector(store.getState())).toBeFalsy();
                expect(loadVisitsErrorSelector(store.getState())).toBeUndefined();
                expect(loadVisitsSelector(store.getState())).toBe(mockedVisits)
                done();
            }
        });
        store.dispatch(LoadVisits());
        reduxStoreWO.loadVisitsNext(mockedVisits)
    });
});
