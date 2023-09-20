import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as utils from '@utils/index';
import { t } from 'i18next';
import { } from 'react-native-svg';
import { AddNewObservationCheckBox } from './addNewObservationCheckBox';

interface Props {
    item_title: string;
    onCheckItem:() => void;
    item_image: Image;
    is_clicked: boolean

}
export const AddNewObservationItem = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Image source={props.item_image} style={styles.image} />
            </View>
            <View style={{flex:4}}>
                <Text style={styles.text}>{props.item_title}</Text>
            </View>
            <View style={{flex:1}}>
                <AddNewObservationCheckBox onCheckItem={props.onCheckItem} clicked={props.is_clicked} />
            </View>
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        borderColor: utils.colors.gris200,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 15,
        marginHorizontal: 30,
        alignItems: 'center'
    },
    image: {
        marginStart: 10,
        width: 30,
        height: 30
    },
    text: {
        fontSize: 17,
        color: utils.colors.gris300,
        marginStart: 10,
    }

});