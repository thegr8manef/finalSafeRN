import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {
  label_title: string;
  label_subtitle: string;
}
export const InfoContainer = (props: Props): JSX.Element => {
  return (
    <View style={styles.container_info}>
      <View style={styles.container_text_info}>
        <Text style={styles.text_title_info}>{props.label_title}</Text>
      </View>
      <View style={styles.container_text_info}>
        <Text style={styles.text_info_info}>{props.label_subtitle}</Text>
      </View>
    </View>
  );
};


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
