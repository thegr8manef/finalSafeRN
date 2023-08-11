import {View, StyleSheet} from 'react-native';
import React from 'react';

export const DividerVisite = (): JSX.Element => {
  return <View style={styles.container_divider} />;
};

const styles = StyleSheet.create({
  container_divider: {
    width: '90%',
    marginTop: 10,
    marginHorizontal: 10,
    height: '0.5%',
    backgroundColor: '#000000',
  },
});
