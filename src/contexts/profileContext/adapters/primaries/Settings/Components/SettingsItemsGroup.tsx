import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import { ItemListHeader } from './itemListHeader';
import { ItemListContent } from './itemListContent';

interface Props {
title : string;
topSubtitle : string;
bottomSubtitme : string;
lastUpdateDate : string;
iconTop: ImageSourcePropType[];
iconBottom : ImageSourcePropType[];
notNull : boolean;
style : string[];
style_bottom : string[];
isFirstItem : boolean;
onClickFirstUrl () : void;
onClickSecondUrl () : void;
}
export const SettingsItemsGroup = (props: Props): JSX.Element =>{

  
    return (
    <View style={{flex:1}}>
    <ItemListHeader title={props.title} isFirstItem={props.isFirstItem} />
    <ItemListContent Subtitle={props.topSubtitle} lastUpdateDate={props.lastUpdateDate} icon={props.iconTop} style_image={props.style} notNull={props.notNull} onSelect={props.onClickFirstUrl} />
    <ItemListContent Subtitle={props.bottomSubtitme} lastUpdateDate={props.lastUpdateDate} icon={props.iconBottom } style_image={props.style_bottom} notNull={props.notNull} onSelect={props.onClickSecondUrl} />
    </View>
    );
  };
const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        color: utils.colors.black
    },

})