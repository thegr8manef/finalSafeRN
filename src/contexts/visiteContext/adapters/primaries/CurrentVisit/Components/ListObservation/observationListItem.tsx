import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import * as utils from '@utils/index';
import {t} from 'i18next';
import globalStyle from '@styles/globalStyle';

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
        <Image source={utils.images.icn_right_chevron} style={styles.image} />
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
    borderTopColor: utils.colors.gray90,
    borderBottomColor: utils.colors.gray90,
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
    paddingEnd: 5,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    color: utils.colors.black,
    marginStart: 15,
    fontWeight: '600',
    fontFamily: utils.fonts.AvenirMedium,
  },
  number: {
    fontSize: 16,
  },
});
