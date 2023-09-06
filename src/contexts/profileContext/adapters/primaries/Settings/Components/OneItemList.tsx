import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import React, { useState } from 'react';
import * as utils from '@utils/index';
import { ItemListHeader } from './itemListHeader';
import { ItemListContent } from './itemListContent';
import { LanguageModal } from './languageModal';

interface Props {
title : string;
sub_title : string;
date_last_update? : string;
rightIcon: ImageSourcePropType[];
style_image : string[];
notNull : boolean;
isFirstItem : boolean;
onSelect: () => void;
}
export const OneItemList = (props: Props): JSX.Element =>{

  
    return (
    <View style={{flex:1}}>
    <ItemListHeader title={props.title} isFirstItem={props.isFirstItem} />
    <ItemListContent Sub_title={props.sub_title} date_last_update={props.date_last_update} rightIcon={props.rightIcon} style_image={props.style_image} notNull={props.notNull} onSelect={props.onSelect} />
    </View>
    );
  };
const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        color: utils.colors.black
    },
    Image:{
        width: 30,
        height: 25,
        alignSelf: 'center'
    },
    Image_arrow:{
        width: 10,
        height: 20,
        alignSelf: 'center'
    },
})