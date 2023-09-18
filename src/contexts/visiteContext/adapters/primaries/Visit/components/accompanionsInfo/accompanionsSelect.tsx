import { Site } from '@contexts/visiteContext/domain/entity/Site';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import * as utils from '@utils/index';
import { SearchAccompanionWithNameModal } from './searchAccompanionWithNameModal';
import { PreviewAccompanion } from './previewAccompanion';
import { onChange } from 'react-native-reanimated';
import { CommentModal } from '../../../components/comment/CommentModal';

interface Props {
  sites: Site[] | null;
  selectedSite: Site | undefined
  setSelectedSite: (site: Site | undefined) => void
  selectedIdSite: string;
  searchWithNameVisible: boolean;
  setSearchWithNameVisible : (visible : boolean) => void;
}
export const AccompanionsSelect = (props: Props) => {
  return (
    <View style={styles.container}>
      {/* <PreviewAccompanion site={props.selectedSite} /> */}
      <SearchAccompanionWithNameModal modalVisible={props.searchWithNameVisible} onClose={() => props.setSearchWithNameVisible(false)} sites={props.sites}
      onSearch={(site: Site | undefined) => props.setSelectedSite(site)} ShowAddAccompanionsModal={() => console.log('ff')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    margin: 30,
    backgroundColor: 'white',
  },
  title: {
    color: utils.colors.gris200,
    fontWeight: '700',
    fontSize: 12,
  },
  content: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
