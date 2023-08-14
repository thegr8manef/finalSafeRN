import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as utils from '@utils/index';
import React from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
  onPressPositiveOFF: void;
}
export const OPOFF = (props: Props) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      onPress={props.onPressPositiveOFF}
      style={styles.container}>
      <View style={styles.imageConatiner}>
        <Image
          source={utils.images.PositDisabledIcon}
          style={styles.logoImage1}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.TextObservation}>{t('observation_positive')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageConatiner: {
    flex: 2
  },
  textContainer: {
    flex: 1
  },
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
