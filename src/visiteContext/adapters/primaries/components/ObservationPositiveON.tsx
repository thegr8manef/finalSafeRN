import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../../../../assets/colors';
import React from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
  onPressPositive: void;
}
export const OPON = (props: Props) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity onPress={props.onPressPositive} style={styles.container}>
      <View style={{flex: 2}}>
        <Image
          source={require('../../../../assets/img/icn_positive_disabled_blocked.png')}
          style={styles.logoImage1}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.TextObservation}>{t('observation_positive')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.griy500},
  TextObservation: {
    color: colors.gris300,
    textAlign: 'center',
  },
  logoImage1: {
    height: '40%',
    resizeMode: 'contain',
    marginTop: '10%',
    alignSelf: 'center',
    tintColor: colors.gris200,
  },
});
