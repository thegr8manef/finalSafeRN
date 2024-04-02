import React from 'react';
import { View } from 'react-native';
import { t } from 'i18next';
import { ObservationListItem } from './observationListItem';

interface Props {
    onClickObservation: () => void;
    onClickEssentialActions: () => void;
    onClickStrongPoints: () => void;
    onClickPointsToImprove: () => void;
    NumObservation: number;
    NumEssentialActions: number;
    NumStrongPoints: number;
    NumPointsToImprove: number;

}
export const ListObservationPrevention = (props: Props) => {
    return (
        <View>
            <ObservationListItem title={t('txt_action_incontournables')} listLenght={props.NumEssentialActions} onClick={props.onClickEssentialActions} />
            <ObservationListItem title={t('txt_Observations')} listLenght={props.NumObservation} onClick={props.onClickObservation} />
            <ObservationListItem title={t('txt.points.forts')} listLenght={props.NumStrongPoints} onClick={props.onClickStrongPoints} />
            <ObservationListItem title={t('txt.points.a.ameliorer')} listLenght={props.NumPointsToImprove} onClick={props.onClickPointsToImprove} />
        </View>
    );

};