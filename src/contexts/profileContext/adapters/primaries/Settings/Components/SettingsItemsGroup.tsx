import { View, Image, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { SettingsItems } from './SettingsItems';
import { SettingsItem } from './SettingsItem';

interface Props {
    lastUpdateDate : string;
    OnSynchronize : () => void;
    OnClickSitesList : () => void;
    OnClickLanguageModal : () => void;
    OnClickFirstURL : () => void;
    OnClickSecondURL : () => void; 
}

export const SettingsItemsGroup = (props: Props) => {
    const { t } = useTranslation();
  return (
    <View style={styles.f1}>
          <SettingsItems  title={t('txt.chantiers')} lastUpdateDate={props.lastUpdateDate} topSubtitle={t('txt.mes.chantier')} bottomSubtitme={t('txt.autres.chantier')} notNull={true} iconTop={[utils.images.synchoLogo]} iconBottom ={[utils.images.arrow_right]} style={[styles.Image]} style_bottom={[styles.Image_arrow]} isFirstItem={true} onClickFirstUrl={props.OnSynchronize} onClickSecondUrl={props.OnClickSitesList}/>   
          <SettingsItem title={t('txt.referentiel.listes')} Subtitle={t('txt.typology.risques.questions')} lastUpdateDate={props.lastUpdateDate} iconTop={[utils.images.synchoLogo]} style_image={styles.Image_syncho} notNull={true} isFirstItem={false} onSelect={props.OnSynchronize}/>
          <SettingsItem title={t('txt.photos')} Subtitle={t('txt.no.photos.wait.send')} lastUpdateDate={''} iconTop={[utils.images.mediaSyncho]} style_image={styles.Image_camera} notNull={false} isFirstItem={false} onSelect={props.OnSynchronize}/>
          <SettingsItem title={t('txt.language')} Subtitle={t('txt.language')} lastUpdateDate={''} iconTop={[]} style_image={styles.Image_camera} notNull={false} isFirstItem={false} onSelect={props.OnClickLanguageModal} />
          <SettingsItems  title={t('settings_about')} lastUpdateDate={''} topSubtitle={t('settings_confidentiality')} bottomSubtitme={t('settings_legal_notice')} notNull={false} iconTop={[utils.images.arrow_right]} iconBottom ={[utils.images.arrow_right]} style={[styles.Image_arrow]} style_bottom={[styles.Image_arrow]} isFirstItem={false} onClickFirstUrl={props.OnClickFirstURL} onClickSecondUrl={props.OnClickSecondURL}/>
    </View>
  );
};
const styles = StyleSheet.create({
    f1: {
      flex: 1,
    },
    Image_syncho:{
      width: 30,
      height: 30,
      alignSelf: 'center'
  },
  Image_camera:{
    width: 30,
    height: 25,
    alignSelf: 'center'
},
Image:{
  width: 30,
  height: 30,
  alignSelf: 'center'
},
Image_arrow:{
  width: 10,
  height: 20,
  alignSelf: 'center'
},
  });
