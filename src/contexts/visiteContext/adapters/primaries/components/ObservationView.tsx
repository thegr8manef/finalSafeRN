import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as utils from '@utils/index';
import React, { useState } from 'react';
import {useTranslation} from 'react-i18next';
import {OPON} from '../components/ObservationPositiveON';
import {OPOFF} from '../components/ObservationPositiveOFF';
import {ONON} from '../components/ObservationNegativeON';
import {ONOFF} from '../components/ObservationNegativeOFF';

interface Props {
    btnPositive: boolean
    btnNegative: boolean
    setbtnPositive: (btnPositive: boolean) => void;
    setbtnNegative: (btnNegative: boolean) => void;
}
export const Observation = (props: Props) => {
  const {t} = useTranslation();
  const _onPressButtonPostiveON = () => {
    props.setbtnPositive(true);
    props.setbtnNegative(false);
  };

  const _onPressButtonNegativeON = () => {
    props.setbtnNegative(true);
    props.setbtnPositive(false);
  };
  const _onPressButtonPostiveOFF = () => {
    props.setbtnPositive(false);
    props.setbtnNegative(true);
  };

  const _onPressButtonNegativeOFF = () => {
    props.setbtnPositive(true);
    props.setbtnNegative(false);
  };
  return (
    <View style={styles.ContainerObservation}>
    {!props.btnPositive ? (
      <OPON onPressPositive={_onPressButtonPostiveON} />
    ) : (
      <OPOFF onPressPositiveOFF={_onPressButtonPostiveOFF} />
    )}
    <View style={styles.DividerObservation} />
    {!props.btnNegative ? (
      <ONON onPressNegative={_onPressButtonNegativeON} />
    ) : (
      <ONOFF onPressNegativeOFF={_onPressButtonNegativeOFF} />
    )}
  </View>
  );
};

const styles = StyleSheet.create({
    ContainerObservation: {
        height: 85,
        borderTopColor: utils.colors.primary,
        borderTopWidth: 3,
        backgroundColor: utils.colors.gris100,
        flexDirection: 'row',
        marginHorizontal: 25,
      },
      DividerObservation: {
        flex: 0.01,
        backgroundColor: utils.colors.gris200,
        marginVertical: 10,
      },
});
