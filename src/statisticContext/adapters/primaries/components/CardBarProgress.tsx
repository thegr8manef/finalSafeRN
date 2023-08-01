import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import colors from '../../../../assets/colors';

interface Props {
  textLabels: string;
  textHint1: string;
  textHint2: string;
  textHint3: string;
  textHint4: string;
  valueHint1: number | undefined;
  valueHint2: number | undefined;
  valueHint3: number | undefined;
  valueHint4: number | undefined;
}
const widthPregress = Dimensions.get('window').width / 1.1;
export const CardBarProgress = (props: Props) => {
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.Container}>
        <Text testID='Label' style={styles.textLabel}>{props.textLabels}</Text>
      </View>
      <View style={styles.ContainerStat}>
        <View style={{ flex: 1 }}>
          <Text>{props.textHint1}</Text>
          <Progress.Bar
            testID='Progress.Bar_1'
            progress={props.valueHint1}
            width={widthPregress}
            borderWidth={0}
            unfilledColor={'#E8E8E8'}
            animated={true}
            animationType={'decay'}
            color={colors.red200}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text>{props.textHint2}</Text>
          <Progress.Bar
            testID='Progress.Bar_2'
            progress={props.valueHint2}
            width={widthPregress}
            borderWidth={0}
            unfilledColor={'#E8E8E8'}
            animated={true}
            animationType={'decay'}
            color={colors.blue200}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text>{props.textHint3}</Text>
          <Progress.Bar
            testID='Progress.Bar_3'
            progress={props.valueHint3}
            width={widthPregress}
            borderWidth={0}
            unfilledColor={'#E8E8E8'}
            animated={true}
            animationType={'decay'}
            color={colors.orange}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text>{props.textHint4}</Text>
          <Progress.Bar
            testID='Progress.Bar_4'
            progress={props.valueHint4}
            width={widthPregress}
            borderWidth={0}
            unfilledColor={'#E8E8E8'}
            animated={true}
            animationType={'decay'}
            color={colors.gray700}
          />
        </View>
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
  },
  textLabel: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 14,
    marginStart: 5,
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
