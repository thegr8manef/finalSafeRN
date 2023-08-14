import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../../../../assets/colors';
import { ProgressBarCard } from '../../components/ProgressBarCard';
import { StatVisit } from '../../../../domain/entity/statVisit';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  statsVisit: StatVisit
}
export const ProgressVisitsStats = (props: Props) => {
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label} testID='Title'>{props.title}</Text>
      </View>
      <View style={styles.content}>
        <ProgressBarCard label={t('txt.prevention')} value={props.statsVisit.visitPrevention * 0.01} color={colors.yellow} />

        <ProgressBarCard label={t('txt.conformité')} value={props.statsVisit.visitConformity * 0.01} color={colors.green} />

        <ProgressBarCard label={t('txt.hierarchique')} value={props.statsVisit.visitHierarchical * 0.01} color={colors.blue} />

        <ProgressBarCard label={t('txt.flash')} value={props.statsVisit.visitFlash * 0.01} color={colors.red} />

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
