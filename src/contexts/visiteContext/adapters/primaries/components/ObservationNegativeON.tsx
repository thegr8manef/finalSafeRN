import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as utils from '@utils/index';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onPressNegative: () => void;
}
export const ONON = (props: Props) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity testID='up-thumb-btn'
      onPress={props.onPressNegative} style={styles.container}>
      <View style={{ flex: 2 }}>
        <Image
        testID='img'
          source={utils.images.NegDisabledIcon}
          style={styles.logoImage2}
        />
      </View>
      <View style={{ flex: 1 }}>
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
    tintColor: utils.colors.gris200,
  },
  TextObservation: {
    color: utils.colors.gris300,
    textAlign: 'center',
  },
  container: { flex: 1, backgroundColor: utils.colors.griy500 },
});
