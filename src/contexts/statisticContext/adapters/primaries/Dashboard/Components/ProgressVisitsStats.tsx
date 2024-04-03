import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import {StatVisit} from '../../../../domain/entity/statVisit';
import {useTranslation} from 'react-i18next';
import {windowHeight, windowWidth} from '@styles/dimension';
import {BarChart, barDataItem} from 'react-native-gifted-charts';

interface Props {
  title: string;
  statsVisit: StatVisit | undefined;
}
export const ProgressVisitsStats = (props: Props) => {
  const {t} = useTranslation();

  let arr = [
    props.statsVisit?.visitFlash,
    props.statsVisit?.visitPrevention,
    props.statsVisit?.visitConformity,
    props.statsVisit?.visitHierarchical,
  ];
  // get max value list
  let total = Math.max(...arr);

  const barData: barDataItem[]  = [
    {
      value: props.statsVisit?.visitPrevention || 0,
      label: t('txt.prevention'),
      frontColor: utils.colors.primary,
      sideColor: utils.colors.statusBar,
    },

    {
      value: props.statsVisit?.visitConformity || 0,
      label: t('txt.conformité'),
      frontColor: utils.colors.green,
      sideColor: utils.colors.green200,
      
    },
    {
      value: props.statsVisit?.visitHierarchical || 0,
      label: t('txt.hierarchique'),
      frontColor: '#4ADDBA',
      sideColor: '#399D9A',
    },
    {
      value: props.statsVisit?.visitFlash || 0,
      label: t('txt.flash'),
      frontColor: utils.colors.red,
      sideColor: utils.colors.red200,
    },
  ];

  const mockData = [
    {
      value: 10,
      label: t('txt.prevention'),
      frontColor: utils.colors.primary,
    },

    {
      value: 10,
      label: t('txt.conformité'),
      frontColor: utils.colors.green,
    },
    {
      value: 10,
      label: t('txt.hierarchique'),
      frontColor: '#4ADDBA',
    },
    {
      value: 10,
      label: t('txt.flash'),
      frontColor: utils.colors.red,
    },
  ];
  return (
    <View
      style={{
        ...styles.container,
        width: windowWidth,
        height: windowHeight * 0.35,
      }}>
      <View style={styles.header}>
        <Text style={styles.label} testID="Title">
          {' ' + props.title}
        </Text>
      </View>
      {total ? (
        <BarChart
          width={windowWidth * 0.9}
          showYAxisIndices
          maxValue={total + 100}
          data={barData}
          isAnimated
          isThreeD
          barWidth={20}
          activeOpacity={0.2}
          showVerticalLines
          showValuesAsTopLabel
          showXAxisIndices
          xAxisLabelTextStyle={{fontSize: 12, color: utils.colors.black}}
          xAxisTextNumberOfLines={2}
          spacing={50}
          topLabelTextStyle={{
            color: utils.colors.black,
            fontSize: 12,
            fontFamily: utils.fonts.AvenirHeavy,
          }}
          yAxisTextStyle={{
            fontSize: 10,
          }}
        />
      ) : (
        <BarChart
          width={windowWidth * 0.9}
          showYAxisIndices
          maxValue={100}
          data={mockData}
          isAnimated
          isThreeD
          activeOpacity={0.2}
          showVerticalLines
          showValuesAsTopLabel
          showXAxisIndices
          xAxisLabelTextStyle={{fontSize: 12, color: utils.colors.black}}
          xAxisIndicesWidth={10}
          xAxisTextNumberOfLines={2}
          spacing={40}
          topLabelTextStyle={{
            color: utils.colors.black,
            fontSize: 12,
            fontFamily: utils.fonts.AvenirHeavy,
          }}
          yAxisTextStyle={{
            fontSize: 10,
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'white',
    padding: 5,
  },
  header: {
    height: 30,
    marginVertical: 10,
  },
  label: {
    color: 'black',
    fontSize: 13,
    fontFamily: utils.fonts.AvenirHeavy,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginStart: 5,
    marginTop: -30,
  },
  contentUndefined: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textNoData: {
    color: utils.colors.gray700,
  },
  item: {marginTop: 10},
});
