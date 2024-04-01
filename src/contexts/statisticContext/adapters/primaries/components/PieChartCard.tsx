import { View, StyleSheet, Dimensions } from 'react-native';
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
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  
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
