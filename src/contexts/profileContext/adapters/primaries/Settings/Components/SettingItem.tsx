import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import * as utils from '@utils/index';

interface Props {
  pressedItemID: number | undefined;
  setPressedItemID: (id: number) => void;
  item: {id: number; label: string; name: string; icon: any};
}

export const SettingsItem = (props: Props) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => props.setPressedItemID(props.item.id)}>
      <Text style={styles.Subtitle}>{props.item.label}</Text>
      {props.item.name === null ? (
        <View></View>
      ) : (
        <View style={styles.lastUpDateContainer}>
          <Text style={styles.last_update}>{t('txt.last.update.at')}</Text>
          <Text style={styles.last_update}>{props.item.name}</Text>
        </View>
      )}
      {props.item.icon && (
        <Image source={props.item.icon} style={styles.Image} />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: utils.colors.gris200,
    padding: 10,

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Subtitle: {
    fontSize: 15,
    color: utils.colors.black,
    paddingStart: 5,
    flex: 2,
  },
  Image: {
    width: 24,
    height: 24,
    marginEnd: 5,
    resizeMode: 'center',
  },
  last_update: {
    fontSize: 12,
    color: utils.colors.gris200,
  },
  lastUpDateContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 2,
  },
});
