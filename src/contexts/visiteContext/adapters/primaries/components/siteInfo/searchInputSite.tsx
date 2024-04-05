import {t} from 'i18next';
import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import * as utils from '@utils/index';
import {TypeSelectionSites} from './TypeSelectionSites';

interface Props {
  keyword: string;
  searchSites: (keyword: string) => void;
  inputOnly?: boolean;
}
export const SearchInputSite = (props: Props) => {
  return (
    <View style={styles.centeredView}>
      {!props.inputOnly ? <TypeSelectionSites /> : null}
      <View style={styles.filterContainer}>
        <Image source={utils.images.searchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          // value={props.keyword}
          onChangeText={props.searchSites}
          placeholder={t('txt.filter')!}
          cursorColor={utils.colors.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredTitle: {
    color: utils.colors.textColor,
    height: '90%',
    marginTop: '10%',
    alignItems: 'center',
    flex: 1,
  },
  centeredText: {
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1.5,
    color: utils.colors.textColor,
    height: '90%',
    marginTop: '10%',
    alignItems: 'center',
  },
  centeredView: {
    justifyContent: 'center',
    backgroundColor: utils.colors.default,
    borderWidth: 1,
    borderColor: utils.colors.gray90,
    minHeight: 60,
    width: '100%',
  },
  normalText: {
    color: utils.colors.textColor,
    height: '90%',
    marginTop: '10%',
    alignItems: 'center',
  },
  input: {
    borderColor: utils.colors.gray90,
    borderWidth: 1,
    width: '90%',
    height: 40,
    paddingLeft: 40,
    fontSize: 13,
    backgroundColor: 'white',
  },
  filterContainer: {
    alignSelf:'center',
    flexDirection: 'row',
  },
  searchIcon: {
    position: 'absolute',
    width: 20,
    height: 20,
    marginLeft: 10,
    resizeMode: 'contain',
    top: 10,
    zIndex: 99,
  },
});
