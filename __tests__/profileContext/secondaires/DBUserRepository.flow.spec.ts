import { Accompagnant } from "@common/adapters/secondaries/db/entity/Accompagnant";
import { Chantier } from "@common/adapters/secondaries/db/entity/Chantier";
import { Photo } from "@common/adapters/secondaries/db/entity/Photo";
import { Remarque } from "@common/adapters/secondaries/db/entity/Remarque";
import { Statistic } from "@common/adapters/secondaries/db/entity/Statistic";
import { StatisticObservation } from "@common/adapters/secondaries/db/entity/StatisticObservation";
import { StatisticRisk } from "@common/adapters/secondaries/db/entity/StatisticRisk";
import { StatisticRiskObject } from "@common/adapters/secondaries/db/entity/StatisticRiskObject";
import { StatisticUser } from "@common/adapters/secondaries/db/entity/StatisticUser";
import { StatisticVisit } from "@common/adapters/secondaries/db/entity/StatisticVisit";
import { User as UserSchema } from "@common/adapters/secondaries/db/entity/User";
import { Zone } from "@common/adapters/secondaries/db/entity/Zone";
import ApplicationContext from "@common/appConfig/ApplicationContext";
import { DBUserRepository } from "@contexts/profileContext/adapters/secondaires/DBUserRepository";
import { Profile } from "@contexts/profileContext/domain/entity/profile";
import { User } from "@contexts/profileContext/domain/entity/user";
import Realm from "realm";
import { firstValueFrom } from "rxjs";

jest.mock("@common/appConfig/ApplicationContext");

describe('DBUserRepository Tests', () => {
    let userConnected: Profile
    let userRepository: DBUserRepository
    const realmInstance = new Realm({ schema: [UserSchema, Chantier, Zone, Remarque, Photo, Accompagnant, Statistic, StatisticRisk, StatisticVisit, StatisticObservation, StatisticUser, StatisticRiskObject] });
    let userSchema: UserSchema

    beforeEach(() => {
        userConnected = new Profile(
            '123',
            'John Doe',
            'access_token',
            'test@test.com',
            'DR EIC TESTS',
            '-1',
        )
        userRepository = new DBUserRepository();
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
    })

    afterAll(() => {
        realmInstance.write(() => {
            realmInstance.deleteAll();
        });
    })

    it('should return false when no User connected', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        const isConnected = await firstValueFrom(userRepository.checkUserConnected())
        expect(isConnected).toBe(false);
    });

    it('should set user connected using MockRealm', async () => {
        // Mock the ApplicationContext to return the mocked Realm instance
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        realmInstance.write(() => {
            realmInstance.create('User', userSchema);
        })

        userRepository.setUserConnected(userConnected);
        const retrievedUser: UserSchema = realmInstance.objectForPrimaryKey('User', userConnected.id);

        expect(retrievedUser).not.toBeNull();
        expect(retrievedUser?.fn).toEqual('John');
        expect(retrievedUser?.ln).toEqual(' Doe');
        expect(retrievedUser?.connected).toBe(true)
    });

    it('should handle error when setting user connected', async () => {
        const expectedError = 'Mocked error';

        // Mock ApplicationContext.getInstance() to return an error
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(expectedError)))
        });

        try {
            await firstValueFrom(userRepository.setUserConnected(userConnected))
        } catch (error: any) {
            expect(error.message).toBe(expectedError);
        }
    });


    it('should return true when a User is connected', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        const isConnected = await firstValueFrom(userRepository.checkUserConnected())
        expect(isConnected).toBe(true);
    });

    it('should handle errors in checkUserConnected', async () => {
        const errorMessage = 'Mocked error';
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(errorMessage)))
        });

        try {
            await firstValueFrom(userRepository.checkUserConnected())
        } catch (error: any) {
            expect(error.message).toBe(errorMessage);
        }
    });

    it('should load profile details using MockRealm', async () => {
        // Mock the ApplicationContext to return the mocked Realm instance
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        const loadedProfile = await firstValueFrom(userRepository.loadProfileDetails());
        expect(loadedProfile).toBeInstanceOf(Profile)
        expect(loadedProfile.name).toEqual(userConnected.name)
        expect(loadedProfile.accessToken).toEqual(userConnected.accessToken)
        expect(loadedProfile.email).toEqual(userConnected.email)
    });

    it('should handle errors in loadProfileDetails', async () => {
        const errorMessage = 'Mocked error';

        // Mock ApplicationContext.getInstance() to return an error
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(errorMessage)))
        });

        try {
            await firstValueFrom(userRepository.loadProfileDetails());
        } catch (error: any) {
            expect(error.message).toBe(errorMessage);
        }
    });

    it('should update local profile using MockRealm', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        const updatedUser = new User(
            userConnected.name.substring(
                0,
                userConnected.name.indexOf(' '),
            ),
            'region',
            '-1',
        );

        await firstValueFrom(userRepository.updateLocalProfile(updatedUser));

        const retrievedUser: UserSchema = realmInstance.objectForPrimaryKey('User', userConnected.id);
        expect(retrievedUser?.rg).toEqual(updatedUser.region);
    });

    it('should handle errors in updateLocalProfile', async () => {
        const errorMessage = 'Mocked error';

        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(errorMessage)))
        });
        const updatedUser: User = new User(
            userConnected.name.substring(
                0,
                userConnected.name.indexOf(' '),
            ),
            'region',
            '-1',
        );

        try {
            await firstValueFrom(userRepository.updateLocalProfile(updatedUser));
        } catch (error: any) {
            expect(error.message).toBe(errorMessage);
        }
    });

    it('should return false when no User connected', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        realmInstance.write(() => {
            realmInstance.deleteAll();
        });

        const isConnected = await firstValueFrom(userRepository.checkUserConnected())

        expect(isConnected).toBe(false);
    });
});
