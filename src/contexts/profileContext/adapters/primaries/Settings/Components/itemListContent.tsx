import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType, ActivityIndicator } from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import { useHandler } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

interface Props {
Subtitle : string;
lastUpdateDate? : string;
icon: ImageSourcePropType[];
style_image: string[];
notNull : boolean;
onSelect: () => void;
}
export const ItemListContent= (props: Props): JSX.Element => {
        const { t } = useTranslation();
    return (
 <TouchableOpacity style={styles.container} 
    onPress={() => props.onSelect() }>
                {props.notNull ?  ( 
                <>
                    <Text style={styles.title}>{props.Subtitle}</Text>
                        <View style={{ flex: 0.5 }}>
                            <Text style={styles.last_update}>{t('txt.last.update.at')}</Text>
                            <Text style={styles.last_update}>{props.lastUpdateDate}</Text>
                        </View>
                </> )
                 : (
                <>
                    <Text style={styles. title_all_width}>{props.Subtitle}</Text>
                </>) 
                }
                
        {props.icon.map((icons: ImageSourcePropType) => (
               <Image source={icons} style={props.style_image} />
              ))}
    </TouchableOpacity>
    );
  };
const styles = StyleSheet.create({
    container: {
        flex:1,
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: utils.colors.gris200,
        flexDirection: 'row',
        paddingTop: 15,
        paddingHorizontal: 10
    },
    title:{
        flex: 0.5,
        fontSize: 17,
        color: utils.colors.black,

    
    },
    title_all_width:{
        flex: 1,
        fontSize: 17,
        color: utils.colors.black,
        paddingTop: 15,

    
    },
    last_update:{
        flex: 0.5,
        fontSize: 12,
        color: utils.colors.gris200,

    },
    indicator: {
        position: 'absolute',
        margin: '50%',
        top: 180,
      },
})