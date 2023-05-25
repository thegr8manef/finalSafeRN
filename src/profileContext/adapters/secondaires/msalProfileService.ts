import {result} from '../../domain/entity/result';
import {ProfileService} from '../../domain/gateway/profileService';
import {Observable, from} from 'rxjs';
import PublicClientApplication, {
  MSALConfiguration,
  MSALInteractiveParams,
  MSALResult,
} from 'react-native-msal';
import msalConfig from '../../../config/msal-config';

export class MsalProfileService implements ProfileService {
  loginMsal(): Observable<result> {
    const config: MSALConfiguration = {
      auth: {
        clientId: msalConfig.clientId,
       
      },
    };
    const promiseSignup = new Promise<result>((resolve, reject) => {
      const pca = new PublicClientApplication(config);
      const scopes = ['openid', 'profile', 'User.Read', 'email'];

      pca
        .init()
        .then(() => {
          const params: MSALInteractiveParams = {scopes};
          pca
            .acquireToken(params)
            .then(result => {
              resolve(result);
            })
            .catch(error => reject(error));
        })
        .catch(error => reject(error));
    });
    return from(promiseSignup);
  }
}
