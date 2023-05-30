import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../colors';
interface Props {
  textLabels: string;
  textValues: string | undefined;
  textHints: string;
  colorText: string;
}

export const CardOne = (props: Props) => {
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.Container}>
        <Text style={[styles.textLabel, {color: props.colorText}]}>
          {props.textLabels}
        </Text>
      </View>
      <View style={styles.Container}>
        <Text style={[styles.textValue, {color: props.colorText}]}>
          {props.textValues}
        </Text>
      </View>
      <View style={styles.Container}>
        <Text style={styles.textHint}>{props.textHints}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  OuterContainer: {
    borderRadius: 5,
    flex: 1,
    margin: 10,
    overflow: 'hidden',
    height: 140,
    backgroundColor: 'white',
  },
  Container: {
    flex: 1,
    margin: 10,
  },
  textLabel: {
    textAlign: 'left',
    color: 'black',
    fontSize: 12,
  },
  textValue: {
    textAlign: 'justify',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
  },
  textHint: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 10,
  },
});
