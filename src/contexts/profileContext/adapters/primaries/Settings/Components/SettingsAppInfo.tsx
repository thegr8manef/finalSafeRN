import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import i18next, { t } from 'i18next';
import DeviceInfo from 'react-native-device-info';
import ButtonComponent from '@common/adapters/primaries/components/ButtonPrimary';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { sendData } from '@contexts/synchronisationContext/useCases/SendData/actions';

interface Props {
    visits: Visit[] | undefined;
    sendData: () => void;
    lastUpdateDate : string;
}
export const SettingsAppInfo = (props: Props): JSX.Element => {
  return (
    <View style={styles.container}>
        <Image style={styles.logo_splash} source={utils.images.splashSLogo} />
        <Text style={styles.version_text}>{DeviceInfo.getVersion()} {'('} {DeviceInfo.getBuildNumber()} {')'}</Text>
        <Text style={styles.last_update_text}>{props.lastUpdateDate}</Text>
        <View style={styles.syncho_container}>
        <ButtonComponent
            testID='sync-button'
            buttonColor={props.visits?.length ? utils.colors.primary : utils.colors.gray90}
            width={'100%'}
            textButton={t('txt.synchroniser')}
            onPressButton={props.sendData}
          />
          </View>   
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    marginBottom: 15,
},
logo_splash: {
    marginTop: 30,
    width: 75,
    height: 75,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  version_text: {
    marginTop: 5,
    textAlign: 'center',
  },
  last_update_text: {
    marginTop: '20%',
    textAlign: 'center',
  },
  syncho_container: {
    paddingHorizontal: 100,
    marginTop: 10,
  }
});
