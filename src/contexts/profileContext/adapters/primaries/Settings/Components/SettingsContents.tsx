  import { View, StyleSheet, SafeAreaView, Text, SectionList, TouchableOpacity, Image } from 'react-native';
  import React, { useState } from 'react';
  import { useTranslation } from 'react-i18next';
  import * as utils from '@utils/index';
import { SettingsList } from './SettingsList';


  interface Props {
  lastUpDate : string;
  pressedItemID: number | undefined;
  setPressedItemID: (id : number) => void;
  }

  export const SettingsContents = (props: Props) => {
      const [pressedItemID, setPressedItemID] = useState<number>(props.pressedItemID!!);

            props.setPressedItemID(pressedItemID);

    const { t } = useTranslation();
    return (
      <View style={styles.f1}>
        <SafeAreaView style={styles.container}>
          <SettingsList lastUpDate={props.lastUpDate} pressedItemID={pressedItemID} setPressedItemID={setPressedItemID} />
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
