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
      <View style={styles.rectangle}>
        <View style={{flex: 2}}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Image
              source={require('../../../../assets/img/sidenav.png')}
              style={styles.logoImage1}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 5}}>
          <Text style={styles.textCentre}>{props.children}</Text>
        </View>
        <View style={{flex: 1.5}}>
          <Image
            source={require('../../../../assets/img/Flash.png')}
            style={styles.logoImage}
          />
        </View>
      </View>
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
          <Text style={styles.textStat}>
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
    flex: 0.7,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCentre: {
    marginTop: 10,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
  logoImage: {
    margin: '15%',
    width: '40%',
    height: '60%',
    resizeMode: 'stretch',
  },
  logoImage1: {
    margin: '15%',
    width: '20%',
    height: '40%',
    resizeMode: 'stretch',
  },
  containerVisites: {
    flex: 0.8,
    backgroundColor: colors.gris,
  },
  containerText: {
    backgroundColor: 'white',
    height: '60%',
    width: '35%',
    borderRadius: 10,
    margin: 15,
  },
  text: {
    textAlign: 'center',
    marginTop: '7%',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 12,
  },
  containerChantier: {
    flex: 1.1,
  },
  perimetre: {
    flexDirection: 'row',
    flex: 3,
  },
  statics: {
    flexDirection: 'row',
    flex: 1.5,
  },
  ImageInfo: {
    marginStart: 10,
    flex: 0.2,
    width: '90%',
    height: '90%',
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
