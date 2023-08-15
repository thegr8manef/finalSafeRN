import {View, Text, StyleSheet, Pressable} from 'react-native';
import * as utils from '@utils/index';
import React from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
  title: string;
  onRightPress?: ()=> void;
  onLeftPress:()=>void;
  leftLabel: string
  rightLabel?: string
}
export const HeaderModal = (props: Props) => {
  const {t} = useTranslation();
  return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Pressable
            onPress={props.onLeftPress}
            android_ripple={styles.androidRipple}>
            <Text style={styles.text}>{props.leftLabel}</Text>
          </Pressable>
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.right}>
          {props.rightLabel ? <Pressable
            onPress={props.onRightPress}
            android_ripple={styles.androidRipple}>
            <Text style={styles.textRight}>{props.rightLabel}</Text>
          </Pressable>
          : <View/>}
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  androidRipple:{
    color: utils.colors.gris300
  },
  container: {
    height: 50,
    backgroundColor: utils.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: 'black',
    marginStart: 5,
  },
  textRight: {
    fontSize: 14,
    color: 'black',
    marginEnd: 5,
    textAlign: 'right',
  },
  right: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 4,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
