import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
interface Props {
  label: string;
  value: string | undefined;
  descriptipn: string;
  colorText: string;
}

export const NumberCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text testID='label' style={StyleSheet.flatten([styles.label, {color: props.colorText}])}>
          {props.label}
        </Text>
      </View>
      <View style={styles.item}>
        <Text testID='value' style={StyleSheet.flatten([styles.value, {color: props.colorText}])}>
          {props.value}
        </Text>
      </View>
      <View style={styles.item}>
        <Text testID='description' style={styles.description}>{props.descriptipn}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flex: 1,
    margin: 10,
    overflow: 'hidden',
    height: '90%',
    backgroundColor: 'white',
  },
  item: {
    flex: 1,
    margin: 10,
  },
  label: {
    textAlign: 'left',
    color: 'black',
    fontSize: 12,
  },
  value: {
    textAlign: 'justify',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
  },
  description: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 10,
  },
});
