import { User as UserSchema } from "@common/adapters/secondaries/db/entity/User";
import ApplicationContext from "@common/appConfig/ApplicationContext";
import { DBUserRepository } from "@contexts/profileContext/adapters/secondaires/DBUserRepository";
import { Profile } from "@contexts/profileContext/domain/entity/profile";
import { User } from "@contexts/profileContext/domain/entity/user";
import { firstValueFrom } from "rxjs";
import Realm from "../../../configuration/mocks/realm.mock";

jest.mock('Realm', () => require('../../../configuration/mocks/realm.mock'));
jest.mock("@common/appConfig/ApplicationContext");

describe('DBUserRepository Tests', () => {
    let userConnected: Profile
    let userRepository: DBUserRepository
    const realmInstance = new Realm({ schema: [UserSchema] });
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
    })

    it('should create and retrieve objects using MockRealm', () => {
        realmInstance.write(() => {
            const createdObject = realmInstance.create('User', userSchema);
            const retrievedObject = realmInstance.objectForPrimaryKey('User', createdObject.id);
            expect(retrievedObject).toEqual(createdObject);
        });
    });

    it('should set user connected using MockRealm', async () => {
        // Mock the ApplicationContext to return the mocked Realm instance
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        userRepository.setUserConnected(userConnected);
        const retrievedUser = realmInstance.objectForPrimaryKey('User', userConnected.primaryKey);

        expect(retrievedUser).not.toBeNull();
        expect(retrievedUser?.fn).toEqual('John');
        expect(retrievedUser?.ln).toEqual(' Doe');
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

    it('should return true when a User is connected', async () => {
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });

        realmInstance.write(() => {
            realmInstance.create('User', userSchema);
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

        // Create a user object and save it in the Realm instance
        realmInstance.write(() => {
            realmInstance.create('User', userSchema);
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

        realmInstance.write(() => {
            realmInstance.create('User', userSchema);
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

        const retrievedUser: User = realmInstance.objectForPrimaryKey('User', updatedUser.primaryKey);
        expect(retrievedUser?.region).toEqual(updatedUser.region);
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
});
