import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

interface Props {
  textLabels: string;
  textHint1: string;
  textHint2: string;
  textHint3: string;
  textHint4: string;
  valeurPrevention: number;
  valeurConformite: number;
  valeurHierarchique: number;
  valeurFlash: number;
}

const widthPregress = Dimensions.get('window').width / 1.1;
console.log(Dimensions.get('window').width);
console.log(Dimensions.get('window').height);
export const CardBarProgressVisites = (props: Props) => {
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.Container}>
        <Text style={styles.textLabel}>{props.textLabels}</Text>
      </View>
      <View style={styles.ContainerStat}>
        <View style={{flex: 1}}>
          <Text>{props.textHint1}</Text>
          <Progress.Bar
            progress={props.valeurPrevention}
            width={widthPregress}
            borderWidth={0}
            animated={true}
            animationType={'decay'}
            color={'yellow'}
            height={12}
            borderRadius={0}

          />
        </View>
        <View style={{flex: 1}}>
          <Text>{props.textHint2}</Text>
          <Progress.Bar
            progress={props.valeurConformite}
            width={widthPregress}
            borderWidth={0}
            animated={true}
            animationType={'decay'}
            color={'green'}
            height={12}
            borderRadius={0}
          />
        </View>
        <View style={{flex: 1}}>
          <Text>{props.textHint3}</Text>
          <Progress.Bar
            progress={props.valeurHierarchique}
            width={widthPregress}
            borderWidth={0}
            animated={true}
            animationType={'decay'}
            color={'blue'}
            height={12}
            borderRadius={0}
          />
        </View>
        <View style={{flex: 1}}>
          <Text>{props.textHint4}</Text>
          <Progress.Bar
            progress={props.valeurFlash}
            width={widthPregress}
            borderWidth={0}
            animated={true}
            animationType={'decay'}
            color={'red'}
            height={12}
            borderRadius={0}
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
