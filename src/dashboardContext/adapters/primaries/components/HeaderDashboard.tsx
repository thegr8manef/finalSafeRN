import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import colors from '../../../../assets/colors';
import React from 'react';
import {t} from 'i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  children: string;
  visits: number;
  dateDebut: string;
  dateFinale: string;
  labelPerimetre: string;
  numberChantier: number;
  navigation: any;
}
export const HeaderDashboard = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerVisites}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Mes visites :{props.visits}</Text>
        </View>
      </View>
      <View style={styles.containerChantier}>
        <View style={styles.perimetre}>
          <View style={styles.imagePerimetre}>
            <Image
              source={require('../../../../assets/img/icn_filter_highlighted.png')}
              style={styles.ImagePerimeter}
            />
          </View>
          <View style={styles.containerPerimetre}>
            <Text style={styles.text1}>{t('txt.primetre')}</Text>
            <Text style={styles.text2}>{props.labelPerimetre}</Text>
          </View>
          <View style={styles.containerVide} />
          <View style={styles.containerPerimetre}>
            <Text style={styles.text1}>{t('txt.chantiers')}</Text>
            <Text style={styles.text2}>
              {props.numberChantier}
              {t('txt.selections')}
            </Text>
          </View>
          <View style={styles.imagePerimetre}>
            <Image
              source={require('../../../../assets/img/icn_filter_arrow.png')}
              style={styles.ImagePerimeterArrow}
            />
          </View>
        </View>
        <View style={styles.container_divider} />
        <View style={styles.statics}>
          <Image
            source={require('../../../../assets/img/icn_info.png')}
            style={styles.ImageInfo}
          />
          <Text style={[styles.textStat, {fontSize: 12}]}>
            {t('txt.dashboard.message')} {props.dateDebut} {t('au')}
            {props.dateFinale}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    flex: 1,
  },
  textCentre: {
    marginTop: 10,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
  logoImage: {
    margin: '15%',
    top: 2,
    width: '45%',
    height: '50%',
    resizeMode: 'stretch',
    tintColor: colors.black,
  },
  logoImage1: {
    width: '25%',
    marginTop: '17%',
    marginLeft: '20%',
    height: '55%',
    resizeMode: 'stretch',
  },
  containerVisites: {
    flex: 0.5,
    backgroundColor: '#e9e9e9',
  },
  containerText: {
    backgroundColor: 'white',
    height: '60%',
    width: '30%',
    borderRadius: 5,
    margin: 15,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',

    color: 'black',
    fontSize: 10,
  },
  containerChantier: {
    flex: 0.7,
    backgroundColor: colors.white,
  },
  perimetre: {
    flexDirection: 'row',
    height: '50%',
  },
  statics: {
    flexDirection: 'row',
    height: '30%',
  },
  ImageInfo: {
    marginStart: 10,

    width: '5%',
    height: '70%',
    resizeMode: 'stretch',
  },
  textStat: {
    flex: 3,
    marginStart: 10,
  },
  container_divider: {
    margin: 5,
    flex: 0.1,
    width: '100%',
    height: '0.2%',
    backgroundColor: '#eaeaea',
  },
  containerPerimetre: {
    flex: 2,
    flexDirection: 'column',
  },
  imagePerimetre: {
    alignSelf: 'center',
    flex: 0.5,
    width: '98%',
  },
  ImagePerimeter: {
    alignSelf: 'center',
    width: '45%',
    height: '45%',
    resizeMode: 'stretch',
  },
  ImagePerimeterArrow: {
    alignSelf: 'center',
    width: '50%',
    height: '25%',
    resizeMode: 'stretch',
  },
  text1: {
    color: colors.gris200,
    textAlign: 'justify',
    width: '100%',
    height: '50%',
    flex: 1,
  },
  text2: {
    color: 'black',
    textAlign: 'justify',
    flex: 1,
    width: '100%',
    height: '50%',
  },
  containerVide: {
    flex: 2,
  },
});
