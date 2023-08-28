

import { ReduxStoreWO } from '../../reduxStore.wo';
import { Store } from 'redux';
import { AppState } from "@redux/appState";
import { Photo } from '@contexts/visiteContext/domain/entity/Photo';
import { saveFashErrorSelector, saveFlashLoadingSelector } from '@contexts/visiteContext/useCases/saveFlash/selectors';
import { SaveFlash, SaveFlashSuccess } from '@contexts/visiteContext/useCases/saveFlash/action';
import Remarque from '@contexts/visiteContext/domain/entity/Remarque';

const deepFreeze = require('deep-freeze');

describe('Save Flash flow', () => {
    let store: Store<AppState>;
    let reduxStoreWO: ReduxStoreWO;
    const mockPhoto = new Photo();
    mockPhoto.path = 'mocked-url'

    const remarqueInstance = new Remarque();

    beforeEach(() => {
        reduxStoreWO = new ReduxStoreWO();
        store = reduxStoreWO.getStore();
        deepFreeze(store.getState());
    });

    it('should create an instance of Flash and test properties', () => {

        // Test assertions
        expect(remarqueInstance.commentaire).toEqual('mock-comment');
        expect(remarqueInstance.images.length).toBe(1);
        expect(remarqueInstance.images[0]?.path).toEqual('mocked-url');
        expect(remarqueInstance.level).toBe(2);
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
        store.dispatch(SaveFlash(remarqueInstance));
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
        store.dispatch(SaveFlash(remarqueInstance));
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
        store.dispatch(SaveFlash(remarqueInstance));
        reduxStoreWO.saveFlashNext()
        });
});
