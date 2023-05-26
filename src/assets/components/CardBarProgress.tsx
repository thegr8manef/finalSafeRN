import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

interface Props {
  textLabels: string;
  textHint1: string;
  textHint2: string;
  textHint3: string;
  textHint4: string;
}
const widthPregress = Dimensions.get('window').width / 1.1;
console.log(Dimensions.get('window').width);
console.log(Dimensions.get('window').height);
export const CardBarProgress = (props: Props) => {
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.Container}>
        <Text style={styles.textLabel}>{props.textLabels}</Text>
      </View>
      <View style={styles.ContainerStat}>
        <View style={{flex: 1}}>
          <Text>{props.textHint1}</Text>
          <Progress.Bar
            progress={0.4135}
            width={widthPregress}
            borderWidth={0}
            unfilledColor={'#E8E8E8'}
            animated={true}
            animationType={'decay'}
            color={'#f356b5'}
          />
        </View>
        <View style={{flex: 1}}>
          <Text>{props.textHint2}</Text>
          <Progress.Bar
            progress={0.2889}
            width={widthPregress}
            borderWidth={0}
            unfilledColor={'#E8E8E8'}
            animated={true}
            animationType={'decay'}
            color={'#b459ec'}
          />
        </View>
        <View style={{flex: 1}}>
          <Text>{props.textHint3}</Text>
          <Progress.Bar
            progress={0.2411}
            width={widthPregress}
            borderWidth={0}
            unfilledColor={'#E8E8E8'}
            animated={true}
            animationType={'decay'}
            color={'#e37718'}
          />
        </View>
        <View style={{flex: 1}}>
          <Text>{props.textHint4}</Text>
          <Progress.Bar
            progress={0.0565}
            width={widthPregress}
            borderWidth={0}
            unfilledColor={'#E8E8E8'}
            animated={true}
            animationType={'decay'}
            color={'grey'}
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
