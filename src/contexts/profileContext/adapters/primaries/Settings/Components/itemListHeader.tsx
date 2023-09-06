import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import * as utils from '@utils/index';

interface Props {
title : string;
isFirstItem : boolean;
}
export const ItemListHeader= (props: Props): JSX.Element => {
    return (
        <>
    {props.isFirstItem ? (<View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
    </View>) :(
       <View style={styles.container_secondary}>
       <Text style={styles.title}>{props.title}</Text>
   </View> 
    )}
    </>
    );
  };
const styles = StyleSheet.create({
    container: {
        flex:1,
        height: 50,
        backgroundColor : utils.colors.gray90,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: utils.colors.gris200,
        borderBottomColor: utils.colors.gris200,
    },
    container_secondary: {
        flex:1,
        height: 50,
        backgroundColor : utils.colors.gray90,
        borderBottomWidth: 1,
        borderBottomColor: utils.colors.gris200,
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        color: utils.colors.gris200,
        marginTop: 15,
        marginStart: 15,
    },
})