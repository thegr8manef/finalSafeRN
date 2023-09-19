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
  sites: Site[] | null;
  onSearch: (site: Site) => void;
  ShowAddAccompanionsModal: () => void;


}
export const SearchAccompanionWithNameModal = (props: Props) => {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState<string>('')
  const [sites, setSites] = useState<Site[] | undefined>(undefined)
  const [selectedSite, setSelectedSite] = useState<Site | undefined>(undefined)
  const [accoumpanionsVisible, setAccoumpanionsVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  console.log("🚀 ~ file: searchAccompanionWithNameModal.tsx:32 ~ SearchAccompanionWithNameModal ~ selectedItems:", selectedItems)

  const searchSite = (keyword: string) => {
    setKeyword(keyword)
    const filtedSites = props.sites?.filter(site => site.name.indexOf(keyword) !== -1)
    setSites(filtedSites)
  }
  const onSelectSite = () => {
    if (!selectedSite) {
      Alert.alert('', t('txt.veuillez.choisir.chantier')!)
    } else {
      props.onSearch(selectedSite)
      props.onClose()
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}>
      <View style={styles.centeredView}>
        <HeaderModal title={t('txt.accompagnats')} onLeftPress={props.onClose} leftLabel='back' onRightPress={onSelectSite} rightLabel='Confirm' />
        <WarringTextView WarringTest={t('txt.selectionnez.plusisieurs.accompagnat')} />
        <AddAccompanionsInput selectAccompanions={selectedItems} ShowAddAccompanionsModal={props.ShowAddAccompanionsModal} />
        <SearchInputAccompanion keyword={keyword} searchSites={searchSite} />
        {/* <SearchResultAccompanion sites={sites} onSelect={(site: Site | undefined) => setSelectedSite(site)} /> */}
        <ListAccoumpanions accompanying={accompanying} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
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
