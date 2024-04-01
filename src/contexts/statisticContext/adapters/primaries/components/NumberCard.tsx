import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import * as utils from '@utils/index';

interface Props {
  label: string;
  value: string | undefined;
  description: string;
  colorText: string;
}
/* show seprated with space every 3 digits */
const formatNumber = (value: string | undefined) => {
  if (value) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  return '0';
};

export const NumberCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text
          testID="label"
          style={StyleSheet.flatten([styles.label, {color: props.colorText}])}>
          {props.label}
        </Text>
      </View>
      <View style={styles.item}>
        <Text
          testID="value"
          style={StyleSheet.flatten([styles.value, {color: props.colorText}])}>
          {formatNumber(props.value)}
        </Text>
      </View>
      <View style={styles.item}>
        <Text testID="description" style={styles.description}>
          {props.description}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flex: 1,
    margin: 8,
    overflow: 'hidden',
    height: '90%',
    backgroundColor: 'white',
    elevation: 3,
  },
  item: {
    flex: 1,
    padding: 5,
  },
  label: {
    textAlign: 'left',
    color: 'black',
    fontSize: 11,
    fontFamily: utils.fonts.AvenirHeavy,
  },
  value: {
    textAlign: 'justify',
    color: 'black',
    fontSize: 22,
    fontFamily: utils.fonts.AvenirHeavy,
  },
  description: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 10,
    fontFamily: utils.fonts.AvenirMedium,
  },
});
