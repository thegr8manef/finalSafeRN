import ApplicationContext from "@common/appConfig/ApplicationContext";
import { firstValueFrom } from "rxjs";
import { Site } from "@contexts/visiteContext/domain/entity/Site";
import { DBSynchronisationRepository } from "@contexts/synchronisationContext/adapters/secandaires/DBSynchronisationRepository";
import { User } from "@common/adapters/secondaries/db/entity/User";
import Realm from "realm";
import { Chantier } from "@common/adapters/secondaries/db/entity/Chantier";
import { User as UserSchema } from "@common/adapters/secondaries/db/entity/User";
import { Profile } from "@contexts/profileContext/domain/entity/profile";
import { Zone } from "@common/adapters/secondaries/db/entity/Zone";
import { Remarque } from "@common/adapters/secondaries/db/entity/Remarque";
import { Photo } from "@common/adapters/secondaries/db/entity/Photo";
import { Accompagnant } from "@common/adapters/secondaries/db/entity/Accompagnant";
import { Statistic } from "@common/adapters/secondaries/db/entity/Statistic";
import { StatisticRisk } from "@common/adapters/secondaries/db/entity/StatisticRisk";
import { StatisticVisit } from "@common/adapters/secondaries/db/entity/StatisticVisit";
import { StatisticObservation } from "@common/adapters/secondaries/db/entity/StatisticObservation";
import { StatisticUser } from "@common/adapters/secondaries/db/entity/StatisticUser";
import { StatisticRiskObject } from "@common/adapters/secondaries/db/entity/StatisticRiskObject";

jest.mock("@common/appConfig/ApplicationContext");

describe("DBSynchronisationRepository Tests", () => {
    let synchronisationRepository: DBSynchronisationRepository
    const realmInstance = new Realm({ schema: [UserSchema, Chantier, Zone, Remarque, Photo, Accompagnant, Statistic, StatisticRisk, StatisticVisit, StatisticObservation, StatisticUser, StatisticRiskObject] });
    let userSchema: UserSchema
    let userConnected: Profile

    const sites: Site[] = [new Site('1', 'name', 'rue', 1, false, '1235', 'FR', 'Paris', -1, 123, 'ref', 'NR', 'r', '11', 'gg', 1, 1, ''),
    new Site('12', 'name 11', 'rue', 1, false, '1235', 'FR', 'Paris', -1, 456, 'ref', 'NR', 'r', '11', 'gg', 1, 1, '')]

    beforeEach(() => {
        synchronisationRepository = new DBSynchronisationRepository();

        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
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
            id: "123",
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
    });

    afterAll(() => {
        realmInstance.write(() => {
            realmInstance.deleteAll();
        });
    })

    it("should save site data correctly and update the 'lastUpdate (lu)' of the user", async () => {
        realmInstance.write(() => {
            realmInstance.create('User', userSchema);
        });

        await firstValueFrom(synchronisationRepository.saveData(sites))

        const chantierCollection = realmInstance.objects('Chantier');
        expect(chantierCollection.length).toEqual(sites.length);

        const retrievedUser: User = realmInstance.objectForPrimaryKey("User", userConnected.id)
        expect(retrievedUser.lu).toEqual(sites[0].last_update.toString())
    });

    it('should handle errors in saveData', async () => {
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







