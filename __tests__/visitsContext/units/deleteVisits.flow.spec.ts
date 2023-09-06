

import { ReduxStoreWO } from '../../reduxStore.wo';
import { Store } from 'redux';
import { AppState } from "@redux/appState";
import { deleteVisit } from '@contexts/visiteContext/useCases/DeleteVisits/actions';
import { deleteVisitsLoadingSelector, deleteVisitsErrorSelector } from '@contexts/visiteContext/useCases/DeleteVisits/selectors';
const deepFreeze = require('deep-freeze');

describe('Delete visit flow', () => {
    let store: Store<AppState>;
    let reduxStoreWO: ReduxStoreWO;

    beforeEach(() => {
        reduxStoreWO = new ReduxStoreWO();
        store = reduxStoreWO.getStore();
        deepFreeze(store.getState());
    });

    it('should have a initial state ', () => {
        expect(deleteVisitsLoadingSelector(store.getState())).toBeFalsy();
        expect(deleteVisitsErrorSelector(store.getState())).toBeUndefined();
    });

    it('should start loading delete visits', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 1) {
                expect(deleteVisitsLoadingSelector(store.getState())).toBeTruthy();
                expect(deleteVisitsErrorSelector(store.getState())).toBeUndefined();
                done();
            }
        });
        store.dispatch(deleteVisit());
    });


    it('should return error when delete visit failed ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(deleteVisitsLoadingSelector(store.getState())).toBeFalsy();
                expect(deleteVisitsErrorSelector(store.getState())).toBe('ERROR');
                done();
            }
        });
        store.dispatch(deleteVisit());
        reduxStoreWO.deleteVisitsError('ERROR')
    });


    it('should delete visit successfully ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(deleteVisitsLoadingSelector(store.getState())).toBeFalsy();
                expect(deleteVisitsErrorSelector(store.getState())).toBeUndefined();
                done();
            }
        });
        store.dispatch(deleteVisit());
        reduxStoreWO.deleteVisitsNext()
    });
});
