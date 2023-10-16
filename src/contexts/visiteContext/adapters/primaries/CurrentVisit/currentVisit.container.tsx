import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import * as utils from '@utils/index';
import { Collapse } from './Components/CollapseView/collapse';
import { ObservationList } from './Components/ListObservation/observationList';
import { BottomFooter } from '../components/BottomFooter';
import { t } from 'i18next';
import { ObservationToBeLiftedModal } from './Components/ListObservation/observationToBeLiftedModal';
import { ObservationModal } from './Components/ListObservation/observationModal';
import { generateID, observations, observationsToBeLifted } from "@utils/utils";
import { useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigConfig/navigation.types';
import { AddNewObservationModal } from './Components/ListObservation/addNewObservationModal';
import { StrongPointsModal } from './Components/ListObservation/StrongpointsModal';
import { PointsToImproveModal } from './Components/ListObservation/PointsToImproveModal';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { Accompagnants } from '@contexts/visiteContext/domain/entity/Accompagnant';
import { VisitObservation } from '@contexts/visiteContext/domain/entity/VisitsObservation';
import { Photo } from '@contexts/visiteContext/domain/entity/Photo';

interface Props {
  navigation: StackNavigationProp<StackParamList>;
  saveVisit: (data: Visit) => void;
}


export const CurrentVisitContainer = (props: Props) => {
  const [observationToBeLiftedVisible, setObservationToBeLiftedVisible] = useState(false);
  const [strongPointsVisible, setStrongPointsVisible] = useState(false);
  const [pointsToImproveVisible, setPointsToImproveVisible] = useState(false);
  const [observationVisible, setObservationVisible] = useState(false);
  const [addNewObservationVisible, setAddNewObservationVisible] = useState(false);
  const [observation, setobservations] = useState<any[]>([]);
  const [observationTitle, setobservationTitle] = useState<string>('');
  //Observation attributes
  const [titleComment, setTitleComment] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [images, setImages] = useState<Photo[]>([]);
  const [responseId, setResponseId] = useState<Number>(4);

  let observationList: VisitObservation[] = [];
  const ObservationToBeLiftedTitle = t('txt.my.remarks') + ' ' + '(' + observationsToBeLifted.length.toString() + ')';
  const StrongpointsTitle = t('txt.points.forts') + ' ' + '(0)';
  const PointsToImproveTitle = t('txt.points.a.ameliorer') + ' ' + '(0)';
  const editCurrentVisit = () => {
    //props.navigation.navigate('HierarchicalVisit');
    props.navigation.goBack();
  }
  const content = [
    { type: "image", source: utils.images.icn_delete, onPress: () => { DeleteVisit() } },
    { type: "image", source: utils.images.icn_edit, onPress: () => editCurrentVisit() },
  ];
  const route = useRoute();
  const { comments, addAccompanying, date, selectedSiteName, type, Accompagant, selectedSite, selectedSiteRef } = route.params; // Access the parameters

  if (titleComment.length > 0 && observationTitle.length === 0) {
    observationList = [new VisitObservation(generateID(), "manef123456", "manef123456", selectedSite?.id, images, responseId, 0, generateID(), comment, date, titleComment, true, "manef123456")];
  } else {
    observationList = [new VisitObservation(generateID(), "manef123456", "manef123456", selectedSite?.id, images, responseId, 0, generateID(), comment, date, observationTitle, true, "manef123456")];
  }
  const visit = new Visit('', date, '', '', 12345789, selectedSite, selectedSiteRef, comments, undefined, observationList, Accompagant, 0, undefined, undefined, 0, '', '', type);
  
  const verification = (): boolean => {
    if (responseId === 4) {
      Alert.alert('', t('msg.cant.cloture.viste')!);
      return false
    } else {
      if (observationTitle.length === 0 && titleComment.length === 0) {
        Alert.alert('', t('msg.saisr.commentaires.flash')!);
        return false
      } else {
        if (comment.length === 0) {
          Alert.alert('', t('msg.saisr.commentaires.flash')!);
          return false
        } else {
          return true
        }
      }
    }
  }
  const saveVisit = () => {
    Alert.alert('', t('etes_vous_sur_de_vouloir_sauvegarder')!, [
      {
        text: 'NON',
        style: 'cancel',
      },
      {
        text: 'OUI',
        onPress: () => {
          if (verification()) {
            props.saveVisit(visit);
            props.navigation.navigate('visites');
          }
        }
      },
    ]);
  }
  const DeleteVisit = () => {
    Alert.alert('', t('msg.are.you.sure.to.delete.visite')!, [
      {
        text: 'CANCEL',
        style: 'cancel',
      },
      {
        text: 'DELETE',
        onPress: () => {
          //visit deleted
          props.navigation.navigate('visites');
      }
    },
    ]);
  }
  return (
    <View style={styles.container}>
      <Collapse site={selectedSiteName} accompagnatsList={addAccompanying} date={date} comment={comments} type={type} />
      <ObservationList onClickObservation={() => setObservationVisible(true)} onClickObvLifted={() => setObservationToBeLiftedVisible(true)} NumObservation={observations.length} NumObservationTobeLifted={observationsToBeLifted.length} type={type} onClickEssentialActions={() => setObservationVisible(true)} NumEssentialActions={observations.length} onClickStrongPoints={() => setStrongPointsVisible(true)} onClickPointsToImprove={() => setPointsToImproveVisible(true)} NumStrongPoints={0} NumPointsToImprove={0} />
      <BottomFooter confirmPress={() => saveVisit()} confirmText={t('flash_alert_button')} content={content} />
      <ObservationToBeLiftedModal visible={observationToBeLiftedVisible} onClose={() => setObservationToBeLiftedVisible(false)} title={ObservationToBeLiftedTitle} observationToBeLifted={observationsToBeLifted} />
      <ObservationModal visible={observationVisible} onClose={() => setObservationVisible(false)} title={t('txt.title.ajout.observations')} observation={observations} setobservations={setobservations} filtedObservations={observation} AddNewObservationModal={() => setAddNewObservationVisible(true)} setObservationTitle={setobservationTitle} />
      <AddNewObservationModal visible={addNewObservationVisible} onClose={() => setAddNewObservationVisible(false)} title={t('txt.title.ajout.observations')} observationTitle={observationTitle.toString()} titleComment={titleComment} setTitleComment={setTitleComment} comment={comment} setComment={setComment} images={images} setImages={setImages} responseId={responseId} setResponseId={setResponseId} idRemarque={generateID()} idVisits={visit.id} />
      <StrongPointsModal visible={strongPointsVisible} onClose={() => setStrongPointsVisible(false)} title={StrongpointsTitle} StrongPointsList={[]} AddNewStrongPointsModal={() => console.log('Add New Strong Points Modal')} />
      <PointsToImproveModal visible={pointsToImproveVisible} onClose={() => setPointsToImproveVisible(false)} title={PointsToImproveTitle} StrongPointsList={[]} AddNewPointsToImproveModal={() => console.log('Add New Points To Be Improve Modal')} />
    </View>

  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

});