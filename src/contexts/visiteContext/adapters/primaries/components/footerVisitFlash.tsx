import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import * as utils from '@utils/index';
import { AddImageButtons } from "./images/addImageButtons";
interface Props {
    addImages:(image: string) => void
    saveVisit: () =>void
}
export const FooterVisitFlash =(props: Props) =>{
    const {t} = useTranslation();
    return(
        <View style={styles.container}>
            <View style={styles.content}>
          <AddImageButtons addImage={props.addImages} />
            <Pressable style={styles.buttonRight}
              android_ripple={styles.androidRipple}
              onPress={props.saveVisit}>
              <Text style={styles.textButton}>
                {t('txt.sauvegarder.remarque')}
              </Text>
            </Pressable>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: 'white',
        borderTopColor: utils.colors.gris200,
        borderTopWidth: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      },
      content:{
        flexDirection: 'row',
        width: '100%',
        justifyContent:'center',
        alignItems:'center'
      },
      buttonRight: {
        
        
        flex:1
      },
      textButton:{
        textAlign: 'right',
        fontSize: 18,
        color: 'black',
        padding:10
      },
      buttonsLeft: {
        flex: 1,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row'
      },
      androidRipple:{
        color: utils.colors.gris300
      },
})