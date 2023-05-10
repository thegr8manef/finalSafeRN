import type { B2CConfiguration } from './b2cClient';

export const b2cConfig: B2CConfiguration = {
  auth: {
    clientId: '3cbe76b8-9199-48e7-8c9c-17cdb03955d4',
    authorityBase: 'https://stashcafe.b2clogin.com/tfp/stashcafe.onmicrosoft.com',
    policies: {
      signInSignUp: 'B2C_1_SignInUp',
      passwordReset: 'B2C_1_PasswordReset',
    },
    // redirectUri: Platform.select({ default: undefined }),
  },
  // web only:
  cache: { cacheLocation: 'localStorage' },
};

export const b2cScopes = ['https://stashcafe.onmicrosoft.com/api/user_impersonation'];