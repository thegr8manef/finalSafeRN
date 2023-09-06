import ApplicationContext from "@common/appConfig/ApplicationContext";
import { DbVisitsService } from "@contexts/visiteContext/adapters/secondaires/dbVisitsService";
import { VisitFlash } from "@contexts/visiteContext/domain/entity/VisitFlash";
import { realmInstance } from "../../../configuration/mocks/realm.mock";
import { firstValueFrom } from "rxjs";
import { Remarque } from "@common/adapters/secondaries/db/entity/Remarque";
import { User as UserSchema } from "@common/adapters/secondaries/db/entity/User";
import { Visit } from '@common/adapters/secondaries/db/entity/Visit';
import moment from "moment";
import { Photo } from "@contexts/visiteContext/domain/entity/Photo";
import { Profile } from "@contexts/profileContext/domain/entity/profile";
import { DBSynchronisationRepository } from "@contexts/synchronisationContext/adapters/secandaires/DBSynchronisationRepository";
import { Site } from "@contexts/visiteContext/domain/entity/Site";
import CustomRemarque from "@contexts/visiteContext/domain/entity/Remarque";
import MockDate from 'mockdate';

jest.mock("@common/appConfig/ApplicationContext");

describe('dbVisitsService Tests', () => {
    let userSchema: UserSchema
    let userConnected: Profile

    let synchronisationRepository: DBSynchronisationRepository

    let visitsService: DbVisitsService
    let flash: VisitFlash
    const expectedError = 'Mocked error';
    const createdRemarque: Remarque = {
        tk: "tk",
        idcs: 'chantierId',
        lvl: 1,
        nbPhoto: 1,
        nt: false,
        or: 42,
        levee: true,
        ordreGlobal: 1,
        fromObs: false,
        completed: false,
        unq: false,
        tg: 1,
        dt: "dt"
    };
    const images: Array<Photo> = [new Photo(
        "Test Photo",
        "/images/test.jpg",
        "12345",
        "67890",
        true,
        42,
        "abc123",
        true,
        false,
        2
    )]

    userConnected = new Profile(
        '123',
        'John Doe',
        'access_token',
        'test@test.com',
        'DR EIC TESTS',
        '-1',
    )
    userSchema = {
        id: '123',
        fn: userConnected.name.substring(
            0,
            userConnected.name.indexOf(' '),
        ),
        ln: userConnected.name.substring(userConnected.name.indexOf(' ')),
        em: userConnected.email,
        connected: true,
        lr: false,
        visitCreated: 0,
        lu: '-1',
        token: userConnected.accessToken,
    }

    const sites: Site[] = [new Site('1', 'name', 'rue', 1, false, '1235', 'FR', 'Paris', -1, 123, 'ref', 'NR', 'r', '11', 'gg', 1, 1, ''),
    new Site('12', 'name 11', 'rue', 1, false, '1235', 'FR', 'Paris', -1, 456, 'ref', 'NR', 'r', '11', 'gg', 1, 1, '')]

    beforeAll(() => {
        MockDate.set('2023-08-30T12:00:00.000Z');
    });

    beforeEach(() => {
        visitsService = new DbVisitsService()
        flash = new VisitFlash('0',"comment", images, 1, "site_id", 4);
        synchronisationRepository = new DBSynchronisationRepository();
    })

    afterAll(() => {
        MockDate.reset();
        realmInstance.write(() => {
            realmInstance.deleteAll();
        });
    })

    it('should SaveFlash', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });
        const newRemarque: Remarque = await firstValueFrom(visitsService.SaveFlash(flash))

        expect(newRemarque.ds).toEqual(flash.commentaire)
        expect(newRemarque.nbPhoto).toEqual(flash.images.length)
        expect(newRemarque.ti).toEqual(flash.commentaire)
    })

    it('should handle error in saveFlash', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(expectedError)))
        });
        try {
            await firstValueFrom(visitsService.SaveFlash(flash))
        } catch (error: any) {
            expect(error.message).toBe(expectedError);
        }
    })

    it('should SaveVisit', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        const currentDateTime = moment();
        const formattedCurrentDateTime = currentDateTime.format("YYYY/MM/DD HH:mm:ss");

        realmInstance.write(() => {
            realmInstance.create('User', userSchema);
        })

        await firstValueFrom(visitsService.SaveVisit(createdRemarque))

        const retrievedVisit: Visit = realmInstance.objects('Visit')[0]

        expect(retrievedVisit.dt).toEqual(formattedCurrentDateTime)
        expect(retrievedVisit.codeChantier).toEqual(createdRemarque.idcs)

        expect(retrievedVisit.userId).toEqual(userSchema.id)
    })

    it('should handle errors in SaveVisit', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(expectedError)))
        });
        try {
            await firstValueFrom(visitsService.SaveVisit(createdRemarque))
        } catch (error: any) {
            expect(error.message).toBe(expectedError);
        }
    })

    it('should loadVisitsDetails', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        const retrievedVisits = await firstValueFrom(visitsService.loadVisitsDetails())

        expect(retrievedVisits.length).toEqual(1)
        expect(retrievedVisits?.[0]?.rq[0]?.lvl).toEqual(createdRemarque.lvl)
        expect(retrievedVisits[0].cdc).toEqual(createdRemarque.idcs)
        expect(retrievedVisits[0].rq[0].dt).toEqual(createdRemarque.dt)
    })

    it('should handle error in loadVisitsDetails', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(expectedError)))
        });
        try {
            await firstValueFrom(visitsService.loadVisitsDetails())
        } catch (error: any) {
            expect(error.message).toBe(expectedError);
        }
    })

    it('should loadAllSites', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });
        await firstValueFrom(synchronisationRepository.saveData(sites))
        const retrievedSites: Site[] = await firstValueFrom(visitsService.LoadAllSites())

        expect(retrievedSites.length).toEqual(sites.length)
        expect(retrievedSites[0].id).toEqual(sites[0].id)
        expect(retrievedSites[1].id).toEqual(sites[1].id)
    })

    it('should handle error in loadAllSites', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(expectedError)))
        });
        try {
            await firstValueFrom(visitsService.LoadAllSites())
        } catch (error: any) {
            expect(error.message).toBe(expectedError);
        }
    })

    it('should loadRemarques', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        const retrievedRemarques: CustomRemarque[] = await firstValueFrom(visitsService.loadRemarques())

        expect(retrievedRemarques.length).toBeGreaterThan(0)
    })

    it('should handle error in loadRemarques', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(expectedError)))
        });
        try {
            await firstValueFrom(visitsService.loadRemarques())
        } catch (error: any) {
            expect(error.message).toBe(expectedError);
        }
    })

    it('should deleteVisits', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        const retrievedVisits: Visit[] = await firstValueFrom(visitsService.loadVisitsDetails())
        expect(retrievedVisits.length).toBeGreaterThan(0)

        await firstValueFrom(visitsService.deleteVisits())

        const retrievedVisitsAfterDeletion = realmInstance.objects('Visit')
        expect(retrievedVisitsAfterDeletion.length).toBe(0)
    })

    it('should handle error in deleteVisits', async() => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(expectedError)))
        });
        try {
            await firstValueFrom(visitsService.deleteVisits())
        } catch (error: any) {
            expect(error.message).toBe(expectedError);
        }
    })

    it('should load all sites', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });
        await firstValueFrom(synchronisationRepository.saveData(sites))
        const retrievedSites = await firstValueFrom(visitsService.LoadAllSites())

        expect(retrievedSites.length).toEqual(sites.length)
        expect(retrievedSites[0].id).toEqual(sites[0].id)
        expect(retrievedSites[1].id).toEqual(sites[1].id)
    })

    it('should handle error in loadAllSites', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(expectedError)))
        });
        try {
            await firstValueFrom(visitsService.LoadAllSites())
        } catch (error: any) {
            expect(error.message).toBe(expectedError);
        }
    })

    it('should loadRemarques', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        const retrievedRemarques: CustomRemarque[] = await firstValueFrom(visitsService.loadRemarques())

        expect(retrievedRemarques[0].level).toEqual(flash.type)
        expect(retrievedRemarques[0].description).toEqual(flash.commentaire)
    })

    it('should handle error in loadRemarques', async() => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(expectedError)))
        });
        try {
            await firstValueFrom(visitsService.loadRemarques())
        } catch (error: any) {
            expect(error.message).toBe(expectedError);
        }
    })
})
