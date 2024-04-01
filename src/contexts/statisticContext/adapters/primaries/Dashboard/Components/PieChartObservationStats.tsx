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

  const total =
    totalConforme + totalPositive + totalNonConforme + totalAmeliorer;
  const data: PieChartData[] = [
    {
      name: t('txt.conformes'),
      total: Number(((totalConforme * 100) / total).toFixed(0)),
      color: utils.colors.green,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: t('txt.positives'),
      total: Number(((totalPositive * 100) / total).toFixed(0)),
      color: utils.colors.green200,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
      percent: (totalPositive * 100) / total,
    },
    {
      name: t('txt.non.conformes'),
      total: Number(((totalNonConforme * 100) / total).toFixed(0)),
      color: utils.colors.red,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
      percent: (totalNonConforme * 100) / total,
    },
    {
      name: t('txt.a.ameliorer'),
      total: Number(((totalAmeliorer * 100) / total).toFixed(0)),
      color: utils.colors.red200,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
      percent: (totalAmeliorer * 100) / total,
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
    height: 200,
    width: '96%',
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 5,
    alignSelf: 'center',
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
