import { Store } from "redux"

import { ReduxStoreWO } from "../../../reduxStore.wo"
import { loadProfileDetails } from "@contexts/profileContext/useCases/ProfileDetails/action"
import { loadUserInfoSelector, loadUserInfoErrorSelector, loadUserInfoSuccessSelector } from "@contexts/profileContext/useCases/ProfileDetails/selectors"
import { AppState } from "react-native"
import { User } from "@contexts/profileContext/domain/entity/user"


const deepFreeze = require('deep-freeze')

describe('Profile details flow', () => {
    let store: Store<AppState>
    let reduxStoreWO: ReduxStoreWO
    let accessTokenFake: string
    let user: User

    beforeEach(() => {
        reduxStoreWO = new ReduxStoreWO()
        store = reduxStoreWO.getStore()
        deepFreeze(store.getState())
        accessTokenFake = 'ABCEJJEJEJJEJE'
        user = new User('function', 'region', '31/07/2023')
    })

    it('should have an initial state', () => {
        expect(loadUserInfoSelector(store.getState())).toBeFalsy()
        expect(loadUserInfoErrorSelector(store.getState())).toBeUndefined()
        expect(loadUserInfoSuccessSelector(store.getState())).toBeUndefined()
    })

    it('should start loading on loading user info', done => {
        let eventCounter = 0
        store.subscribe(() => {
            if(++eventCounter === 1) {
                expect(loadUserInfoSelector(store.getState())).toBeTruthy()
                expect(loadUserInfoErrorSelector(store.getState())).toBeUndefined()
                expect(loadUserInfoSuccessSelector(store.getState())).toBeUndefined()
                done()
            }
        })
        store.dispatch(loadProfileDetails(accessTokenFake))
    })

    it('should return error when loading user info fails', done => {
        let eventCounter = 0
        store.subscribe(() => {
            if(++eventCounter === 2) {
                expect(loadUserInfoSelector(store.getState())).toBeFalsy()
                expect(loadUserInfoErrorSelector(store.getState())).toBe('ERROR')
                expect(loadUserInfoSuccessSelector(store.getState())).toBeUndefined()
                done()
            }
        })
        store.dispatch(loadProfileDetails(accessTokenFake))
        reduxStoreWO.loadProfileDetailsError('ERROR')
    })

    it('should return user when loading user info success', done => {
        let eventCounter = 0
        store.subscribe(() => {
            if(++eventCounter === 2) {
                expect(loadUserInfoSelector(store.getState())).toBeFalsy()
                expect(loadUserInfoErrorSelector(store.getState())).toBeUndefined()
                expect(loadUserInfoSuccessSelector(store.getState())).toBe(user)
                done()
            }
        })
        store.dispatch(loadProfileDetails(accessTokenFake))
        reduxStoreWO.loadProfileDetailsNext(user)
    })
})