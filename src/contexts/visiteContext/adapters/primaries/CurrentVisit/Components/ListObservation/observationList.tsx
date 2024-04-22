import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as utils from '@utils/index';
import {t} from 'i18next';
import {ObservationListItem} from './observationListItem';
import {ListObservationHierarchical} from './ListObservationHierarchical';
import {ListObservationConformity} from './ListObservationConformity';
import {ListObservationPrevention} from './ListObservationPrevention';

interface Props {
  onClickObservation: () => void;
  onClickObvLifted: () => void;
  onClickEssentialActions: () => void;
  onClickStrongPoints: () => void;
  onClickPointsToImprove: () => void;
  NumObservation: number;
  NumObservationTobeLifted: number;
  NumEssentialActions: number;
  NumStrongPoints: number;
  NumPointsToImprove: number;
  type: Number;
}
export const ObservationList = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.type === 3 ? (
        <ListObservationHierarchical
          onClickObservation={props.onClickObservation}
          onClickObvLifted={props.onClickObvLifted}
          NumObservation={props.NumObservation}
          NumObservationTobeLifted={props.NumObservationTobeLifted}
        />
      ) : props.type === 1 ? (
        <ListObservationConformity
          onClickObservation={props.onClickObservation}
          onClickObvLifted={props.onClickObvLifted}
          onClickEssentialActions={props.onClickEssentialActions}
          NumObservation={props.NumObservation}
          NumObservationTobeLifted={props.NumObservationTobeLifted}
          NumEssentialActions={props.NumEssentialActions}
        />
      ) : (
        <ListObservationPrevention
          onClickObservation={props.onClickObservation}
          onClickEssentialActions={props.onClickEssentialActions}
          onClickStrongPoints={props.onClickStrongPoints}
          onClickPointsToImprove={props.onClickPointsToImprove}
          NumObservation={props.NumObservation}
          NumEssentialActions={props.NumEssentialActions}
          NumStrongPoints={props.NumStrongPoints}
          NumPointsToImprove={props.NumPointsToImprove}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    marginTop: 25,
  },
});
