import React from 'react';
import { View } from 'react-native';
import { t } from 'i18next';
import { ObservationListItem } from './observationListItem';

interface Props {
    onClickObservation: () => void;
    onClickObvLifted: () => void;
    NumObservation: number;
    NumObservationTobeLifted: number;

}
export const ListObservationHierarchical = (props: Props) => {
    return (
        <View>
            <ObservationListItem title={t('txt_Observations')} listLenght={props.NumObservation} onClick={props.onClickObservation} />
            <ObservationListItem title={t('txt.my.remarks')} listLenght={props.NumObservationTobeLifted} onClick={props.onClickObvLifted} />
        </View>
    );

};