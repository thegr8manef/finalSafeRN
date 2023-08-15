import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as utils from '@utils/index'

export const Divider = (): JSX.Element => {
  return (<View style={styles.container_divider} />);
};

const styles = StyleSheet.create({
  container_divider: {
    borderBottomColor: utils.colors.gris100,
    borderBottomWidth: 1,
  },
});
