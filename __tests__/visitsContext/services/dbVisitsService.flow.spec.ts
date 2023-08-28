import { VisitFlash } from "@contexts/visiteContext/domain/entity/VisitFlash";
import { realmInstance } from './../../../configuration/mocks/realm.mock';

jest.mock('Realm', () => require('../../../configuration/mocks/realm.mock'));
jest.mock("@common/appConfig/ApplicationContext");

describe('DbVisitsService Tests', () => {
    let visitFlash: VisitFlash
    let remarqueData: any //

    beforeEach(() => {

        visitFlash = new VisitFlash("comment", [], -1, '', 1)
        remarqueData = {
            nbPhoto: visitFlash.images.length,
            ds: visitFlash.commentaire,
            photos: [],
            ti: visitFlash.commentaire,
            lvl: Number(visitFlash.level),
            nt: false,
            or: 0,
            levee: false,
            ordreGlobal: 0,
            fromObs: false,
            completed: false,
            unq: false,
            tg: 1,
        }
    })


    it('should create and retrieve objects using MockRealm', () => {
        realmInstance.write(() => {
            const createdObject = realmInstance.create('Remarque', remarqueData);
            const retrievedObject = realmInstance.objectForPrimaryKey('Remarque', createdObject.id);
            expect(retrievedObject).toEqual(createdObject);
        });
    });


})