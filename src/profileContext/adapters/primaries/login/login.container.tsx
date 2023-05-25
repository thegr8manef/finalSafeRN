import { View, Text, Button, Image, Pressable, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './loginStyles'
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../../../navigation/configuration/navigation.types";
import colors from '../../../../assets/colors';
import { result } from '../../../domain/entity/result';


interface Props {
  loading: boolean;
  error: string | undefined;
  result: result | undefined;
  login: () => void;
  navigation: StackNavigationProp<StackParamList>;
  }


  
  


export  const LoginContainer = (props:  Props) => {
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
   if(props.result != undefined){

   props.navigation.navigate('Profile', { result : props.result})
        
   }
    
    
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
    
    }
  }
  if(!mounted){
   getData()
  }

  

 

  const changeLanguage = async () => {
    try {
      i18n.changeLanguage(language)
      await AsyncStorage.setItem('language', language)
    } catch (e) {
       
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

  


        <Image source={require('../../../../assets/img/logo_splash.png') } style={styles.logoImage} />
               

               <Text style={styles.description}>{t('sso_description')}</Text>

                
        </View>
        <ActivityIndicator size="large" color={colors.primary} style={{display: props.loading ?  "flex": "none"}} />
          <View style={styles.bottomContainer} >
          <Pressable onPress={()=>{props.login()}}   style={[styles.button, {display: props.loading ?   "none": "flex"}]}>
                <Text style={styles.btnText}>{t("action_sign_in")}</Text>
              
               </Pressable>

  <Image source={require('../../../../assets/img/logo_eiffage.png')} style={styles.eiffageLogo} />

</View>
   
      
    </View>
  )
}

