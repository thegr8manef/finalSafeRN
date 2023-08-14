import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import * as utils from '../../../../utils';

interface Props {
  label_title: string;
}
export const SimpleHeader = (props: Props): JSX.Element => {
  return (
    <View style={styles.rectangle}>
      <Text style={styles.textCentre}>{props.label_title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: utils.colors.primary,
    height: 50,
    alignItems: 'center',
    marginStart: 50,
  },
  textCentre: {
    fontSize: 19,
    paddingTop: 10,
    paddingLeft: 50,
    fontWeight: 'bold',
    color: 'black',
  },
});
