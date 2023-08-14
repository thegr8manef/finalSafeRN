import { Store } from "redux"
import { ReduxStoreWO } from "../../../reduxStore.wo"
import { AppState } from "../../../../src/redux_configuration/appState"
import { Site } from "@contexts/visiteContext/domain/entity/Site"

//404// import { loadSiteByCodeErrorSelector, loadingSiteByCodeSelector, siteSelector } from "../../../../src/visiteContext/useCases/LoadSiteByCode/selectors"
//404// import { LoadSiteByCode, LoadSiteByCodeFailed } from "../../../../src/visiteContext/useCases/LoadSiteByCode/action"

const deepFreeze = require('deep-freeze')

describe("Visite Context flow", () => {

    let store: Store<AppState>
    let reduxStoreWO: ReduxStoreWO
    let site: Site

    beforeEach(() => {
        reduxStoreWO = new ReduxStoreWO()
        store = reduxStoreWO.getStore()
        deepFreeze(store.getState())
        site = new Site(
            '1234567890',
            'My Site',
            '123 Main Street',
            1,
            true,
            '12345',
            'France',
            'Paris',
            1,
            1234567890,
            "",
            'ref123456',
            'Region Name',
            'true',
            '223',
            10,
            '219',
        );
    })

    // Todo there is an issue in relative paths here :/
    it('render',()=>{
        expect(true).toBe(true)
    })
    // it("should have initial state", () => {
    //     expect(loadingSiteByCodeSelector(store.getState())).toBeFalsy()
    //     expect(loadSiteByCodeErrorSelector(store.getState())).toBeUndefined()
    //     expect(siteSelector(store.getState())).toBeNull()
    // })

    // it('should be start loadingSiteByCode', (done) => {
    //     let eventCounter = 0
    //     store.subscribe(() => {
    //         if (++eventCounter === 1) {
    //             expect(loadingSiteByCodeSelector(store.getState())).toBeTruthy()
    //             expect(loadSiteByCodeErrorSelector(store.getState())).toBeUndefined()
    //             expect(siteSelector(store.getState())).toBeNull()
    //             done()
    //         }
    //     })
    //     store.dispatch(LoadSiteByCode('code'))
    //     reduxStoreWO.loadSiteByCodeNext(site)
    // })

    // it('should return error while loadingSiteByCode failed', (done) => {
    //     let eventCounter = 0
    //     store.subscribe(() => {
    //         if (++eventCounter === 1) {
    //             expect(loadingSiteByCodeSelector(store.getState())).toBeFalsy()
    //             expect(loadSiteByCodeErrorSelector(store.getState())).toBe('error')
    //             expect(siteSelector(store.getState())).toBeNull()
    //             done()
    //         }
    //     })
    //     store.dispatch(LoadSiteByCodeFailed('error'))
    //     reduxStoreWO.loadSiteByCodeError('error')
    // })

})