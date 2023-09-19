import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import * as utils from '@utils/index';
import { ButtonCollapse } from './buttonCollapse';
import { t } from 'i18next';
interface Props {
    toggleCollapse: () => void;
    site: string;
    accompagnatsList: any[];
    date:string;
    comment:string;

}
export const AfterCollapse = (props: Props) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={utils.images.addhierarchicalIcon} style={styles.image} />
            </View>
            <View>
                <Text style={styles.text}>Hierarchical Visit</Text>
            </View>
            <View>
                <Text style={styles.textDescription}>Site</Text>
            </View>
            <View>
                <Text style={styles.textSite}>{props.site}</Text>
            </View>
            <View>
                <Text style={styles.textDescription}>{t('txt.accompagnats')}</Text>
            </View>
            <View>
                <Text style={styles.textSite}>{props.accompagnatsList.map((item) => item).join(', ')}</Text>
            </View>
            <View>
                <Text style={styles.textDescription}>{t('txt.date.operation')}</Text>
            </View>
            <View>
                <Text style={styles.textSite}>{props.date}</Text>
            </View>
            <View>
                <Text style={styles.textDescription}>{t('txt.informations.complementaires')}</Text>
            </View>
            <View>
                <Text style={styles.textSite}>{props.comment}</Text>
            </View>
            <ButtonCollapse toggleCollapse={props.toggleCollapse} stat={'collapse'} />
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
    },
    textSite: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 14,
        color: utils.colors.black
    }
});