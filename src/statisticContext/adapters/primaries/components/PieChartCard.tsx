import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-chart-kit';
export interface PieChartData {
  name: string
  total: number
  color: string
  legendFontColor: string
  legendFontSize: number
}
interface Props {
  accessor: string;
  data: PieChartData[]
}

const width = Dimensions.get('window').width;
export const CardPieChart = (props: Props) => {

  return (
    <View style={styles.ContainerStat}>
      <PieChart
        data={props.data}
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
  );
};
const styles = StyleSheet.create({
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
