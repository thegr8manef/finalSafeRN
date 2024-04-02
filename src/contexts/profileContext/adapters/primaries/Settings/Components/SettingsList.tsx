import {View, StyleSheet, Text, SectionList} from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import {SettingsItem} from './SettingItem';
import {REGEX_DATE, SETTINGS} from '@common/constants';

interface Props {
  lastUpDate: string;
  pressedItemID: number | undefined;
  setPressedItemID: (id: number) => void;
}

export const SettingsList = (props: Props) => {
  var DateNow: string;
  if (props.lastUpDate!! === undefined) {
    DateNow = Date().replace(REGEX_DATE, '');
  } else {
    DateNow = props.lastUpDate;
  }

  return (
    <SectionList
      scrollEnabled={false}
      sections={SETTINGS(DateNow)}
      keyExtractor={(item, index) => item.label + index}
      renderItem={({item}) => (
        <SettingsItem
          pressedItemID={props.pressedItemID}
          setPressedItemID={props.setPressedItemID}
          item={{
            id: item.id,
            label: item.label,
            name: item.name,
            icon: item.icon,
          }}
        />
      )}
      renderSectionHeader={({section: {title}}) => (
        <View style={styles.Headercontainer}>
          <Text style={styles.Headertitle}>{title}</Text>
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: utils.colors.gris200,
    padding: 10,
  },
  Headercontainer: {
    flex: 1,
    height: 40,
    backgroundColor: utils.colors.gray90,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: utils.colors.gris100,
    borderBottomColor: utils.colors.gris100,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  Subtitle: {
    flex: 0.7,
    fontSize: 17,
    color: utils.colors.black,
  },
  Image: {
    width: 35,
    height: 30,
    alignSelf: 'center',
    resizeMode: 'center',
  },
  Headertitle: {
    fontSize: 14,
    fontWeight: '700',
    color: utils.colors.gray700,
  },
  last_update: {
    flex: 0.5,
    fontSize: 12,
    color: utils.colors.gris200,
  },
  lastUpDateContainer: {flex: 0.5, flexDirection: 'column', flexWrap: 'wrap'},
});
