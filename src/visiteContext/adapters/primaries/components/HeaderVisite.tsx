import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import colors from '../../../../assets/colors';
import React from 'react';
import {t} from 'i18next';

interface Props {
  children: string;
}
export const HeaderVisite = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rectangle}>
        <View style={{flex: 0.5}}>
          <Image
            source={require('../../../../assets/img/sidenav.png')}
            style={styles.logoImage1}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text style={styles.textCentre}>{props.children}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCentre: {
    textAlign: 'left',
    marginStart: '-10%',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  logoImage1: {
    margin: '15%',
    width: '20%',
    height: '40%',
    resizeMode: 'stretch',
  },
  container: {
    flex: 0.5,
  }
});
