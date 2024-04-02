import React, { useEffect, useState } from 'react';
import { View, Modal, StyleSheet, Alert } from 'react-native';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { HeaderModal } from '../../../components/HeaderModal';
import { SearchInputAccompanion } from './searchInputAccompanion';
import { WarringTextView } from '../warringTextView';
import { AddAccompanionsInput } from './addAccompanionsInput';
import { ListAccoumpanions } from './ListAccompanions';
import { Accompagnants } from '@contexts/visiteContext/domain/entity/Accompagnant';

interface Props {
  modalVisible: boolean;
  onClose: () => void;
  onSearch: (person: Accompagnants[]) => void;
  ShowAddAccompanionsModal: () => void;
  selectedItems: Accompagnants[];
  setSelectedItems: (selectedItems: Accompagnants[]) => void;
  Accompagnants: Accompagnants[] | undefined
}
export const SearchAccompanionWithNameModal = (props: Props) => {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState<string>('')
  const [accompanyings, setAccompanyings] = useState<Accompagnants[] | undefined>([])
  const searchAccompaying = (keyword: string) => {
    setKeyword(keyword);

    if (props.Accompagnants) {
      const filteredAccompanyings = props.Accompagnants.filter((person) => {
        return person.fn && person.fn.indexOf(keyword) !== -1;
      });
      setAccompanyings(filteredAccompanyings);
    } else {
      setAccompanyings([]);
    }
  };
  const onSelectAccompanying = () => {
    if (props.selectedItems === undefined) {
      Alert.alert('', t('txt.veuillez.choisir.chantier')!)
    } else {
      props.onSearch(props.selectedItems)
      props.onClose()
    }
  }
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}>
      <View style={styles.centeredView}>
        <HeaderModal title={t('txt.accompagnats')} onLeftPress={props.onClose} leftLabel='back' onRightPress={onSelectAccompanying} rightLabel='Confirm' />
        <WarringTextView WarringTest={t('txt.selectionnez.plusisieurs.accompagnat')} />
        <AddAccompanionsInput selectAccompanions={props.selectedItems} ShowAddAccompanionsModal={props.ShowAddAccompanionsModal} />
        <SearchInputAccompanion keyword={keyword} searchAccompaying={searchAccompaying} />
        {accompanyings?.length === 0 ? (<ListAccoumpanions accompanying={props.Accompagnants} selectedItems={props.selectedItems} setSelectedItems={props.setSelectedItems} />) : (<ListAccoumpanions accompanying={accompanyings} selectedItems={props.selectedItems} setSelectedItems={props.setSelectedItems} />)}
      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({
  centeredTitle: {
    color: utils.colors.textColor,
    height: '90%',
    marginTop: '10%',
    alignItems: 'center',
    flex: 1
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
    flex: 1,
  },
  header: {
    height: 70,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: utils.colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  normalText: {
    color: utils.colors.textColor,
    height: '90%',
    marginTop: '10%',
    alignItems: 'center',
  },
  container: {
    margin: 20,
  },
  filter: {
    flexDirection: 'row',
  },
  textFiletr: {
    color: utils.colors.textColor,
  },
  btnFilter: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  filterIcon: {
    width: 15,
    height: 10,
    marginLeft: 8,
    top: 7,
    resizeMode: 'stretch',
  },
  input: {
    borderColor: utils.colors.gray90,
    borderWidth: 1,
    margin: 20,
    flex: 1,
    paddingLeft: 40,
    fontSize: 15,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  searchIcon: {
    position: 'absolute',
    width: 20,
    height: 20,
    marginLeft: 30,
    resizeMode: 'stretch',
    top: '37%',
  },
});
