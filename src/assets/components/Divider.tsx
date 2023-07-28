import {View, StyleSheet} from 'react-native';
import React from 'react';

export const Divider = () => {
  return <View style={styles.container_divider} />;
};

const styles = StyleSheet.create({
  container_divider: {
    width: '100%',
    height: '0.2%',
    backgroundColor: '#eaeaea',
  },
});
