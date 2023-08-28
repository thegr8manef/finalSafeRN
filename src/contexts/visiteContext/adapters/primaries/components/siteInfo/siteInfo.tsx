import { Site } from '@contexts/visiteContext/domain/entity/Site';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import * as utils from '@utils/index';
import { SearchSiteItem } from './searchSiteItem';
import { SearchSiteWithCodeModal } from './SearchSiteWithCodeModal';
import { SearchSiteWithNameModal } from './SearchSiteWithNameModal';
import { PreviewSite } from './previewSite';
import { useNavigation } from '@react-navigation/native';
import SearchSiteWithQrCode from './SearchSiteWithQrCode';

interface Props {
  sites: Site[] | null;
  selectedSite: Site | undefined
  setSelectedSite: (site: Site | undefined) => void
  selectedIdSite: string;
}
export const SiteInfo = (props: Props) => {
  const { t } = useTranslation();
  const [searchWithCodeVisible, setSearchWithCodeVisible] = useState(false);
  const [searchWithNameVisible, setSearchWithNameVisible] = useState(false);
  const [searchWithQrCodeVisible, setSearchWithQrCodeVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('selectionner_le_chantier_par')}
      </Text>
      <View style={styles.content}>
        <SearchSiteItem label={t('code_chantier_btn')} icon={utils.images.inputIcon} onPress={() => setSearchWithCodeVisible(true)} />
        <SearchSiteItem label={t('chantier_de_mon_perimetre')} icon={utils.images.constructionIcon} onPress={() => setSearchWithNameVisible(true)} />
        <SearchSiteItem label={t('qr_code')} icon={utils.images.qrCodeIcon} onPress={() => setSearchWithQrCodeVisible(true)} />
      </View>
      <PreviewSite site={props.selectedSite} />
      <SearchSiteWithCodeModal modalVisible={searchWithCodeVisible} onClose={() => setSearchWithCodeVisible(false)}
        onSearch={(site: Site | undefined) => props.setSelectedSite(site)} sites={props.sites} />
      <SearchSiteWithNameModal modalVisible={searchWithNameVisible} onClose={() => setSearchWithNameVisible(false)} sites={props.sites}
        onSearch={(site: Site | undefined) => props.setSelectedSite(site)} />
      <SearchSiteWithQrCode modalVisible={searchWithQrCodeVisible} onClose={() => setSearchWithQrCodeVisible(false)} sites={props.sites}
        onSearch={(site: Site | undefined) => props.setSelectedSite(site)} />

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
