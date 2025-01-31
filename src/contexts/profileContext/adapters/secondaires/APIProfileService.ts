import {Profile} from '../../domain/entity/profile';
import {ProfileService} from '../../domain/gateway/profileService';
import {Observable, from, throwError} from 'rxjs';
import PublicClientApplication, {
  MSALConfiguration,
  MSALInteractiveParams,
} from 'react-native-msal';
import {ProfileMapper} from './mapper/profile.mapper';
import {catchError, map} from 'rxjs/operators';
import {userDto} from './dto/profile.dto';
import {ObservableAjaxHttpClient} from '@common/adapters/secondaries/real/observableAjaxHttpClient';
import {User} from '../../domain/entity/user';
import msalConfig from '@config/msal-config';
import ws from '@config/ws';

export class APIProfileService implements ProfileService {
  private headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  /**
   * Login with Azure MSAL BDA
   */
  loginMsal(): Observable<Profile> {
    const config: MSALConfiguration = {
      auth: {
        clientId: msalConfig.clientId,
      },
    };
    const promiseSignup = new Promise<Profile>((resolve, reject) => {
      const pca = new PublicClientApplication(config);
      const scopes = ['openid', 'profile', 'User.Read', 'email'];

      pca
        .init()
        .then(() => {
          const params: MSALInteractiveParams = {scopes};
          pca
            .acquireToken(params)
            .then(result => {
              resolve(ProfileMapper.mapToProfile(result));
            })
            .catch(error => reject(error));
        })
        .catch(error => reject(error));
    });
    return from(promiseSignup);
  }

  /**
   *  Load profile details
   */

  loadProfileDetails(accessToken: string): Observable<User> {
    const _headers: Record<string, string> = {
      'Content-Type': 'application/json',
      //  'token': accessToken
      /**
       * We are using a static token because we don't have access to FinalSafe msal
       */
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIyM2JmYmVlMy1iMzc0LTQ5MWEtYjI0Mi0wODk2ZmMwYWYxNmUiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMTNmY2Q2ZmItMTBkNi00Y2RlLThlZTQtYWZjMWUxZmFkYTNmL3YyLjAiLCJpYXQiOjE2ODUzNTQ2NTIsIm5iZiI6MTY4NTM1NDY1MiwiZXhwIjoxNjg1MzU4NTUyLCJhaW8iOiJBV1FBbS84VEFBQUFtR3BkZm9NZEVVai9TeVVNTzBMNkY5YTUrUGRrNWNFeXFhejNXT3pnTVVoOUxVNWw5YU40ZGEzUXFhQlhWekVwM2hyd3pkb2U5aFMyMmsybDk4cDlpM2RCYjhyNHlVSEQ0WXNnMVRwQTkyTW43aTJtQUM3ekxla1ROLzloRm9ybiIsImZhbWlseV9uYW1lIjoiU291aXNzaSIsImdpdmVuX25hbWUiOiJIaWJhIiwibmFtZSI6IkhpYmEgU291aXNzaSIsIm9pZCI6IjNkNTg1N2Q2LTI2YTMtNDliMC04N2ViLTJlNjI4ZmYzNjUzNSIsInByZWZlcnJlZF91c2VybmFtZSI6Imhzb3Vpc3NpQG1vYmVsaXRlZGV2Lm9ubWljcm9zb2Z0LmNvbSIsInJoIjoiMC5BVjBBLTliOEU5WVEza3lPNUtfQjRmcmFQLU8tdnlOMHN4cEpza0lJbHZ3SzhXNWRBQ00uIiwic3ViIjoiVzlwaV9LcFA2MW5VdEpUN1hxbUNJUG04QmEyeHRlY2pTUnBsUjA1Yk15RSIsInRpZCI6IjEzZmNkNmZiLTEwZDYtNGNkZS04ZWU0LWFmYzFlMWZhZGEzZiIsInV0aSI6IkVwYXJDbHZQZ0VTWC11S2FUand2QUEiLCJ2ZXIiOiIyLjAifQ.YMxsom6QBhml2tj0XbAt-Vuz56FcNM5-vGQwkrLTha4PjTR1chIsdlkgwX4N3vbUDMQUZFEbS4ayexLzH7N13pU6JFIH29FyfxaznB2MBpESBwsaSIgwsSRSWSb54wEENfSHrsAT6XI7Yzy9qD_QV_8YeIC9rnOAn3zy1FS-vqp55NUrPliHxIUWxOJpsgC8-gD_BOl83cjcs-Gqi3-yEe85f81S867U3EC8xFC9NTI8O4KGCU_3TNEi7NtN29cXqo38jicdpexCTTbGzK0kXogdxVPz3wfsV0EK3MSR95-xcdvpYQXpniZ2W_NV0I9FiQ5cpwEo076f4Yq5mmHfVQ',
    };

    const body: Record<string, string> = {
      lu: '-1',
    };
    const URL = ws.baseUrl + 'details-profile';
    return new ObservableAjaxHttpClient()

      .post<userDto>(URL, body, _headers)
      .pipe(
        map(response => ProfileMapper.mapToProfileDetails(response.response)),
        catchError(err => throwError(err)),
      );
  }
}
