

import { ReduxStoreWO } from '../../reduxStore.wo';
import { Store } from 'redux';
import { AppState } from "@redux/appState";
import { loadVisitsErrorSelector, loadingVisitsSelector, loadVisitsSelector } from '@contexts/visiteContext/useCases/LoadVisits/selector';
import { LoadVisits } from '../../../src/contexts/visiteContext/useCases/LoadVisits/action';
import { saveVisitErrorSelector, saveVisitLoadingSelector } from '@contexts/visiteContext/useCases/SaveVisit/selector';
import { SaveVisit } from '@contexts/visiteContext/useCases/SaveVisit/action';
import Remarque from '@contexts/visiteContext/domain/entity/Remarque';
import { Photo } from '@contexts/visiteContext/domain/entity/Photo';
const deepFreeze = require('deep-freeze');

describe('Save Visites flow', () => {
    let store: Store<AppState>;
    let reduxStoreWO: ReduxStoreWO;

    const mockPhoto = new Photo();
    mockPhoto.path = 'mocked-url'

    // Create an instance of the Remarque class
    const remarkInstance = new Remarque(
        "token_value",
        "2023-08-28",
        "This is a sample remark.",
        2,
        4,
        [mockPhoto]
    );

    beforeEach(() => {
        reduxStoreWO = new ReduxStoreWO();
        store = reduxStoreWO.getStore();
        deepFreeze(store.getState());
    });

    it('should have a initial state ', () => {
        expect(saveVisitLoadingSelector(store.getState())).toBeFalsy();
        expect(saveVisitErrorSelector(store.getState())).toBeUndefined();
    });

    it('should start loading save visits', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 1) {
                expect(saveVisitLoadingSelector(store.getState())).toBeTruthy();
                expect(saveVisitErrorSelector(store.getState())).toBeUndefined();
                done();
            }
        });
        store.dispatch(SaveVisit(remarkInstance));
    });


    it('should return error when save visits failed ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(saveVisitLoadingSelector(store.getState())).toBeFalsy();
                expect(saveVisitErrorSelector(store.getState())).toBe('ERROR');
                done();
            }
        });
        store.dispatch(SaveVisit(remarkInstance));
        reduxStoreWO.saveVisitError('ERROR')
    });


    it('should save visits successfully ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(saveVisitLoadingSelector(store.getState())).toBeFalsy();
                expect(saveVisitErrorSelector(store.getState())).toBeUndefined();
                done();
            }
        });
        store.dispatch(SaveVisit(remarkInstance));
        reduxStoreWO.saveVisitNext(remarkInstance)
    });
});
