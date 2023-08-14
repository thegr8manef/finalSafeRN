import { Store } from "redux"

import { ReduxStoreWO } from "../../../reduxStore.wo"
import { updateLocalProfile } from "@contexts/profileContext/useCases/UpdateLocalProfile/actions"
import { updateLocalProfileLoadingSelector, updateLocalProfileErrorSelector } from "@contexts/profileContext/useCases/UpdateLocalProfile/selector"
import { AppState } from "react-native"
import { User } from "@contexts/profileContext/domain/entity/user"

const deepFreeze = require('deep-freeze')

describe("Update local profile flow", () => {
    let store: Store<AppState>
    let reduxStoreWO: ReduxStoreWO
    let user: User

    beforeEach(() => {
        reduxStoreWO = new ReduxStoreWO()
        store = reduxStoreWO.getStore()
        deepFreeze(store.getState())
        user = new User('function', 'region', '31/07/2023')
    })

    it('should have an initial state', () => {
        expect(updateLocalProfileLoadingSelector(store.getState())).toBeFalsy()
        expect(updateLocalProfileErrorSelector(store.getState())).toBeUndefined()
    })

    it('should start loading on start updating local profile', done => {
        let eventCounter = 0
        store.subscribe(() => {
            if(++eventCounter === 1) {
                expect(updateLocalProfileLoadingSelector(store.getState())).toBeTruthy()
                expect(updateLocalProfileErrorSelector(store.getState())).toBeUndefined()
                done()
            }
        })
        store.dispatch(updateLocalProfile(user))
    })

    it('should return error when updating local profile fails', done => {
        let eventCounter = 0
        store.subscribe(() => {
            if(++eventCounter === 2) {
                expect(updateLocalProfileLoadingSelector(store.getState())).toBeFalsy()
                expect(updateLocalProfileErrorSelector(store.getState())).toBe('ERROR')
                done()
            }
        })
        store.dispatch(updateLocalProfile(user))
        reduxStoreWO.updateLocalProfileError('ERROR')
    })

    it('should update local profile successfully', done => {
        let eventCounter = 0
        store.subscribe(() => {
            if(++eventCounter === 2) {
                expect(updateLocalProfileLoadingSelector(store.getState())).toBeFalsy()
                expect(updateLocalProfileErrorSelector(store.getState())).toBeUndefined()
                done()
            }
        })
        store.dispatch(updateLocalProfile(user))
        reduxStoreWO.updateLocalProfileNext(user)
    })
})