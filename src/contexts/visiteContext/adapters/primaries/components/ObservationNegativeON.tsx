import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as utils from '@utils/index';
import React from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
  onPressNegative: void;
}
export const ONON = (props: Props) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity onPress={props.onPressNegative} style={styles.container}>
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
    tintColor: utils.colors.gris200,
  },
  TextObservation: {
    color: utils.colors.gris300,
    textAlign: 'center',
  },
  container: {flex: 1, backgroundColor: utils.colors.griy500},
});
