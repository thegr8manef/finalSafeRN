import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import * as utils from '@utils/index';
import { ButtonCollapse } from './buttonCollapse';
import { t } from 'i18next';
interface Props {
    toggleCollapse: () => void;
    site: string;
    date: string;
}
export const BeforeCollapse = (props: Props) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={utils.images.addhierarchicalIcon} style={styles.image} />
            </View>
            <View>
                <Text style={styles.text}>Hierarchical Visit</Text>
            </View>
            <View>
                <Text style={styles.textDescription}>{t('txt.chantier')+' '+props.site+ ' - '+ props.date}</Text>
            </View>
            <View></View>
            <ButtonCollapse toggleCollapse={props.toggleCollapse} stat={'expand'} />
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        flexDirection: 'column'
    },
    image: {
        width: 35,
        height: 35,
        alignSelf: 'center',
        marginTop: 10,
    },
    text: {
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: '700',
        fontSize: 16,
        color: utils.colors.black
    },
    textDescription: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 14,
        color: utils.colors.gray700
    }
});