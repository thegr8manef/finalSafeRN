import React, { useEffect, useState } from 'react';
import { View, Modal, StyleSheet, Alert } from 'react-native';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { SearchResultAccompanion } from './searchResultAccompanion';
import { HeaderModal } from '../../../components/HeaderModal';
import { SearchInputAccompanion } from './searchInputAccompanion';
import { WarringTextView } from '../warringTextView';
import { AddAccompanionsInput } from './addAccompanionsInput';
import { CommentInfo } from '../../../components/comment/commentInfo';
import { BottomFooter } from '../../../components/BottomFooter';
import { ListAccoumpanions } from './ListAccompanions';
import { accompanying } from "@utils/utils";

interface Props {
  modalVisible: boolean;
  onClose: () => void;
  onSearch: (person: any[]) => void;
  ShowAddAccompanionsModal: () => void;
}
export const SearchAccompanionWithNameModal = (props: Props) => {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState<string>('')
  const [selectedSite, setSelectedSite] = useState<Site | undefined>(undefined)
  const [accoumpanionsVisible, setAccoumpanionsVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [accompanyings, setAccompanyings] = useState<any[]>([])
  console.log("🚀 ~ file: searchAccompanionWithNameModal.tsx:32 ~ SearchAccompanionWithNameModal ~ selectedItems:", selectedItems)

  const searchAccompaying = (keyword: string) => {
    setKeyword(keyword)
    const filtedAccompanyings = accompanying?.filter(person => person.Name.indexOf(keyword) !== -1)
    setAccompanyings(filtedAccompanyings)
  }
  const onSelectAccompanying = () => {
    if (selectedItems.length === 0) {
      Alert.alert('', t('txt.veuillez.choisir.chantier')!)
    } else {
      props.onSearch(selectedItems)
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
        <AddAccompanionsInput selectAccompanions={selectedItems} ShowAddAccompanionsModal={props.ShowAddAccompanionsModal} />
        <SearchInputAccompanion keyword={keyword} searchAccompaying={searchAccompaying} />
        {/* <SearchResultAccompanion sites={sites} onSelect={(site: Site | undefined) => setSelectedSite(site)} /> */}
        {accompanyings.length === 0 ? (<ListAccoumpanions accompanying={accompanying} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />) :(<ListAccoumpanions accompanying={accompanyings} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />)}
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
