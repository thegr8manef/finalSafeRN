import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
interface Props {
}

export const DividerVisite = (props: Props) => {
  return <View style={styles.container_divider} />;
}

const styles = StyleSheet.create({
  container_divider: {
    width: '90%',
    marginTop: 10,
    marginHorizontal: 10,
    height: '0.5%',
    backgroundColor: '#000000',
  },
});
