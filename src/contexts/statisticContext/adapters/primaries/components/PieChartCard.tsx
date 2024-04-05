import {View, StyleSheet, Dimensions, Text, Alert} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-gifted-charts';
import colors from '@utils/colors';
import {windowHeight} from '@styles/dimension';
export interface PieChartData {
  name: string;
  total: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
}
interface Props {
  accessor: string;
  data: PieChartData[];
}

const width = Dimensions.get('window').width;
export const CardPieChart = (props: Props) => {
  let focusedData = props.data.sort((a, b) => b.total - a.total);
  focusedData[0] = {...focusedData[0], focused: true};

  const renderDot = (color: string) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const renderLegendComponent = (
    data: {
      total:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
    }[],
  ) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20,
            }}>
            {renderDot(data[0]?.color)}
            <Text style={{color: 'black', fontSize: 12}}>
              {data[0]?.name}: {data[0]?.total}%
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot(data[1]?.color)}
            <Text style={{color: 'black', fontSize: 12}}>
              {data[1]?.name}: {data[1]?.total}%
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20,
            }}>
            {renderDot(data[2]?.color)}
            <Text style={{color: 'black', fontSize: 12}}>
              {data[2]?.name}: {data[2]?.total}%
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot(data[3]?.color)}
            <Text style={{color: 'black', fontSize: 12}}>
              {data[3]?.name}: {data[3]?.total}%
            </Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          margin: 20,
          padding: 16,
          borderRadius: 2,
        }}>
        <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>
          {props.title}
        </Text>
        <View
          style={{
            height: windowHeight * 0.3,
            padding: 20,
            alignItems: 'center',
          }}>
          <PieChart
            data={focusedData}
            donut
            isAnimated
            sectionAutoFocus
            radius={90}
            innerRadius={70}
            edgesRadius={10}
            toggleFocusOnPress
            onPress={data => {
              Alert.alert(data?.name, data.value?.toString());
            }}
            inwardExtraLengthForFocused={3}
            extraRadiusForFocused={3}
            centerLabelComponent={() => {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>
                    {focusedData[0]?.total}%
                  </Text>
                  <Text style={{fontSize: 14, color: 'black'}}>
                    {focusedData[0]?.name}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        {renderLegendComponent(props.data)}
      </View>
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
