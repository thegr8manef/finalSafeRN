import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

interface Props {
  children_info1: string;
  children_info2: string;
}
export const InfoContainer = (props: Props) => {
  return (
    <View style={styles.container_info}>
      <View style={styles.container_text_info}>
        <Text style={styles.text_title_info}>{props.children_info1}</Text>
      </View>
      <View style={styles.container_text_info}>
        <Text style={styles.text_info_info}>{props.children_info2}</Text>
      </View>
    </View>
  );
};

export default InfoContainer;

const styles = StyleSheet.create({
  container_info: {
    width: '100%',
    height: '100%',
  },
  container_text_info: {
    marginStart: 20,
    marginTop: 20,
  },
  text_info_info: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  text_title_info: {
    color: 'grey',
    fontSize: 13,
  },
});
