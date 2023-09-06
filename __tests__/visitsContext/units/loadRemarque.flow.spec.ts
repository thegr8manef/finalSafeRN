

import { ReduxStoreWO } from '../../reduxStore.wo';
import { Store } from 'redux';
import { AppState } from "@redux/appState";
import { loadRemarquesErrorSelector, loadRemarquesLoadingSelector, loadRemarquesSelector } from '@contexts/visiteContext/useCases/LoadRemarque/selectors';
import { loadRemarques } from '@contexts/visiteContext/useCases/LoadRemarque/actions';
import Remarque from '@contexts/visiteContext/domain/entity/Remarque';
const deepFreeze = require('deep-freeze');

describe('Load remarque flow', () => {
    let store: Store<AppState>;
    let reduxStoreWO: ReduxStoreWO;

     // Create an instance of the Remarque class
     const remarkInstance = new Remarque(
        "token_value",
        "2023-08-28",
        "This is a sample remark.",
        2,
        4,
        []
    );

    beforeEach(() => {
        reduxStoreWO = new ReduxStoreWO();
        store = reduxStoreWO.getStore();
        deepFreeze(store.getState());
    });

    it('should have a initial state ', () => {
        expect(loadRemarquesLoadingSelector(store.getState())).toBeFalsy();
        expect(loadRemarquesErrorSelector(store.getState())).toBeUndefined();
    });

    it('should start loading load remarques', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 1) {
                expect(loadRemarquesLoadingSelector(store.getState())).toBeTruthy();
                expect(loadRemarquesErrorSelector(store.getState())).toBeUndefined();
                done();
            }
        });
        store.dispatch(loadRemarques());
    });


    it('should return error when load remarque failed ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(loadRemarquesLoadingSelector(store.getState())).toBeFalsy();
                expect(loadRemarquesErrorSelector(store.getState())).toBe('ERROR');
                done();
            }
        });
        store.dispatch(loadRemarques());
        reduxStoreWO.loadRemarquesError('ERROR')
    });


    it('should load remarque successfully ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(loadRemarquesLoadingSelector(store.getState())).toBeFalsy();
                expect(loadRemarquesErrorSelector(store.getState())).toBeUndefined();
                expect(loadRemarquesSelector(store.getState())).toStrictEqual([remarkInstance]);
                done();
            }
        });
        store.dispatch(loadRemarques());
        reduxStoreWO.loadRemarquesNext([remarkInstance])
    });
});
