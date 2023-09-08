import { View, StyleSheet, SafeAreaView, Text, SectionList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as utils from '@utils/index';


interface Props {
pressedItemID: number | undefined;
setPressedItemID: (id : number) => void;
item: {id:number,label:string,name:string,icon:any};
}

export const SettingsItem = (props: Props) => {
  const { t } = useTranslation();
  return (
            <TouchableOpacity onPress={()=>props.setPressedItemID(props.item.id)}>
            <View style={styles.item}>
              <Text style={styles.Subtitle}>{props.item.label}</Text>
                    {props.item.name ===null ?   (<View style={{flex:0.5}}></View>) : (
                          <View style={styles.lastUpDateContainer}>
                          <Text style={styles.last_update}>{t('txt.last.update.at')}</Text>
                          <Text style={styles.last_update}>{props.item.name}</Text>
                      </View>
                        )}
                          {props.item.icon && (
                                <Image
                                source={props.item.icon}
                                style={styles.Image}
                                />
                        )}
            </View>
            </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    item: {
      flexDirection : 'row',
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: utils.colors.gris200,
      padding: 10,

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
  last_update:{
    flex: 0.5,
    fontSize: 12,
    color: utils.colors.gris200,

},
lastUpDateContainer:{ flex: 0.5,flexDirection:'column',flexWrap:'wrap'}
  });
