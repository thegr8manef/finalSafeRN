import { LocalProfilMapper } from "@contexts/profileContext/adapters/secondaires/mapper/localProfile.mapper";
import { Profile } from "@contexts/profileContext/domain/entity/profile";


describe('integration Local Profil mapper', () => {
  describe('mapUserDbToProfile', () => {
    it('should map UserDb to Profile', () => {
      const userDb = {
        fn: 'John',
        ln: 'Doe',
        token: 'accessToken',
        em: 'john.doe@example.com',
        rg: 'someRegion',
      };

      const result = LocalProfilMapper.mapUserDbToProfile(userDb);

      expect(result).toBeInstanceOf(Profile);
      expect(result.name).toEqual('JohnDoe');
      expect(result.accessToken).toEqual('accessToken');
      expect(result.email).toEqual('john.doe@example.com');
      expect(result.region).toEqual('someRegion');
    });
  });
});
