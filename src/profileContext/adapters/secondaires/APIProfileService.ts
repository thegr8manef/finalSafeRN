import {Profile} from '../../domain/entity/profile';
import {ProfileService} from '../../domain/gateway/profileService';
import {Observable, from, throwError} from 'rxjs';
import PublicClientApplication, {
  MSALConfiguration,
  MSALInteractiveParams,
} from 'react-native-msal';
import msalConfig from '../../../config/msal-config';
import { ProfileMapper } from './mapper/profile.mapper';
import { catchError, map } from "rxjs/operators";
import { userDto } from './dto/profile.dto';
import ws from '../../../config/ws';
import { ObservableAjaxHttpClient } from '../../../common/adapters/secondaries/real/observableAjaxHttpClient';
import { User } from '../../domain/entity/user';

export class APIProfileService implements ProfileService {
  
  private headers: Record<string, string> = {
    'Content-Type': 'application/json'
}
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

  loadProfileDetails(accessToken : string): Observable<User> {

    const _headers : Record <string, string> = {
      'Content-Type': 'application/json',
      'token': accessToken
    }

    const body : Record <string, string> = {
     
      jwt : accessToken
    }
      return new ObservableAjaxHttpClient()

          .post<userDto>(ws.baseUrl+"authentication",body, _headers)
          .pipe(
              map(response => ProfileMapper.mapToProfileDetails(response.response)
              ),
              catchError(err =>  throwError(err))
           )
          
  
  }
}
