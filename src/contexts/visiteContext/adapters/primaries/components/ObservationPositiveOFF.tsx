import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as utils from '@utils/index';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onPressPositiveOFF: () => void;
}
export const OPOFF = (props: Props) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      testID='up-thumb-btn'
      onPress={props.onPressPositiveOFF} 
      style={{ flex: 1 }}>
      <View style={{ flex: 2 }}>
        <Image
          testID='img'
          source={utils.images.PositDisabledIcon}
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
    color: utils.colors.textColor,
    textAlign: 'center',
    fontWeight: '500',
  },
  logoImage1: {
    height: '40%',
    resizeMode: 'contain',
    marginTop: '10%',
    alignSelf: 'center',
    tintColor: utils.colors.green,
  },
  container: {flex: 1, backgroundColor: utils.colors.griy500},
});
