import { Store } from "redux"
import { User } from "../../../../src/profileContext/domain/entity/user"
import { loadLocalProfile } from "../../../../src/profileContext/useCases/LoadLocalProfile/action"
import { loadLocalProfileErrorSelector, loadLocalProfileSelector, localProfileSelector } from "../../../../src/profileContext/useCases/LoadLocalProfile/selectors"
import { loadProfileDetails } from "../../../../src/profileContext/useCases/ProfileDetails/action"
import { AppState } from "../../../../src/redux_configuration/appState"
import { ReduxStoreWO } from "../../../reduxStore.wo"

const deepFreeze = require('deep-freeze')

describe('Load local profile flow', () => {
    let store: Store<AppState>
    let reduxStoreWO: ReduxStoreWO
    const accessTokenFake = 'ABCEJJEJEJJEJE'
    let user: User

    beforeEach(()=> {
        reduxStoreWO = new ReduxStoreWO()
        store = reduxStoreWO.getStore()
        deepFreeze(store.getState())
        user = new User('function', 'region', '31/07/2023')
    })

    it('should have an initial state', () => {
        expect(loadLocalProfileSelector(store.getState())).toBeFalsy()
        expect(loadLocalProfileErrorSelector(store.getState())).toBeUndefined()
        expect(localProfileSelector(store.getState())).toBeUndefined()
    })

    it('should start loading on loading local profile', done => {
        let eventCounter = 0
        store.subscribe(() => {
            if(++eventCounter === 1) {
                expect(loadLocalProfileSelector(store.getState())).toBeTruthy()
                expect(loadLocalProfileErrorSelector(store.getState())).toBeUndefined()
                expect(localProfileSelector(store.getState())).toBeUndefined()
                done()
            }
        })
        store.dispatch(loadLocalProfile())
    })

    it('should return error when loading local profile fails', done => {
        let eventCounter = 0
        store.subscribe(() => {
            if(++eventCounter === 4) {
                expect(loadLocalProfileSelector(store.getState())).toBeFalsy()
                expect(loadLocalProfileErrorSelector(store.getState())).toBe("ERROR")
                expect(localProfileSelector(store.getState())).toBeUndefined()
                done()
            }
        })
        store.dispatch(loadProfileDetails(accessTokenFake))
        reduxStoreWO.loadProfileDetailsError("ERROR")
        store.dispatch(loadLocalProfile())
        reduxStoreWO.loadLocalProfileError("ERROR")
    })
})