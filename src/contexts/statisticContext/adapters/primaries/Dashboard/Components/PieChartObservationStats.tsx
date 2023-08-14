import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StatObservation} from '../../../../domain/entity/statObservation';
import {useTranslation} from 'react-i18next';
import {CardPieChart, PieChartData} from '../../components/PieChartCard';
import * as utils from '@utils/index';

interface Props {
  observationStats: StatObservation | undefined;
  title: string;
  accessor: string;
}
export const PieChartObservationStats = (props: Props): JSX.Element => {
  const {t} = useTranslation();

  const totalAmeliorer = !props.observationStats?.observationAmeliorer
    ? 0
    : props.observationStats.observationAmeliorer;
  const totalConforme = !props.observationStats?.observationConforme
    ? 0
    : props.observationStats.observationConforme;
  const totalNonConforme = !props.observationStats?.observationNomConforme
    ? 0
    : props.observationStats.observationNomConforme;
  const totalPositive = !props.observationStats?.observationPositive
    ? 0
    : props.observationStats.observationPositive;
  const data: PieChartData[] = [
    {
      name: t('txt.conformes'),
      total: totalConforme,
      color: utils.colors.green,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: t('txt.positives'),
      total: totalPositive,
      color: utils.colors.green200,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: t('txt.non.conformes'),
      total: totalNonConforme,
      color: utils.colors.red,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: t('txt.a.ameliorer'),
      total: totalAmeliorer,
      color: utils.colors.red200,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} testID="Label">
          {props.title}
        </Text>
      </View>
      {props.observationStats !== undefined ? (
        <CardPieChart data={data} accessor={props.accessor} />
      ) : (
        <View style={styles.contentUndefined}>
          <Text style={styles.textNoData}>{t('txt.no.data')}</Text>
        </View>
      )}
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
    marginTop: 5,
    marginStart: 5,
  },
  title: {
    textAlign: 'left',
    fontWeight: '700',
    color: 'black',
    fontSize: 12,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  contentUndefined: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textNoData: {
    color: utils.colors.gray700,
  },
});
