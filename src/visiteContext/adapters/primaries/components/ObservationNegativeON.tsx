import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../../assets/colors';
import React from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
  onPressNegative: void;
}
const {t} = useTranslation();
export const ONON = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPressNegative} style={{flex: 1}}>
      <View style={{flex: 2}}>
        <Image
          source={require('../../../../assets/img/icn_negative_disabled.png')}
          style={styles.logoImage2}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.TextObservation}>{t('observation_negative')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoImage2: {
    width: 30,
    height: '50%',
    resizeMode: 'stretch',
    marginTop: '16%',
    alignSelf: 'center',
    tintColor: colors.gris200,
  },
  TextObservation: {
    color: colors.gris300,
    textAlign: 'center',
  },
});
