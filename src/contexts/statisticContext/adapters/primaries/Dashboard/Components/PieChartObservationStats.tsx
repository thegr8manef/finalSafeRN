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
      gradientCenterColor: '#006DFF',
      value: totalConforme,
    },
    {
      name: t('txt.positives'),
      total: Number(((totalPositive * 100) / total).toFixed(0)),
      color: utils.colors.green200,
      gradientCenterColor: '#3BE9DE',
      value: totalPositive,
    },
    {
      name: t('txt.non.conformes'),
      total: Number(((totalNonConforme * 100) / total).toFixed(0)),
      color: utils.colors.red,
      gradientCenterColor: '#8F80F3',
      value: totalNonConforme,
    },
    {
      name: t('txt.a.ameliorer'),
      total: Number(((totalAmeliorer * 100) / total).toFixed(0)),
      color: utils.colors.red200,
      gradientCenterColor: '#FF7F97',
      value: totalAmeliorer,
    },
  ];

  return (
      <CardPieChart
        title={props?.title}
        data={data}
        accessor={props.accessor}
      />
  );
};
