

import { ReduxStoreWO } from '../../reduxStore.wo';
import { Store } from 'redux';
import { AppState } from "@redux/appState";
import {
    loadingSitesSelector,
    loadSitesErrorSelector,
    sitesSelector
} from "@contexts/visiteContext/useCases/LoadSites/selectors";
import { Site } from "@contexts/visiteContext/domain/entity/Site";
import { LoadSites } from "@contexts/visiteContext/useCases/LoadSites/action";
import { FlashPhotoDto } from '@contexts/visiteContext/adapters/secondaires/dto/flash.photo.dto';

const deepFreeze = require('deep-freeze');

describe('Load Sites flow', () => {
    const flashPhotos: FlashPhotoDto[] = [{
        id: "1",
        Name: "NameFlashPhoto",
        path: "/path", // empty
        idRemarque: "99", // id remarque
        idVisite: "-1",
        levee: true,
        or: 0,
        formationId: "string",
        wasDrafts: true,
        deleted: true,
        synchEtat: 1,
    }];

    // todo add this instance to the new Site array in mockedSites after fixing type
    // const visitRemarqueInstance = new VisitRemarque(
    //     "2023-08-21",
    //     "Description",
    //     "Token",
    //     2,
    //     true,
    //     flashPhotos
    // );

    let store: Store<AppState>;
    let reduxStoreWO: ReduxStoreWO;
    const mockedSites = [new Site(
        "site_id",
        "Site Name",
        "Site Address",
        1,
        true,
        "12345",
        "Country",
        "City",
        123,
        Date.now(),
        [],
        "Reference",
        "Region Name",
        "OSC Value",
        "pid_value",
        "piid_value",
        456,
        "Organization"
    ),
    new Site(
        "site_id",
        "Site Name",
        "Site Address",
        1,
        true,
        "12345",
        "Country",
        "City",
        123,
        Date.now(),
        [], // An array of Remarque instances
        "Reference",
        "Region Name",
        "OSC Value",
        "pid_value",
        "piid_value",
        456,
        "Organization"
    )]

    beforeEach(() => {
        reduxStoreWO = new ReduxStoreWO();
        store = reduxStoreWO.getStore();
        deepFreeze(store.getState());
    });

    it('should have a initial state ', () => {
        expect(loadingSitesSelector(store.getState())).toBeFalsy();
        expect(loadSitesErrorSelector(store.getState())).toBeUndefined();
        expect(sitesSelector(store.getState())).toBeNull()
    });

    it('should start loading sites', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 1) {
                expect(loadingSitesSelector(store.getState())).toBeTruthy();
                expect(loadSitesErrorSelector(store.getState())).toBeUndefined();
                expect(sitesSelector(store.getState())).toBeNull()
                done();
            }
        });
        store.dispatch(LoadSites());
    });


    it('should return error when loading sites failed ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(loadingSitesSelector(store.getState())).toBeFalsy();
                expect(loadSitesErrorSelector(store.getState())).toBe('ERROR');
                expect(sitesSelector(store.getState())).toBeNull()
                done();
            }
        });
        store.dispatch(LoadSites())
        reduxStoreWO.loadAllSitesError('ERROR')
    });


    it('should load sites successfuly ', done => {
        let eventCounter = 0;
        store.subscribe(() => {
            if (++eventCounter === 2) {
                expect(loadingSitesSelector(store.getState())).toBeFalsy();
                expect(loadSitesErrorSelector(store.getState())).toBeUndefined();
                expect(sitesSelector(store.getState())).toBe(mockedSites)
                done();
            }
        });
        store.dispatch(LoadSites());
        reduxStoreWO.loadAllSitesNext(mockedSites)
    });
});
