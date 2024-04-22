import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Site} from '@contexts/visiteContext/domain/entity/Site';
import colors from '@assets/colors';
import {VISIT_TYPE} from '@common/constants';

interface Props {
  site: Site;
  type: number;
}

export const SiteCards: React.FC<Props> = (props: Props) => {
  let visitName;
  switch (props.type) {
    case 0:
      visitName = VISIT_TYPE['0TYPE'];
    case 3:
      visitName = VISIT_TYPE['3TYPE'];
    default:
      visitName = VISIT_TYPE['1TYPE'];
  }

  return (
    <View style={styles.container}>
      <Text>{visitName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 20,
    backgroundColor: colors.blue300,
    height: '50%',
    borderRadius: 10,
  },
});
