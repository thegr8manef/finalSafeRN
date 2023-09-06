import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import { ItemListHeader } from './itemListHeader';
import { ItemListContent } from './itemListContent';

interface Props {
title : string;
sub_title_top : string;
sub_title_bottom : string;
date_last_update : string;
rightIcon_top: ImageSourcePropType[];
rightIcon_bottom: ImageSourcePropType[];
notNull : boolean;
style : string[];
style_bottom : string[];
isFirstItem : boolean;
onSelectURL1 () : void;
onSelectURL2 () : void;
}
export const TwoItemList = (props: Props): JSX.Element =>{

  
    return (
    <View style={{flex:1}}>
    <ItemListHeader title={props.title} isFirstItem={props.isFirstItem} />
    <ItemListContent Sub_title={props.sub_title_top} date_last_update={props.date_last_update} rightIcon={props.rightIcon_top} style_image={props.style} notNull={props.notNull} onSelect={props.onSelectURL1} />
    <ItemListContent Sub_title={props.sub_title_bottom} date_last_update={props.date_last_update} rightIcon={props.rightIcon_bottom} style_image={props.style_bottom} notNull={props.notNull} onSelect={props.onSelectURL2} />
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