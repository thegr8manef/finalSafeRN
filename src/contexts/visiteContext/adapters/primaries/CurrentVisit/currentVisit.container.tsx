import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as utils from '@utils/index';
import { Collapse } from './Components/CollapseView/collapse';
import { ObservationList } from './Components/ListObservation/observationList';
import { BottomFooter } from '../components/BottomFooter';
import { t } from 'i18next';
import { ObservationToBeLiftedModal } from './Components/ListObservation/observationToBeLiftedModal';
import { ObservationModal } from './Components/ListObservation/observationModal';
import { observations, observationsToBeLifted } from "@utils/utils";
import { useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigConfig/navigation.types';
import { AddNewObservationModal } from './Components/ListObservation/addNewObservationModal';

interface Props {
  navigation: StackNavigationProp<StackParamList>;

}
const content = [
  { type: "image", source: utils.images.icn_delete, onPress: () => { console.log('delete') } },
  { type: "image", source: utils.images.icn_edit, onPress: () => { console.log('edit') } },
];

export const CurrentVisitContainer = (props: Props) => {
  const [observationToBeLiftedVisible, setObservationToBeLiftedVisible] = useState(false);
  const [observationVisible, setObservationVisible] = useState(false);
  const [addNewObservationVisible, setAddNewObservationVisible] = useState(false);
  const [observation, setobservations] = useState<any[]>([]);
  const ObservationToBeLiftedTitle = t('txt.my.remarks') + ' ' + '(' + observationsToBeLifted.length.toString() + ')';
  const route = useRoute();
  const { comments, addAccompanying, date } = route.params; // Access the parameters
  return (
    <View style={styles.container}>
      <Collapse site={'test'} accompagnatsList={addAccompanying} date={date} comment={comments} />
      <ObservationList onClickObservation={() => setObservationVisible(true)} onClickObvLifted={() => setObservationToBeLiftedVisible(true)} NumObservation={observations.length} NumObservationTobeLifted={observationsToBeLifted.length} />
      <BottomFooter confirmPress={() => console.log('bottomButton')} confirmText={t('flash_alert_button')} content={content} />
      <ObservationToBeLiftedModal visible={observationToBeLiftedVisible} onClose={() => setObservationToBeLiftedVisible(false)} title={ObservationToBeLiftedTitle} observationToBeLifted={observationsToBeLifted} />
      <ObservationModal visible={observationVisible} onClose={() => setObservationVisible(false)} title={t('txt.title.ajout.observations')} observation={observations} setobservations={setobservations} filtedObservations={observation} AddNewObservationModal={() => setAddNewObservationVisible(true)} />
      <AddNewObservationModal visible={addNewObservationVisible} onClose={() => setAddNewObservationVisible(false)} title={t('txt.title.ajout.observations')} />
    </View>

  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

});