import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as utils from '@utils/index';
import { Collapse } from './Components/CollapseView/collapse';
import { ObservationList } from './Components/ListObservation/observationList';
import { BottomFooter } from '../components/BottomFooter';
import { t } from 'i18next';
import { ObservationToBeLiftedModal } from './Components/ListObservation/observationToBeLiftedModal';
import { ObservationModal } from './Components/ListObservation/observationModal';
interface Props {

}
const content = [
  { type: "image", source: utils.images.icn_delete, onPress: () => { console.log('delete') } },
  { type: "image", source: utils.images.icn_edit, onPress: () => { console.log('edit') } },
];

export const CurrentVisitContainer = (props: Props) => {
  const [observationToBeLiftedVisible, setObservationToBeLiftedVisible] = useState(false);
  const [observationVisible, setObservationVisible] = useState(false);


  return (
    <View style={styles.container}>
      <Collapse />
      <ObservationList onClickObservation={() => setObservationVisible(true)} onClickObvLifted={() => setObservationToBeLiftedVisible(true)} />
      <BottomFooter confirmPress={() => console.log('bottomButton')} confirmText={t('flash_alert_button')} content={content} />
      <ObservationToBeLiftedModal visible={observationToBeLiftedVisible} onClose={() => setObservationToBeLiftedVisible(false)} title={t('txt.my.remarks')} />
      <ObservationModal visible={observationVisible} onClose={() => setObservationVisible(false)} title={t('txt.title.ajout.observations')} />
    </View>

  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

});