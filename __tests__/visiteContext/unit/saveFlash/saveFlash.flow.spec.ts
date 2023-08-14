import { Store } from "redux"
import { ReduxStoreWO } from "../../../reduxStore.wo"
import { AppState } from "../../../../src/redux_configuration/appState"
import { saveFashErrorSelector, saveFlashLoadingSelector } from "@contexts/visiteContext/useCases/saveFlash/selectors"
import { Flash } from "@contexts/visiteContext/domain/entity/Flash"
import { Photo } from "@contexts/visiteContext/domain/entity/Photo"
import { SaveFlash, SaveFlashFailed, SaveFlashSuccess } from "@contexts/visiteContext/useCases/saveFlash/action"

const deepFreeze = require('deep-freeze')

describe("Save flash Context flow", () => {

    let store: Store<AppState>
    let reduxStoreWO: ReduxStoreWO
    let flash: Flash

    beforeEach(() => {
        reduxStoreWO = new ReduxStoreWO()
        store = reduxStoreWO.getStore()
        deepFreeze(store.getState())
        flash = new Flash(
            '1234567890',
            [new Photo(),new Photo()],
            1,
        );
    })

    it("should have initial state", () => {
        expect(saveFlashLoadingSelector(store.getState())).toBeFalsy()
        expect(saveFashErrorSelector(store.getState())).toBeUndefined()
    })

    it('should be start save flash visit', async () => {
      
        await store.dispatch(SaveFlash(flash))
        
        await expect(saveFlashLoadingSelector(store.getState())).toBeTruthy()
        await expect(saveFashErrorSelector(store.getState())).toBeUndefined()
   
    })

    it('should be save flash visit success', (done) => {
        let eventCounter = 0
        store.subscribe(() => {
            if (++eventCounter === 1) {
                expect(saveFlashLoadingSelector(store.getState())).toBeFalsy()
                expect(saveFashErrorSelector(store.getState())).toBeUndefined()
                done()
            }
        })
        store.dispatch(SaveFlashSuccess())
        reduxStoreWO.saveFlashNext(flash)
    })

    it('should return error while save flash visit failed', (done) => {
        let eventCounter = 0
        store.subscribe(() => {
            if (++eventCounter === 1) {
                expect(saveFlashLoadingSelector(store.getState())).toBeFalsy()
                expect(saveFashErrorSelector(store.getState())).toBe('ERROR')
                done()
            }
        })
        store.dispatch(SaveFlashFailed('ERROR'))
        reduxStoreWO.saveDataError('error')
        
    })

})