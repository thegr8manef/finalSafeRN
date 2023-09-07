import { View, ScrollView, StyleSheet, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigConfig/navigation.types';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { Profile } from '@contexts/profileContext/domain/entity/profile';

import { URL_NOTICE, URL_POLICY } from '@common/constants';
import { SettingsAppInfo } from '../Settings/Components/SettingsAppInfo';
import { LanguageModal } from '../Settings/Components/languageModal';
import { SettingsItemsGroup } from './Components/SettingsItemGroup';


interface Props {
    navigation: Partial<StackNavigationProp<StackParamList>>;
    visits: Visit[] | undefined;
    error: string | undefined;
    loading: boolean;
    profile: Profile | undefined;
    sendData: (accessToken: string, lastUpadet: string, visits: Visit[]) => void;
    loadVisits: () => void;
    selectedItemId : number;
}

export const SettingsContainer = (props: Props) => {
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedItemID, setSelectedItemID] = useState<number>();
    console.log("🚀 ~ file: settings.container.tsx:31 ~ SettingsContainer ~ selectedItemID02:", selectedItemID)

    var DateNow: string;
    const handlSynchronisation = () => {
        props.sendData(props.profile?.accessToken!!, props.profile?.lastUpdate!!, props.visits!! )

      }
        if(props.profile?.lastUpdate!! === undefined){
          DateNow = Date().replace(/\sGMT.*/, '').toString();
        }else{
          DateNow = props.profile?.lastUpdate!!
        }
      const loadInBrowserPolicy = () => {
        Linking.openURL(URL_POLICY).catch(err => console.error("Couldn't load page", err));
      };
      const loadInBrowserNotice = () => {
        Linking.openURL(URL_NOTICE).catch(err => console.error("Couldn't load page", err));
      };

       useEffect(() => {
        switch(selectedItemID) { 
          case 1: { 
            handlSynchronisation();
             break; 
          } 
          case 2: { 
             console.log('other Site pressed');
             break; 
          }
          case 3: { 
            handlSynchronisation();
            break; 
          } 
          case 4: { 
            handlSynchronisation();
            break; 
          } 
          case 5: { 
            setModalVisible(true);
            break; 
          } 
          case 6: { 
            loadInBrowserPolicy();
            break; 
          } 
          case 7: { 
            loadInBrowserNotice();
            break; 
          }  
          default: {
            break; 
          } 
       }

       },[selectedItemID])

  return (
    <View style={styles.f1}>
        <ScrollView style={styles.f1}>
          <SettingsAppInfo visits={props.visits} sendData={handlSynchronisation} lastUpdateDate={t('txt.last.update.at')+' '+DateNow} />
          <SettingsItemsGroup lastUpDate={props.profile?.lastUpdate!!.toString()!!} selectedItemID={selectedItemID} setSelectedItemID={setSelectedItemID}  />
          <LanguageModal visible={modalVisible} onClose={() => setModalVisible(false)}/>
        </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    f1: {
      flex: 1,
    },
  });
