import React from 'react';
import { View } from 'react-native';
import { t } from 'i18next';
import { ObservationListItem } from './observationListItem';

interface Props {
    onClickObservation: () => void;
    onClickObvLifted: () => void;
    onClickEssentialActions: () => void;
    NumObservation: number;
    NumObservationTobeLifted: number;
    NumEssentialActions: number;

}
export const ListObservationConformity = (props: Props) => {
    return (
        <View>
            <ObservationListItem title={t('txt_action_incontournables')} listLenght={props.NumEssentialActions} onClick={props.onClickEssentialActions} />
            <ObservationListItem title={t('txt_Observations')} listLenght={props.NumObservation} onClick={props.onClickObservation} />
            <ObservationListItem title={t('txt.my.remarks')} listLenght={props.NumObservationTobeLifted} onClick={props.onClickObvLifted} />
        </View>
    );

};