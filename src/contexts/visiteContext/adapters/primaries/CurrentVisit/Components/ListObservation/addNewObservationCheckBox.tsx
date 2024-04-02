import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import * as utils from '@utils/index';
import { t } from 'i18next';
import { } from 'react-native-svg';

interface Props {
    onCheckItem: () => void;
    clicked: boolean;
}
export const AddNewObservationCheckBox = (props: Props) => {
    return (
        <Pressable style={styles.container} onPress={props.onCheckItem}>
            {props.clicked ? (null) : (<Image source={utils.images.checkmarkIcon} style={styles.image} />)}
        </Pressable>
    );

};
const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 30,
        borderColor: utils.colors.gris200,
        borderWidth: 2,
        borderRadius: 3,
        left: 0,
    },
    image: {
        width: 25,
        height: 25,
        alignSelf: 'center',
    },
});