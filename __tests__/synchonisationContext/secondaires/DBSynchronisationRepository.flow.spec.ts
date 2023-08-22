import ApplicationContext from "@common/appConfig/ApplicationContext";
import { firstValueFrom } from "rxjs";
import { Site } from "@contexts/visiteContext/domain/entity/Site";
import { DBSynchronisationRepository } from "@contexts/synchronisationContext/adapters/secandaires/DBSynchronisationRepository";
import { User } from "@common/adapters/secondaries/db/entity/User";
import { SynchronisationMapper } from "@contexts/synchronisationContext/adapters/secandaires/mapper/synchronisationMapper";
import Realm from "../../../configuration/mocks/realm.mock";
import { Chantier } from "@common/adapters/secondaries/db/entity/Chantier";
import { User as UserSchema } from "@common/adapters/secondaries/db/entity/User";
import { Profile } from "@contexts/profileContext/domain/entity/profile";

jest.mock("@common/appConfig/ApplicationContext");

describe("DBSynchronisationRepository Tests", () => {
    let synchronisationRepository: DBSynchronisationRepository
    let mockRealmInstance = new Realm({ schema: [User, Chantier] });
    let userSchema: UserSchema
    let userConnected: Profile

    const newChantier = mockRealmInstance.create('Chantier', {
        id: '123',
        no: 'Chantier 123',
        ad: '123 Main Street',
        type: 1,
        ac: true,
        cp: '12345',
        co: 'Company',
        py: 'Country',
        vl: 'City',
        sr: 5,
        cd: 'Category',
        st: 2,
        lu: 1630000000,
        remarques: [], // Array of Remarque instances
        ref: 'Reference123',
        org: 'Organization',
        ol_name: "Owner's Name",
        osc: 'OSC123',
        pid: 'ProjectID',
        piid: 'ProjectItemID',
    });
    const sites: Site[] = [new Site('1', 'name', 'rue', 1, false, '1235', 'FR', 'Paris', -1, 123, 'ref', 'NR', 'r', '11', 'gg', 1, '', ''),
    new Site('12', 'name 11', 'rue', 1, false, '1235', 'FR', 'Paris', -1, 456, 'ref', 'NR', 'r', '11', 'gg', 1, '', '')]

    beforeEach(() => {
        synchronisationRepository = new DBSynchronisationRepository();

        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(mockRealmInstance))
        });
        userConnected = new Profile(
            '123',
            'John Doe',
            'access_token',
            'test@test.com',
            'DR EIC TESTS',
            '-1',
        )
        userSchema = {
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
            primaryKey: 'id',
        }
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create and retrieve objects using MockRealm', () => {
        mockRealmInstance.write(() => {
            const createdObject = mockRealmInstance.create('Chantier', newChantier);
            const retrievedObject = mockRealmInstance.objectForPrimaryKey('Chantier', createdObject.id);
            expect(retrievedObject).toEqual(createdObject);
        });
    });

    it("should save site data correctly", async () => {
        const site1: Site = sites[0];
        const site2: Site = sites[1];
        mockRealmInstance.write(() => {
            mockRealmInstance.create('User', userSchema);
        });
        mockRealmInstance.write(() => {
            sites.forEach((site: Site) => {
                mockRealmInstance.create('Chantier', SynchronisationMapper.mapSiteToChantier(site));
            })
        });

        await firstValueFrom(synchronisationRepository.saveData(sites)) 
        const retrievedUser:User = mockRealmInstance.objectForPrimaryKey("User",userConnected.primaryKey)
        mockRealmInstance.write(() => {
            mockRealmInstance.create('User', retrievedUser);
        });
        expect(retrievedUser.lu).toEqual(site1.last_update.toString())
      });

      it('should handle errors in saveData', async() => {
        const errorMessage = "Mocked error";

        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(errorMessage)))
        });

        try {
            await firstValueFrom(synchronisationRepository.saveData(sites)) 
        } catch (error: any) {
            expect(error.message).toBe(errorMessage)
        }
      })
    });