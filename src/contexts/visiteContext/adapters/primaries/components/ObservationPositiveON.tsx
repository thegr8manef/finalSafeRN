import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as utils from '@utils/index';
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
          source={utils.images.PositDisabledIcon}
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
  container: {flex: 1, backgroundColor: utils.colors.griy500},
  TextObservation: {
    color: utils.colors.gris300,
    textAlign: 'center',
  },
  logoImage1: {
    height: '40%',
    resizeMode: 'contain',
    marginTop: '10%',
    alignSelf: 'center',
    tintColor: utils.colors.gris200,
  },
});
