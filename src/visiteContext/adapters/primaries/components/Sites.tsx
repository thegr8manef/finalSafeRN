import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../../assets/colors';
import {useTranslation} from 'react-i18next';
import {SiteWithCode} from './SiteWithCode';
import {SiteWithName} from './SiteWithName';

export const Sites = () => {
  const {t} = useTranslation();
  const [withCodeVisibilty, setWithCodeVisibilty] = useState(false);
  const [withNameVisibilty, setWithNameVisibilty] = useState(false);

  const [code, setCode] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => {
          setWithCodeVisibilty(true);
        }}>
        <View style={styles.siteContainer}>
          <Image
            source={require('../../../../assets/img/icon_saisie.png')}
            style={styles.img}
          />
          <Text style={styles.label}>{t('code_chantier_btn')}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => {
          setWithNameVisibilty(true);
        }}>
        <View style={styles.siteContainer}>
          <Image
            source={require('../../../../assets/img/icon_chantier.png')}
            style={styles.img}
          />
          <Text style={styles.label}>{t('chantier_de_mon_perimetre')}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableContainer}>
        <View style={styles.siteContainer}>
          <Image
            source={require('../../../../assets/img/icon_qr_code.png')}
            style={[styles.img, {width: '25%'}]}
          />
          <Text style={styles.label}>{t('qr_code')}</Text>
        </View>
      </TouchableOpacity>

      <SiteWithCode
        modalVisible={withCodeVisibilty}
        setWithCodeVisibilty={setWithCodeVisibilty}
      />
      <SiteWithName
        modalVisible={withNameVisibilty}
        setWithNameVisibilty={setWithNameVisibilty}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  siteContainer: {
    flex: 1,
    borderColor: colors.gris,
    borderWidth: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableContainer: {
    flex: 1,
  },
  img: {
    marginTop: 20,
    width: '18%',
    height: '30%',

    resizeMode: 'stretch',
  },
  label: {
    color: colors.textColor,
    padding: 3,
    textAlign: 'center',
    flex: 1,
  },
});
