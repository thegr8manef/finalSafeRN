

import { ReduxStoreWO } from '../../reduxStore.wo';
import { Store } from 'redux';
import { AppState } from "@redux/appState";
import { Photo } from '@contexts/visiteContext/domain/entity/Photo';
import { saveFashErrorSelector, saveFlashLoadingSelector } from '@contexts/visiteContext/useCases/saveFlash/selectors';
import { SaveFlash } from '@contexts/visiteContext/useCases/saveFlash/action';
import Remarque from '@contexts/visiteContext/domain/entity/Remarque';

const deepFreeze = require('deep-freeze');

describe('Save Flash flow', () => {
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

    it('should create an instance of Flash and test properties', () => {

        // Test assertions
        expect(remarkInstance.token).toEqual('token_value');
        expect(remarkInstance.note).toEqual(4);
        expect(remarkInstance.created_At).toEqual('2023-08-28');
        expect(remarkInstance.description).toEqual('This is a sample remark.');
        expect(remarkInstance.photos.length).toBe(1);
        expect(remarkInstance.photos[0]?.path).toEqual('mocked-url');
        expect(remarkInstance.level).toBe(2);
    });


    it('should have a initial state ', () => {
        expect(saveFlashLoadingSelector(store.getState())).toBeFalsy();
        expect(saveFashErrorSelector(store.getState())).toBeUndefined();
    });

    it('should start loading save flash', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 1) {
                expect(saveFlashLoadingSelector(store.getState())).toBeTruthy();
                expect(saveFashErrorSelector(store.getState())).toBeUndefined();
                done();
            }
        });
        store.dispatch(SaveFlash(remarkInstance));
    });


    it('should return error when loading save flash failed ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(saveFlashLoadingSelector(store.getState())).toBeFalsy();
                expect(saveFashErrorSelector(store.getState())).toBe('ERROR');
                done();
            }
        });
        store.dispatch(SaveFlash(remarkInstance));
        reduxStoreWO.saveFlashError('ERROR')
    });


    it('should save flash successfuly ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(saveFlashLoadingSelector(store.getState())).toBeFalsy();
                expect(saveFashErrorSelector(store.getState())).toBeUndefined();
                done();
            }
        });
        store.dispatch(SaveFlash(remarkInstance));
        reduxStoreWO.saveFlashNext()
        });
});
