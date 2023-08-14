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
      <View style={{flex: 2}}>
        <Image
          source={utils.images.NegDisabledIcon}
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
