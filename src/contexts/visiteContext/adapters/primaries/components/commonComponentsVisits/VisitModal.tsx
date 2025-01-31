import React, {useState} from 'react';
import {Modal, StyleSheet, View, TextInput, Alert} from 'react-native';
import {HeaderModal} from '../HeaderModal';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
import { SiteInfo } from '../siteInfo/siteInfo';
import { BottomFooter } from '../BottomFooter';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
interface Props {
  visible: boolean;
  onClose: () => void;
  NextStep: () => void;
  sites: Site[] | null;
  title: string;
  selectedSite: Site | undefined;
  setSelectedSite :(site : Site) => void
}

export const VisitModal = (props: Props) => {
  const [selectedSite, setSelectedSite] = useState<Site | undefined>(undefined)
  const {t} = useTranslation();
  const title = props.title

const validVisit = (): boolean => {

  if (selectedSite === undefined) {
      Alert.alert('', t('txt.qr.code.empty')!);
      return false
  } else {
    props.setSelectedSite(selectedSite)
    props.NextStep()
      return true
  }
};
  return (
    <Modal
      testID="modal"
      animationType="slide"
      transparent={true}
      visible={props.visible}>
        <View style={styles.container}>
        <HeaderModal
          title={t(title)}
          leftLabel={t('txt.annuler')}
          onLeftPress={() => props.onClose()}
        />
            <SiteInfo sites={props.sites} selectedSite={selectedSite} setSelectedSite={setSelectedSite} selectedIdSite={selectedSite?.id!!} />
            <BottomFooter confirmPress={() => validVisit()} confirmText={t('txt.swivant')} contentText={selectedSite?.name!!} />
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
  },
});
