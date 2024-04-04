import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import * as utils from '@utils/index';
import {t} from 'i18next';

interface Props {
  title: string;
  listLenght: number;
  onClick: () => void;
}
export const ObservationListItem = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{props.listLenght}</Text>
      </View>
      <View style={styles.iamgeContainer}>
        <Image source={utils.images.arrow_right} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: utils.colors.gris200,
    borderBottomColor: utils.colors.gris200,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 4,
  },
  numberContainer: {
    flex: 0.3,
  },
  iamgeContainer: {
    flex: 0.3,
  },
  image: {
    width: 10,
    height: 20,
  },
  title: {
    fontSize: 16,
    color: utils.colors.black,
    marginStart: 15,
    fontWeight: '600',
  },
  number: {
    fontSize: 16,
  },
});
