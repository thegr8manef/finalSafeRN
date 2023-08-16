import React from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as utils from '@utils/index';

interface Props {
    status: boolean
    onPress: () => void
}
export const ObservationPositive = (props: Props) =>{
    const {t} = useTranslation();
    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.container}>
        <View style={styles.imageContent}>
          <Image
            source={utils.images.PositDisabledIcon}
            style={props.status ? styles.activeLogo: styles.inactiveLogo}
          />
        </View>
        <View style={styles.description}>
          <Text style={props.status ? styles.aciveText : styles.inactiveText}>{t('observation_positive')}</Text>
        </View>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    imageContent: {
      flex: 2
    },
    description: {
      flex: 1
    },
    aciveText: {
      color: utils.colors.textColor,
      textAlign: 'center',
      fontWeight: '500',
    },
    inactiveText:{
        color: utils.colors.gris300,
        textAlign: 'center',
    },
    activeLogo: {
      height: '40%',
      resizeMode: 'contain',
      marginTop: '10%',
      alignSelf: 'center',
      tintColor: utils.colors.green,
    },
    inactiveLogo:{
        height: '40%',
        resizeMode: 'contain',
        marginTop: '10%',
        alignSelf: 'center',
        tintColor: utils.colors.gris200,
    },
    container: {flex: 1, backgroundColor: utils.colors.griy500},
  });
  