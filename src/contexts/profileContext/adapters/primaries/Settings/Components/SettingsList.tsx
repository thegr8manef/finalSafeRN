import { View, StyleSheet, SafeAreaView, Text, SectionList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as utils from '@utils/index';
import { SettingsItem } from './SettingItem';


interface Props {
lastUpDate : string;
pressedItemID: number | undefined;
setPressedItemID: (id : number) => void;
}

export const SettingsList = (props: Props) => {

  const { t } = useTranslation();
      var DateNow: string;
        if(props.lastUpDate!! === undefined){
          DateNow = Date().replace(/\sGMT.*/, '').toString();
        }else{
          DateNow = props.lastUpDate
        }
  const settings = [
    {
      title: t('txt.chantiers'),
      data:[
        {   
            id:1,
            label: t('txt.mes.chantier'),
            name:DateNow,
            icon: utils.images.synchoLogo
        },
        {
          id:2,
          label: t('txt.autres.chantier'),
          name:DateNow,
          icon: utils.images.arrow_right
        }
    ]
    },
    {
      title: t('txt.referentiel.listes'),
      data:[
        {
            id:3,
            label: t('txt.typology.risques.questions'),
            name:DateNow,
            icon: utils.images.synchoLogo
          }
    ]
    },
    {
      title: t('txt.photos'),
      data:[
        {
          id:4,
          label: t('txt.no.photos.wait.send'),
          name: null,
          icon: utils.images.mediaSyncho
        }
    ]
    },
    {
      title: t('txt.language'),
      data:[
        {
          id:5,
          label: t('txt.language'),
          name: null,
        }
    ]
    },
    {
      title: t('settings_about'),
      data:[
        {
          id:6,
          label: t('settings_confidentiality'),
          name: null,
          icon: utils.images.arrow_right
        },
        {
          id:7,
          label: t('settings_legal_notice'),
          name: null,
          icon: utils.images.arrow_right
        }
    ]
    },
  ];
  return (
        <SectionList
          sections={settings}
          keyExtractor={(item, index) => item.label + index}
          renderItem={({ item }) => (
<SettingsItem pressedItemID={props.pressedItemID} setPressedItemID={props.setPressedItemID} item={{
                  id: item.id,
                  label: item.label,
                  name: item.name,
                  icon: item.icon
              }} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.Headercontainer}>
            <Text style={styles.Headertitle}>{title}</Text>
            </View>
          )}
        />
  );
};
const styles = StyleSheet.create({
    f1: {
      flex: 1,
    },
    container: {
      flex: 1,
    },
    item: {
      flexDirection : 'row',
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: utils.colors.gris200,
      padding: 10,

    },
    Headercontainer: {
      flex:1,
      height: 50,
      backgroundColor : utils.colors.gray90,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopColor: utils.colors.gris200,
      borderBottomColor: utils.colors.gris200,
    },
    Subtitle: {
      flex: 0.7,
      fontSize: 17,
      color: utils.colors.black,
    },
    Image:{
      width: 35,
      height: 30,
      alignSelf: 'center',
      resizeMode:'center',
    },
    Headertitle:{
      fontSize: 14,
      fontWeight: 'bold',
      color: utils.colors.gris200,
      marginTop: 15,
      marginStart: 15,
  },
  last_update:{
    flex: 0.5,
    fontSize: 12,
    color: utils.colors.gris200,

},
lastUpDateContainer:{ flex: 0.5,flexDirection:'column',flexWrap:'wrap'}
  });
