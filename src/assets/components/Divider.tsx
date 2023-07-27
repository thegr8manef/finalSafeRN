import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
interface Props {}

export const Divider = (props: Props) => {
  return <View style={styles.container_divider} />;
};

const styles = StyleSheet.create({
  container_divider: {
    width: '100%',
    height: '0.2%',
    backgroundColor: '#eaeaea',
  },
});
