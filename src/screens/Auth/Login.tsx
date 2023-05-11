import { View, Text, Button } from 'react-native'
import React from 'react'
import PublicClientApplication from 'react-native-msal';
import type { MSALConfiguration , MSALInteractiveParams, MSALResult} from 'react-native-msal';
import styles from './LoginStyes'
import fr from '../../assets/strings/fr';




export default function login() {

   const handelLogin = async () =>{

    console.log("--------- START ----------")
    const config: MSALConfiguration = {
      auth: {
        clientId: 'fa807dca-fa96-492e-bde2-1c65d5652520',
     //   authority: 'https://login.microsoftonline.com/13fcd6fb-10d6-4cde-8ee4-afc1e1fada3f',
        // authority: 'default-authority',
      },
    };
    const pca = new PublicClientApplication(config);
    const scopes = ["openid", "profile", "User.Read", "email"];    
  
    
// Initialize the public client application:
 try {
  await pca.init();
} catch (error) {
   console.error('Error initializing the pca, check your config.', error);
 }

// Acquiring a token for the first time, you must call pca.acquireToken
 const params: MSALInteractiveParams = { scopes };
  const result: MSALResult | undefined = await pca.acquireToken(params);
  console.log("--------- RESULTING ----------")
  console.log(result?.accessToken)

  
  }

  return (
    <View style={styles.container}>
      <View style={styles.languageContainer} >

      </View>

      <View style={styles.mainContainer} >
                <Button onPress={handelLogin} title={fr.loginTitle}/>

        </View>

<View style={styles.bottomContainer} >

</View>
   
      
    </View>
  )
}

