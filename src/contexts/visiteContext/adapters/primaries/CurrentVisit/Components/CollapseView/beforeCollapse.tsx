import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import * as utils from '@utils/index';
import {ButtonCollapse} from './buttonCollapse';
import {t} from 'i18next';
interface Props {
  toggleCollapse: () => void;
  site: string;
  date: string;
  type: Number;
}
export const BeforeCollapse = (props: Props) => {
  let imageSource = utils.images.addhierarchicalIcon;
  let textContent = t('txt.visite.de.hierarchique');

  if (props.type === 3) {
    imageSource = utils.images.addhierarchicalIcon;
    textContent = t('txt.visite.de.hierarchique');
  } else if (props.type === 1) {
    imageSource = utils.images.addConformite;
    textContent = t('txt.visite.de.conformité');
  } else if (props.type === 0) {
    imageSource = utils.images.addPrevenationIcon;
    textContent = t('txt.visite.de.prevention');
  }
  return (
    <View style={styles.container}>
      <View>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text}>{textContent}</Text>
      </View>
      <View>
        <Text style={styles.textDescription}>
          {t('txt.chantier') + ' ' + props.site + ' - ' + props.date}
        </Text>
      </View>
      <View></View>
      <ButtonCollapse toggleCollapse={props.toggleCollapse} stat={'expand'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'column',
  },
  image: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginTop: 15,
  },
  text: {
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: '700',
    fontSize: 16,
    color: utils.colors.black,
    fontFamily: utils.fonts.AvenirMedium,
  },
  textDescription: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 14,
    color: utils.colors.gray700,
  },
});
