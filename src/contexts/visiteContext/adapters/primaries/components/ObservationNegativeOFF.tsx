import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as utils from '@utils/index';
import React from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
  onPressNegativeOFF: void;
}

export const ONOFF = (props: Props) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      onPress={props.onPressNegativeOFF}
      style={styles.container}>
      <View style={styles.imageConatiner}>
        <Image
          source={utils.images.NegDisabledIcon}
          style={styles.logoImage2}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.TextObservation}>{t('observation_negative')}</Text>
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
  logoImage2: {
    height: '40%',
    resizeMode: 'contain',
    marginTop: '16%',
    alignSelf: 'center',
    tintColor: 'red',
  },
  TextObservation: {
    color: utils.colors.textColor,
    textAlign: 'center',
    fontWeight: '500',
  },
  container: {flex: 1, backgroundColor: utils.colors.griy500},
});
