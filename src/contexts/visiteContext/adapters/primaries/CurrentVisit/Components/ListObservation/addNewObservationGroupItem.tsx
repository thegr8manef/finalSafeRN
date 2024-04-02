import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as utils from '@utils/index';
import { t } from 'i18next';
import { AddNewObservationItem } from './addNewObservationItem';

interface Props {
  onCheckConform:() => void;
  onCheckNonConform:() => void;
  onCheckSO:() => void;
  is_clicked_conforme: boolean;
  is_clicked_non_conforme: boolean;
  is_clicked_sans_objet: boolean;
}
export const AddNewObservationGroupItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <AddNewObservationItem item_title={'Conform'} onCheckItem={props.onCheckConform} item_image={utils.images.icn_obs_conforme} is_clicked={props.is_clicked_conforme} />
      <AddNewObservationItem item_title={'Non-conform'} onCheckItem={props.onCheckNonConform} item_image={utils.images.icn_obs_non_conforme} is_clicked={props.is_clicked_non_conforme} />
      <AddNewObservationItem item_title={'Not applicable'} onCheckItem={props.onCheckSO} item_image={utils.images.icn_obs_sans_objet} is_clicked={props.is_clicked_sans_objet} />
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    height:250,
    flexDirection: 'column',
    borderBottomColor: utils.colors.gris100,
    borderTopColor: utils.colors.gris200,
    borderTopWidth:1,
    borderBottomWidth:1,

  },

});