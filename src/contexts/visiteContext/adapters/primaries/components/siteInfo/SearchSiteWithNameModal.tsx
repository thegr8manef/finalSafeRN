import React, { useEffect, useState } from 'react';
import {View,  Modal, StyleSheet, Image, Alert} from 'react-native';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { HeaderModal } from '../HeaderModal';
import { SearchInputSite } from './searchInputSite';
import { SearchResultSites } from './searchResultSites';
import { FooterSearchSites } from './footerSearchSites';

interface Props {
  modalVisible: boolean;
  onClose: () => void;
  sites: Site[] | undefined;
  onSearch:(site: Site) =>void;

}
export const SearchSiteWithNameModal = (props: Props) => {
  const {t} = useTranslation();
const [keyword, setKeyword]= useState<string>('')
const [sites, setSites]= useState<Site[] | undefined>(undefined)
const [selectedSite, setSelectedSite]= useState<Site | undefined>(undefined)
const searchSite= (keyword:string)=>{ 
  setKeyword(keyword)
 const filtedSites =  props.sites?.filter(site => site.name.indexOf(keyword) !== -1)
  setSites(filtedSites)
}
const onSelectSite = () => {
  console.log(selectedSite)
  if(!selectedSite){
    console.log('temchich')
   Alert.alert('',t('txt.veuillez.choisir.chantier')!!)
  }else{
    props.onSearch(selectedSite)
    props.onClose()
    return selectedSite
  }
}

useEffect(() => {
  
  },[selectedSite]);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}>
      <View style={styles.centeredView}>
      <HeaderModal title={t('choisir_un_chantier')} onLeftPress={props.onClose} leftLabel={t('txt_cancel')} />

      <SearchInputSite keyword={keyword} searchSites={searchSite} />
        <SearchResultSites sites={sites} onSelect={(site:  Site | undefined)=> setSelectedSite(site)} />
        <FooterSearchSites onSelectSite={onSelectSite}  />
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
