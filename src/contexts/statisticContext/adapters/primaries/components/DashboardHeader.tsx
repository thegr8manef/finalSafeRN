import { View, Text, StyleSheet, Image } from 'react-native';
import * as utils from '@utils/index';
import React from 'react';
import { t } from 'i18next';

interface Props {
  dateDebut: string;
  dateFinale: string;
  labelPerimetre: string | undefined;
  numberChantier: number;
}
export const DashboardHeader = (props: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.containerChantier}>
        <View style={styles.perimetre}>
          <View style={styles.imagePerimetre}>
            <Image
              source={utils.images.filterHiglitedIcon}
              style={styles.ImagePerimeter}
            />
          </View>
          <View style={styles.containerPerimetre}>
            <Text style={styles.textArea}>{t('txt.primetre')}</Text>
            <Text style={styles.textDetails}>{props.labelPerimetre}</Text>
          </View>
          <View style={styles.containerVide} />
          <View style={styles.containerPerimetre}>
            <Text style={styles.textArea}>{t('txt.chantiers')}</Text>
            <Text style={styles.textDetails}>
              {`${props.numberChantier} ${t('txt.selections')}`}
            </Text>
          </View>
          <View style={styles.imagePerimetre}>
            <Image
              source={utils.images.filterArrowIcon}
              style={styles.ImagePerimeterArrow}
            />
          </View>
        </View>
        <View style={styles.container_divider} />
        <View style={styles.statics}>
          <Image source={utils.images.infoIcon} style={styles.ImageInfo} />
          <Text style={[styles.textStat, { fontSize: 12 }]}>
            {t('txt.dashboard.message')} {props.dateDebut} {t('au')} {""}
            {props.dateFinale}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },

  containerVisites: {
    height: 50,
    backgroundColor: '#e9e9e9',
  },
  containerText: {
    backgroundColor: 'white',
    height: '70%',
    width: '30%',
    marginTop: 7,
    marginLeft: 15,
    borderRadius: 3,

    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',

    color: 'black',
    fontSize: 10,
  },
  containerChantier: {
    height: 80,
    backgroundColor: utils.colors.white,
  },
  perimetre: {
    flexDirection: 'row',
    height: '50%',
  },
  statics: {
    flexDirection: 'row',
    height: '30%',
    justifyContent:'center'
  },
  ImageInfo: {
    marginStart: 10,
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  textStat: {
    flex: 3,
    marginStart: 10,
    fontFamily: utils.fonts.AvenirMedium,
  },
  container_divider: {
    margin: 5,
    flex: 0.1,
    width: '100%',
    height: '0.2%',
    backgroundColor: '#eaeaea',
  },
  containerPerimetre: {
    flex: 1,

    flexDirection: 'column',
  },
  imagePerimetre: {
    alignSelf: 'center',
    flex: 0.5,
  },
  ImagePerimeter: {
    width: '55%',
    height: '55%',
    resizeMode: 'contain',
    marginLeft: 15,
    marginTop: 10,
  },
  ImagePerimeterArrow: {
    width: '50%',
    height: '25%',
    resizeMode: 'contain',
    marginTop: 10,
  },
  textArea: {
    color: utils.colors.gris200,
    textAlign: 'justify',
    fontFamily: utils.fonts.AvenirMedium,
    width: '100%',
    fontSize: 12,
  },
  textDetails: {
    color: utils.colors.textColor,
    fontFamily: utils.fonts.AvenirMedium,
    fontSize: 12,
  },
  containerVide: {
    flex: 1,
  },
});
