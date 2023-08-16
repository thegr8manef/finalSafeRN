import { ProfileMapper } from "@contexts/profileContext/adapters/secondaires/mapper/profile.mapper";
import { Profile } from "@contexts/profileContext/domain/entity/profile";
import { User } from "@contexts/profileContext/domain/entity/user";

describe('integration profile mapper', () => {
    describe('mapToProfile', () => {
        it('should map ProfileDto to Profile', () => {
            const profileDto = {
                tenantId: 'someTenantId',
                account: {
                    claims: {
                        name: 'John Doe',
                    },
                    username: 'johndoe',
                },
                accessToken: 'AccessToken',
                region: "",
                lastUpdate: "-1"
            };

            const result = ProfileMapper.mapToProfile(profileDto);

            expect(result).toBeInstanceOf(Profile);
            expect(result.id).toEqual('someTenantId');
            expect(result.name).toEqual('John Doe');
            expect(result.accessToken).toEqual('AccessToken');
        });
    });

    describe('mapToProfileDetails', () => {
        it('should map userDto to User', () => {
            const userDto = {
                rd: {
                    or: {
                        rg: 'someRgValue',
                    },
                },
            };

            const result = ProfileMapper.mapToProfileDetails(userDto);

            expect(result).toBeInstanceOf(User);
            expect(result.region).toEqual('someRgValue');
        });
    });
});


