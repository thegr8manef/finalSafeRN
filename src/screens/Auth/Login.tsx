import { View, Text, Button, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import PublicClientApplication from 'react-native-msal';
import type { MSALConfiguration , MSALInteractiveParams, MSALResult} from 'react-native-msal';
import styles from './LoginStyes'
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import msalConfig from '../../config/msal-config';
import { useTranslation } from 'react-i18next';



export default function login() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("")
  const [mounted, setMounted] = useState(false)

  const { t, i18n } = useTranslation();

  const [items, setItems] = useState([
    {label: 'Français', value: 'fr'},
    {label: 'Néelandais', value: 'nl'},
    {label: 'Polonais', value: 'pl'},
    {label: 'Allemand', value: 'al'},
    {label: 'Anglais', value: 'en'},
  ]);

  useEffect(()=>{
    setMounted(true)
  })

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('language')
     
      if(value !== null) {
              setLanguage(value)
      }else{
            setLanguage("Français")
      }
    } catch(e) {
      console.log(e)
    }
  }

  if(!mounted){
   getData()
  }

  

   const handelLogin = async () =>{

    console.log("--------- START ----------")
    const config: MSALConfiguration = {
      auth: {
        clientId: msalConfig.clientId,
      },
    };
    const pca = new PublicClientApplication(config);
    const scopes = ["profile",  "email"];    
  
    
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
  console.log(result)

  
  }

  const changeLanguage = async () => {
    try {
      i18n.changeLanguage(language)
      await AsyncStorage.setItem('language', language)
    } catch (e) {
        console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.languageContainer} >
          <DropDownPicker
     

            open={open}
           value={language}
           items={items}
           setOpen={setOpen}
           setValue={setLanguage}
           setItems={setItems}
           onChangeValue={ changeLanguage}
           style={styles.dropDownPicker}
           containerStyle={styles.dropDownPickerContainer}
           placeholder={language}
           disableBorderRadius={false}
           dropDownContainerStyle={styles.dropDownPicker}
         
        />

      </View>

      <View style={styles.mainContainer} >

        <Image source={require('../../assets/img/logo_splash.png') } style={styles.logoImage} />
               

               <Text style={styles.description}>{t('sso_description')}</Text>

                
        </View>

<View style={styles.bottomContainer} >
<Pressable onPress={handelLogin}   style={styles.button}>
                <Text style={styles.btnText}>{t("action_sign_in")}</Text>
              
               </Pressable>

  <Image source={require('../../assets/img/logo_eiffage.png')} style={styles.eiffageLogo} />

</View>
   
      
    </View>
  )
}

