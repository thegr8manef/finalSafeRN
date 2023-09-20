import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as utils from '@utils/index';
import { t } from 'i18next';
import { AddNewObservationItem } from './addNewObservationItem';

interface Props {
  onCheckItem:() => void;
  is_clicked: boolean;
}
export const AddNewObservationGroupItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <AddNewObservationItem item_title={'Conform'} onCheckItem={props.onCheckItem} item_image={utils.images.icn_obs_conforme} is_clicked={props.is_clicked} />
      <AddNewObservationItem item_title={'Non-onform'} onCheckItem={props.onCheckItem} item_image={utils.images.icn_obs_non_conforme} is_clicked={props.is_clicked} />
      <AddNewObservationItem item_title={'Not applicable'} onCheckItem={props.onCheckItem} item_image={utils.images.icn_obs_sans_objet} is_clicked={props.is_clicked} />
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