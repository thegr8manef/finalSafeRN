import {result} from '../../domain/entity/result';
import {ProfileService} from '../../domain/gateway/profileService';
import {Observable, from} from 'rxjs';
import PublicClientApplication, {
  MSALConfiguration,
  MSALInteractiveParams,
  MSALResult,
} from 'react-native-msal';

export class MsalProfileService implements ProfileService {
  loginMsal(): Observable<result> {
    const config: MSALConfiguration = {
      auth: {
        clientId: 'fa807dca-fa96-492e-bde2-1c65d5652520',
        // authority: 'https://login.microsoftonline.com/13fcd6fb-10d6-4cde-8ee4-afc1e1fada3f',
        // authority: 'default-authority',
      },
    };
    const promiseSignup = new Promise<string>((resolve, reject) => {
      const pca = new PublicClientApplication(config);
      const scopes = ['openid', 'profile', 'User.Read', 'email'];

      pca
        .init()
        .then(() => {
          const params: MSALInteractiveParams = {scopes};
          pca
            .acquireToken(params)
            .then(result => {
              resolve(result.accessToken);
            })
            .catch(error => reject(error));
        })
        .catch(error => reject(error));
    });
    return from(promiseSignup);
  }
}
