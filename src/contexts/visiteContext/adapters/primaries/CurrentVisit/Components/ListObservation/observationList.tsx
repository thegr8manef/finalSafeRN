import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as utils from '@utils/index';
import { t } from 'i18next';
import { ObservationListItem } from './observationListItem';

interface Props {
  onClickObservation: () => void;
  onClickObvLifted: () => void;

}
export const ObservationList = (props: Props) => {
  return (
    <View style={styles.container}>
      <ObservationListItem title={t('txt_Observations')} listLenght={0} onClick={props.onClickObservation} />
      <ObservationListItem title={t('txt.my.remarks')} listLenght={16} onClick={props.onClickObvLifted} />
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap'

  },

});