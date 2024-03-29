import {ScrollView, StyleSheet, Linking} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '@navigConfig/navigation.types';
import {Visit} from '@contexts/visiteContext/domain/entity/Visit';
import {Profile} from '@contexts/profileContext/domain/entity/profile';

import {REGEX_DATE, URL_NOTICE, URL_POLICY} from '@common/constants';
import {SettingsAppInfo} from '../Settings/Components/SettingsAppInfo';
import {LanguageModal} from '../Settings/Components/languageModal';
import {SettingsContents} from './Components/SettingsContents';
import {TRANSLATE} from '@common/translateConstants';

interface Props {
  navigation: Partial<StackNavigationProp<StackParamList>>;
  visits: Visit[] | undefined;
  error: string | undefined;
  loading: boolean;
  profile: Profile | undefined;
  sendData: (accessToken: string, lastUpadet: string, visits: Visit[]) => void;
  loadVisits: () => void;
  selectedItemId: number;
}

export const SettingsContainer = (props: Props) => {
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [pressedItemID, setPressedItemID] = useState<number>();

  var DateNow: string;
  const handlSynchronisation = () => {
    props.sendData(
      props.profile?.accessToken!!,
      props.profile?.lastUpdate!!,
      props.visits!!,
    );
  };
  if (props.profile?.lastUpdate!! === undefined) {
    DateNow = Date().replace(REGEX_DATE, '').toString();
  } else {
    DateNow = props.profile?.lastUpdate!!;
  }
  const loadInBrowserPolicy = () => {
    Linking.openURL(URL_POLICY).catch(err =>
      console.error("Couldn't load page", err),
    );
  };
  const loadInBrowserNotice = () => {
    Linking.openURL(URL_NOTICE).catch(err =>
      console.error("Couldn't load page", err),
    );
  };
  const onPressItem = (pressedItemID: number) => {
    switch (pressedItemID) {
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
  };

  useEffect(() => {
    onPressItem(pressedItemID!!);
  }, [pressedItemID]);

  useEffect(() => {
    console.log(
      '🚀 ~ SettingsContainer ~ props.profile?.lastUpdate:',
      props.profile,
    );
  }, [props.profile]);

  return (
    <ScrollView style={styles.conatiner}>
      <SettingsAppInfo
        visits={props.visits}
        sendData={handlSynchronisation}
        lastUpdateDate={t(TRANSLATE.LAST_UPDATE) + ' ' + DateNow}
      />
      <SettingsContents
        lastUpDate={props.profile?.lastUpdate!!.toString()!!}
        pressedItemID={pressedItemID}
        setPressedItemID={setPressedItemID}
      />
      <LanguageModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
});
