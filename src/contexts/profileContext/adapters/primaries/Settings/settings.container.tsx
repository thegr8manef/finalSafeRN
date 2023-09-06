import { View, Image, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SettingsAppInfo } from './Components/SettingsAppInfo';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigConfig/navigation.types';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { Profile } from '@contexts/profileContext/domain/entity/profile';
import { SettingsItemsGroup  } from './Components/SettingsItemsGroup';
import { SettingsItem } from './Components/SettingsItem';
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
      const DateNow = Date().replace(/\sGMT.*/, '').toString();
      const loadInBrowserPolicy = () => {
        Linking.openURL(URL_POLICY).catch(err => console.error("Couldn't load page", err));
      };
      const loadInBrowserNotice = () => {
        Linking.openURL(URL_NOTICE).catch(err => console.error("Couldn't load page", err));
      };
  return (
    <View style={styles.f1}>
        <ScrollView style={styles.f1}>
          <SettingsAppInfo visits={props.visits} sendData={handlSynchronisation} lastUpdateDate={t('txt.last.update.at')+' '+DateNow} />
          <SettingsItemsGroup  title={t('txt.chantiers')} lastUpdateDate={DateNow} topSubtitle={t('txt.mes.chantier')} bottomSubtitme={t('txt.autres.chantier')} notNull={true} iconTop={[utils.images.synchoLogo]} iconBottom ={[utils.images.arrow_right]} style={[styles.Image]} style_bottom={[styles.Image_arrow]} isFirstItem={true} onClickFirstUrl={() => handlSynchronisation()} onClickSecondUrl={() => console.log('other sites modal')}/>   
          <SettingsItem title={t('txt.referentiel.listes')} Subtitle={t('txt.typology.risques.questions')} lastUpdateDate={DateNow} iconTop={[utils.images.synchoLogo]} style_image={styles.Image_syncho} notNull={true} isFirstItem={false} onSelect={() => handlSynchronisation()}/>
          <SettingsItem title={t('txt.photos')} Subtitle={t('txt.no.photos.wait.send')} lastUpdateDate={''} iconTop={[utils.images.mediaSyncho]} style_image={styles.Image_camera} notNull={false} isFirstItem={false} onSelect={() => handlSynchronisation()}/>
          <SettingsItem title={t('txt.language')} Subtitle={t('txt.language')} lastUpdateDate={''} iconTop={[]} style_image={styles.Image_camera} notNull={false} isFirstItem={false} onSelect={() =>setModalVisible(true)} />
          <SettingsItemsGroup  title={t('settings_about')} lastUpdateDate={''} topSubtitle={t('settings_confidentiality')} bottomSubtitme={t('settings_legal_notice')} notNull={false} iconTop={[utils.images.arrow_right]} iconBottom ={[utils.images.arrow_right]} style={[styles.Image_arrow]} style_bottom={[styles.Image_arrow]} isFirstItem={false} onClickFirstUrl={() => loadInBrowserPolicy()} onClickSecondUrl={() =>loadInBrowserNotice()}/>
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
