import { View, ScrollView, StyleSheet, Linking } from 'react-native';
import React, { useState } from 'react';
import { SettingsAppInfo } from './Components/SettingsAppInfo';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigConfig/navigation.types';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { Profile } from '@contexts/profileContext/domain/entity/profile';
import { LanguageModal } from './Components/languageModal';
import { URL_NOTICE, URL_POLICY } from '@common/constants';
import { SettingsItemsGroup } from './Components/SettingsItemsGroup';

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
  return (
    <View style={styles.f1}>
        <ScrollView style={styles.f1}>
          <SettingsAppInfo visits={props.visits} sendData={handlSynchronisation} lastUpdateDate={t('txt.last.update.at')+' '+DateNow} />
          <SettingsItemsGroup lastUpdateDate={DateNow} OnSynchronize={() => handlSynchronisation()} OnClickSitesList={() => console.log('other sites modal')} OnClickLanguageModal={() =>setModalVisible(true)} OnClickFirstURL={() => loadInBrowserPolicy()} OnClickSecondURL={() =>loadInBrowserNotice()} />
          <LanguageModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    f1: {
      flex: 1,
    },
  });
