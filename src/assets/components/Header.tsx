import {View, Text, StyleSheet} from 'react-native';
import colors from '../colors';
import React from 'react'
interface Props {
  label_title: string;
}
export const Header = (props: Props): JSX.Element => {
  return (
    <View style={styles.rectangle}>
      <Text style={styles.textCentre}>{props.label_title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: colors.primary,
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
