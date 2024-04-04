import {Site} from '@contexts/visiteContext/domain/entity/Site';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import * as utils from '@utils/index';
import {SearchAccompanionWithNameModal} from './searchAccompanionWithNameModal';
import {PreviewAccompanion} from './previewAccompanion';
import {onChange} from 'react-native-reanimated';
import {CommentModal} from '../../../components/comment/CommentModal';
import {Accompagnants} from '@contexts/visiteContext/domain/entity/Accompagnant';

interface Props {
  setAccompanying: (accompagant: Accompagnants[]) => void;
  selectedIdSite: Accompagnants[] | undefined;
  searchWithNameVisible: boolean;
  setSearchWithNameVisible: (visible: boolean) => void;
  ShowAddAccompanionsModal: () => void;
  selectedItems: Accompagnants[];
  setSelectedItems: (selectedItems: Accompagnants[]) => void;
  Accompagnants: Accompagnants[] | undefined;
}
export const AccompanionsSelect = (props: Props) => {
  return (
    <View style={styles.container}>
      <SearchAccompanionWithNameModal
        modalVisible={props.searchWithNameVisible}
        onClose={() => props.setSearchWithNameVisible(false)}
        onSearch={(accompagant: Accompagnants[] | undefined) =>
          props.setAccompanying(accompagant)
        }
        ShowAddAccompanionsModal={props.ShowAddAccompanionsModal}
        selectedItems={props.selectedItems}
        setSelectedItems={props.setSelectedItems}
        Accompagnants={props.Accompagnants}
      />
    </View>
  );
};

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
    alignItems: 'center',
  },
});
