import { Store } from "redux"
import { Profile } from "../../../../src/profileContext/domain/entity/profile"
import { login } from "../../../../src/profileContext/useCases/Login/action"
import { setUserConnected } from "../../../../src/profileContext/useCases/SetUserConnected/actions"
import { setUserConnectedErrorSelector, setUserConnectedSelector } from "../../../../src/profileContext/useCases/SetUserConnected/Selector"
import { AppState } from "../../../../src/redux_configuration/appState"
import { ReduxStoreWO } from "../../../reduxStore.wo"


const deepFreeze = require('deep-freeze')


describe('Set user connected flow', () => {
    let store: Store<AppState>
    let reduxStoreWO: ReduxStoreWO
    let profile: Profile

    beforeEach(() => {
        reduxStoreWO = new ReduxStoreWO()
        store = reduxStoreWO.getStore()
        deepFreeze(store.getState())
        profile = new Profile("123", 'John Doe', "access_token", "test@test.com")
    })

    it('should have an initial state', () => {
        expect(setUserConnectedSelector(store.getState())).toBeUndefined()
        expect(setUserConnectedErrorSelector(store.getState())).toBeFalsy()
    })

    it('should return error when setting user connected fails', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if(++eventCounter === 4) {
                expect(setUserConnectedSelector(store.getState())).toBeFalsy()
                expect(setUserConnectedErrorSelector(store.getState())).toBe('ERROR')
                done()
            }
        })
        store.dispatch(login()) 
        reduxStoreWO.loginMsalError('ERROR')
        store.dispatch(setUserConnected(profile))
        reduxStoreWO.setUserConnectedError('ERROR')
    })

    it('should set user connected when user successfully connects', (done) => {
        let eventCounter = 0;
        store.subscribe(() => {
            if(++eventCounter === 4) {
                expect(setUserConnectedSelector(store.getState())).toBe(profile)
                done()
            }
        })
        store.dispatch(login()) 
        reduxStoreWO.loginMsalNext(profile)
        store.dispatch(setUserConnected(profile))
        reduxStoreWO.setUserConnectedNext(profile)
    })
})