import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import * as utils from '@utils/index';
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
  },
  image: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginVertical: -15,
  },
  button: {
    width: '100%',
    height: 20,
    backgroundColor: utils.colors.gris100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: utils.colors.gris200,
    borderBottomColor: utils.colors.gris200,
    marginTop: 20,
  },
});
