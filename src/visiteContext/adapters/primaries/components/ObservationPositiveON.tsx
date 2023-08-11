import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../../../assets/colors';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onPressPositive: () => void;
}
export const OPON = (props: Props) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity 
    testID='up-thumb-btn'
    onPress={props?.onPressPositive} style={{ flex: 1 }}>
      <View style={{ flex: 2 }}>
        <Image
          testID='img'
          source={require('../../../../assets/img/icn_positive_disabled_blocked.png')}
          style={styles.logoImage1}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.TextObservation}>{t('observation_positive')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TextObservation: {
    color: colors.gris300,
    textAlign: 'center',
  },
  logoImage1: {
    width: 30,
    height: '50%',
    resizeMode: 'stretch',
    marginTop: '10%',
    alignSelf: 'center',
    tintColor: colors.gris200,
  },
});
