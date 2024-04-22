import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import * as utils from '@utils/index';
import colors from '@assets/colors';
interface Props {
  toggleCollapse: () => void;
  stat: string;
}

export const ButtonCollapse = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.toggleCollapse}>
        <View style={styles.button}>
          {props.stat === 'collapse' ? (
            <Image source={utils.images.icn_collapse} style={styles.image} />
          ) : (
            <Image source={utils.images.icn_expand} style={styles.image} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 20,
  },
  image: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: colors.white,
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 7,
  },
});
