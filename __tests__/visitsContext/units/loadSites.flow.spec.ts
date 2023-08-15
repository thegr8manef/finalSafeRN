

import { ReduxStoreWO } from '../../reduxStore.wo';
import { Store } from 'redux';
import { AppState } from "@redux/appState";
import {
    loadingSitesSelector,
    loadSitesErrorSelector,
    sitesSelector
} from "@contexts/visiteContext/useCases/LoadSites/selectors";
import { Site } from "@contexts/visiteContext/domain/entity/Site";
import { LoadSites } from "@contexts/visiteContext/useCases/LoadSites/action";
const deepFreeze = require('deep-freeze');

describe('Load Sites flow', () => {
    let store: Store<AppState>;
    let reduxStoreWO: ReduxStoreWO;
    const mockedSites = [new Site('1', 'name', 'rue', 1, false, '1235', 'FR', 'Paris', -1, -1, 'ref', 'NR', 'r', '11', 'gg', 1, ''),
    new Site('12', 'name 11', 'rue', 1, false, '1235', 'FR', 'Paris', -1, -1, 'ref', 'NR', 'r', '11', 'gg', 1, '')]

    beforeEach(() => {
        reduxStoreWO = new ReduxStoreWO();
        store = reduxStoreWO.getStore();
        deepFreeze(store.getState());
    });

    it('should have a initial state ', () => {
        expect(loadingSitesSelector(store.getState())).toBeFalsy();
        expect(loadSitesErrorSelector(store.getState())).toBeUndefined();
        expect(sitesSelector(store.getState())).toBeNull()
    });

    it('should start loading sites', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 1) {
                expect(loadingSitesSelector(store.getState())).toBeTruthy();
                expect(loadSitesErrorSelector(store.getState())).toBeUndefined();
                expect(sitesSelector(store.getState())).toBeNull()
                done();
            }
        });
        store.dispatch(LoadSites());
    });


    it('should return error when loading sites failed ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(loadingSitesSelector(store.getState())).toBeFalsy();
                expect(loadSitesErrorSelector(store.getState())).toBe('ERROR');
                expect(sitesSelector(store.getState())).toBeNull()
                done();
            }
        });
        store.dispatch(LoadSites())
        reduxStoreWO.loadAllSitesError('ERROR')
    });


    it('should load sites successfuly ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(loadingSitesSelector(store.getState())).toBeFalsy();
                expect(loadSitesErrorSelector(store.getState())).toBeUndefined();
                expect(sitesSelector(store.getState())).toBe(mockedSites)
                done();
            }
        });
        store.dispatch(LoadSites());
        reduxStoreWO.loadAllSitesNext(mockedSites)
    });
});
