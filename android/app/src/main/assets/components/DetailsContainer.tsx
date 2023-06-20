import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

interface Props {
  children: string;
  children_email: string;
}
export const DetailsContainer = (props: Props) => {
  return (
    <View style={styles.container_details}>
      <View style={styles.container_text}>
        <Text style={styles.text_full_name}>{props.children}</Text>
      </View>
      <View style={styles.container_text}>
        <Text style={styles.text_email}>{props.children_email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_details: {
    flex: 1,
    width: '100%',
  },
  container_text: {
    flex: 1,
    marginTop: 20,
    marginStart: 20,
    alignSelf: 'flex-start',
  },
  text_full_name: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  text_email: {
    color: 'grey',
    fontSize: 12,
  },
});
