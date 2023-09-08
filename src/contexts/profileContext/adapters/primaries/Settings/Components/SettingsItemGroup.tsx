  import { View, StyleSheet, SafeAreaView, Text, SectionList, TouchableOpacity, Image } from 'react-native';
  import React, { useState } from 'react';
  import { useTranslation } from 'react-i18next';
  import * as utils from '@utils/index';


  interface Props {
  lastUpDate : string;
  selectedItemID: number | undefined;
  setSelectedItemID: (id : number) => void;
  }

  export const SettingsItemsGroup = (props: Props) => {
      const [selectedItemID, setSelectedItemID] = useState<number>(props.selectedItemID!!);

            props.setSelectedItemID(selectedItemID);

    const { t } = useTranslation();
        var DateNow: string;
          if(props.lastUpDate!! === undefined){
            DateNow = Date().replace(/\sGMT.*/, '').toString();
          }else{
            DateNow = props.lastUpDate
          }
    const DATA = [
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
      <View style={styles.f1}>
      {/* <SettingsAppInfo visits={props.visits} sendData={handlSynchronisation} lastUpdateDate={t('txt.last.update.at')+' '+DateNow} /> */}
  <SafeAreaView style={styles.container}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.label + index}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>setSelectedItemID(item.id)}>
              <View style={styles.item}>
                <Text style={styles.Subtitle}>{item.label}</Text>
  {item.name ===null ?   (<View style={{flex:0.5}}></View>) : (
                            <View style={styles.lastUpDateContainer}>
                            <Text style={styles.last_update}>{t('txt.last.update.at')}</Text>
                            <Text style={styles.last_update}>{item.name}</Text>
                        </View>
                          )}
                          <View style={{flex:0.2}}>
{item.id===2 ||item.id===6 ||item.id===7  ?                  (       <Image
                              style={styles.Image_arrow}
                              source={item.icon}
                              />):(
                                <Image
                                style={styles.Image}
                                source={item.icon}
                                />
                              )}
                </View>
              </View>
              </TouchableOpacity>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.Headercontainer}>
              <Text style={styles.Headertitle}>{title}</Text>
              </View>
            )}
          />
        </SafeAreaView>
      </View>
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
      Image_arrow:{
        width: 10,
        height: 20,
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
