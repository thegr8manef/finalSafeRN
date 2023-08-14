export interface ProfileDto {
  accessToken: string;
  account: {
    claims: {
      aud: [];
      iss: string;
      name: string;
      oid: string;
      preferred_username: string;
      rh: string;
      sub: string;
      tid: string;
      uti: string;
      ver: string;
    };

    identifier: string;
    tenantId: string;
    username: string;
  };

  expiresOn: number;
  idToken: string;
  scopes: string[];
  tenantId: string;
}

/**
 * User info from api
 */

export interface userDto {
  rc: string;
  rm: string;
  rd: {
    or: {
      rg: string;
      ss: string;
      es: string;
    };
  };
}
