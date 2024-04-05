import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Site} from '@contexts/visiteContext/domain/entity/Site';

interface Props {
  site: Site;
}

export const SiteCards: React.FC<Props> = (props: Props) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#64bdfd',
    height: '40%',
  },
});
