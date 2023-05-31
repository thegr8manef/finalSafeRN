import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import { t } from "i18next";

interface Props {
  textLabels: string;
  accessor: string;
  PieChartConformeTotal: number;
  PieChartPositivesTotal: number;
  PieChartNonConformeTotal: number;
  PieChartAmeliorerTotal: number;
}


const width = Dimensions.get('window').width;
export const CardPieChart = (props: Props) => {
  const data = [
    {
      name: t('txt.conformes'),
      total: props.PieChartConformeTotal,
      color: '#008000',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: t('txt.positives'),
      total: props.PieChartPositivesTotal,
      color: '#66b266',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: t('txt.non.conformes'),
      total: props.PieChartNonConformeTotal,
      color: '#FF0000',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: t('txt.a.ameliorer'),
      total: props.PieChartAmeliorerTotal,
      color: '#ff7f7f',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.Container}>
        <Text style={styles.textLabel}>{props.textLabels}</Text>
      </View>
      <View style={styles.ContainerStat}>
        <PieChart
          data={data}
          width={width}
          height={150}
          chartConfig={{
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          accessor={props.accessor}
          backgroundColor={'transparent'}
          absolute
          paddingLeft={'1'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  OuterContainer: {
    flex: 1,
    margin: 10,
    overflow: 'hidden',
    height: 200,
    width: '96%',
    backgroundColor: 'white',
  },
  Container: {
    flex: 1,
    marginTop: 5,
    marginStart: 5,
  },
  textLabel: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 14,
  },
  ContainerStat: {
    flex: 5,
    marginStart: 5,
  },
  textHint: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 10,
  },
});
