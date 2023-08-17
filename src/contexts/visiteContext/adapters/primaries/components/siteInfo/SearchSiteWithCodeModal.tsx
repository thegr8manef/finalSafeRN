import {View, Text, Modal, StyleSheet,TextInput } from 'react-native';
import React, { useState } from 'react';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { HeaderModal } from '../HeaderModal';


interface Props {
  modalVisible: boolean;
  onClose: () => void
  onSearch: (site: Site | undefined) => void
  sites: Site[] | null
}

export const SearchSiteWithCodeModal = (props: Props) => {
  const {t} = useTranslation();
  const [code, setCode] = useState<string>('');

  //fct search site on click on validate
  const searchSite = () => {
    if (code.length !== 0) {
     const selectedSite = props.sites?.find(site => site.reference===code)
      if (!selectedSite) {
        alert(t('no_cs_by_ref'));
      } else {
        setCode('')
       props.onSearch(selectedSite)
       props.onClose()
      }
    } else {
      alert(t('error.point.empty'));
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}>
       
      <View style={styles.container}>
      <HeaderModal title={t('txt.code.chantier.no.star')} onLeftPress={props.onClose} leftLabel={t('txt_cancel')}
        rightLabel={t('txt.valider')!} onRightPress={() =>searchSite()}
         />
        <View style={styles.content}>
          <Text>{t('txt.code.chantier')}</Text>
          <TextInput
            cursorColor={utils.colors.primary} style={styles.textInput}
            value={code}
            onChangeText={setCode}
          />
          </View>
      </View>
    </Modal>
  );
          }

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
 
  content: {
    margin: 30,
  },
  textInput:{
    borderBottomColor: utils.colors.primary,
    borderBottomWidth: 2,
    textTransform: 'uppercase'
  }
});
