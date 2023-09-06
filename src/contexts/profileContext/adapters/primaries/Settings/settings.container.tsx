import { View, Image, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppInfo } from './Components/AppInfo';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigConfig/navigation.types';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { Profile } from '@contexts/profileContext/domain/entity/profile';
import { TwoItemList } from './Components/TwoItemList';
import { OneItemList } from './Components/OneItemList';
import { LanguageModal } from './Components/languageModal';
import { URL_NOTICE, URL_POLICY } from '@common/constants';

interface Props {
    navigation: Partial<StackNavigationProp<StackParamList>>;
    visits: Visit[] | undefined;
    error: string | undefined;
    loading: boolean;
    profile: Profile | undefined;
    sendData: (accessToken: string, lastUpadet: string, visits: Visit[]) => void;
    loadVisits: () => void;
}

export const SettingsContainer = (props: Props) => {
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const handlSynchronisation = () => {
        props.sendData(props.profile?.accessToken!!, props.profile?.lastUpdate!!, props.visits!! )
      }
      const loadInBrowserPolicy = () => {
        Linking.openURL(URL_POLICY).catch(err => console.error("Couldn't load page", err));
      };
      const loadInBrowserNotice = () => {
        Linking.openURL(URL_NOTICE).catch(err => console.error("Couldn't load page", err));
      };
  return (
    <View style={styles.f1}>
        <ScrollView style={styles.f1}>
          <AppInfo visits={props.visits} sendData={handlSynchronisation} />
          <TwoItemList title={t('txt.chantiers')} date_last_update={'05 September 2023 16:18:23'} sub_title_top={t('txt.mes.chantier')} sub_title_bottom={t('txt.autres.chantier')} notNull={true} rightIcon_top={[utils.images.synchoLogo]} rightIcon_bottom={[utils.images.arrow_right]} style={[styles.Image]} style_bottom={[styles.Image_arrow]} isFirstItem={true} onSelectURL1={() => handlSynchronisation()} onSelectURL2={() => console.log('other sites modal')}/>   
          <OneItemList title={t('txt.referentiel.listes')} sub_title={t('txt.typology.risques.questions')} date_last_update={'05 September 2023 16:18:23'} rightIcon={[utils.images.synchoLogo]} style_image={styles.Image_syncho} notNull={true} isFirstItem={false} onSelect={() => handlSynchronisation()}/>
          <OneItemList title={t('txt.photos')} sub_title={t('txt.no.photos.wait.send')} date_last_update={''} rightIcon={[utils.images.mediaSyncho]} style_image={styles.Image_camera} notNull={false} isFirstItem={false} onSelect={() => handlSynchronisation()}/>
          <OneItemList title={t('txt.language')} sub_title={t('txt.language')} date_last_update={''} rightIcon={[]} style_image={styles.Image_camera} notNull={false} isFirstItem={false} onSelect={() =>setModalVisible(true)} />
          <TwoItemList title={t('settings_about')} date_last_update={''} sub_title_top={t('settings_confidentiality')} sub_title_bottom={t('settings_legal_notice')} notNull={false} rightIcon_top={[utils.images.arrow_right]} rightIcon_bottom={[utils.images.arrow_right]} style={[styles.Image_arrow]} style_bottom={[styles.Image_arrow]} isFirstItem={false} onSelectURL1={() => loadInBrowserPolicy()} onSelectURL2={() =>loadInBrowserNotice()}/>
          <LanguageModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    f1: {
      flex: 1,
    },
    Image_syncho:{
      width: 30,
      height: 30,
      alignSelf: 'center'
  },
  Image_camera:{
    width: 30,
    height: 25,
    alignSelf: 'center'
},
Image:{
  width: 30,
  height: 30,
  alignSelf: 'center'
},
Image_arrow:{
  width: 10,
  height: 20,
  alignSelf: 'center'
},
  });
