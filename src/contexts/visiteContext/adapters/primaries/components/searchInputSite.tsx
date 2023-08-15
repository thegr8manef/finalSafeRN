import { Divider } from '@common/adapters/primaries/components/Divider'
import { Props } from '@react-native-community/checkbox/dist/CheckBox.android'
import { t } from 'i18next'
import React from 'react'
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import * as utils from '@utils/index';

interface Props {
    keyword: string
    searchSites: (keyword: string)=> void
}
export const SearchInputSite = (props: Props)=>{
    return(
        <View>
            <View style={styles.container}>
            <View style={styles.filter}>
                <Text style={styles.textFiletr}> {t('choisir_un_chantier')}</Text>
                <View style={styles.btnFilter}>
                    <Text style={styles.textFiletr}> {t('txt.mes.chantier')}</Text>
                    <Image
                        source={utils.images.filterArrowIcon}
                        style={styles.filterIcon} />
                </View>
            </View>
        </View>
        <View style={styles.filterContainer}>
                <Image source={utils.images.searchIcon} style={styles.searchIcon} />
                <TextInput
                    style={styles.input} value={props.keyword} onChangeText={props.searchSites}
                    placeholder={t('txt.filter')!!}
                    cursorColor={utils.colors.primary} />
            </View></View>
    )
}

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
  