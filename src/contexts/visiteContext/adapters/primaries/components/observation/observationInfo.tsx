import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ObservationPositive } from './observationPositive'
import * as utils from '@utils/index';
import { ObservationNegative } from './observationNegative';
import { ObservationNegativeLevel } from './observationNegativeLevel';

interface Props {
    onSave: (levelId: number) => void
}
export const ObservationInfo = (props: Props) => {
    const [observation, setObservation] = useState<'positive' | 'negative' | undefined>(undefined)
    const [levelId, setLevelId] = useState<number>(0);
    const setPositiveObservation = () => {
        if (observation === 'positive')
            setObservation('negative')
        else {
            setObservation('positive')
            setLevelObservation(0)
        }
    }

    const setNegativeObservation = () => {
        if (observation === 'negative') {
            setObservation('positive')
            setLevelObservation(0)
        }
        else
            setObservation('negative')
    }
    const setLevelObservation = (levelId: number) => {
        setLevelId(levelId)
        props.onSave(levelId)
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ObservationPositive onPress={() => setPositiveObservation()} status={observation === 'positive'} />
                <View style={styles.divider} />
                <ObservationNegative onPress={() => setNegativeObservation()} status={observation === 'negative'} />
            </View>
            {observation === 'negative' ? <ObservationNegativeLevel setLevelId={setLevelObservation} levelId={levelId} /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        paddingBottom: 50
    },
    content: {
        height: 85,
        borderTopColor: utils.colors.primary,
        borderTopWidth: 3,
        backgroundColor: utils.colors.gris100,
        flexDirection: 'row',
        marginHorizontal: 25,
    },
    divider: {
        flex: 0.01,
        backgroundColor: utils.colors.gris200,
        marginVertical: 10,
    },
});
