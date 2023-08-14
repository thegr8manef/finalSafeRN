import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import colors from '../../../../../assets/colors';
import { ProgressBarCard } from '../../components/ProgressBarCard';
import { StatRisk } from '../../../../domain/entity/statRisk';
import { useTranslation } from 'react-i18next'

interface Props {
    title: string;
    statsRisk: StatRisk
}

export const ProgressRisksStats = (props: Props) => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label}>{props.title}</Text>
            </View>
            <View style={styles.content}>
                <ProgressBarCard label={'1-Vie du chantier'} value={props.statsRisk.risk0.value ? props.statsRisk.risk0.value * 0.01 : 0} color={colors.yellow} />

                <ProgressBarCard label={'2-' + t('txt.risks')} value={props.statsRisk.risk1.value ? props.statsRisk.risk1.value * 0.01 : 0} color={colors.green} />

                <ProgressBarCard label={'3-CHUTE DE HAUTEUR'} value={props.statsRisk.risk2.value ? props.statsRisk.risk2.value * 0.01 : 0} color={colors.blue} />

                <ProgressBarCard label={t('txt.others')} value={props.statsRisk.risk3.value ? props.statsRisk.risk3.value * 0.01 : 0} color={colors.red} />

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        overflow: 'hidden',
        height: 200,
        width: '96%',
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
        marginTop: 5,
        marginStart: 5,
    },
    label: {
        textAlign: 'left',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 14,
    },
    content: {
        flex: 5,
        marginStart: 5,
    },
});
