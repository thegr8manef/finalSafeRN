import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as utils from '@utils/index';

interface Props {
    status: boolean;
    onPress: () => void;
}
export const ObservationNegative = (props: Props) => {
    const { t } = useTranslation();
    return (
        <TouchableOpacity
            testID="negative-observation-btn"
            onPress={props.onPress}
            style={styles.container}>
            <View style={styles.imageContent}>
                <Image
                    testID="negative-img-observation-btn"
                    source={utils.images.NegDisabledIcon}
                    style={props.status ? styles.activeLogo : styles.inactiveLogo}
                />
            </View>
            <View style={styles.description}>
                <Text style={props.status ? styles.activeText : styles.inactiveText}>
                    {t('observation_negative')}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    imageContent: {
        flex: 2,
    },
    description: {
        flex: 1,
    },
    inactiveLogo: {
        height: '40%',
        resizeMode: 'contain',
        marginTop: '16%',
        alignSelf: 'center',
        tintColor: utils.colors.gris200,
    },
    activeLogo: {
        height: '40%',
        resizeMode: 'contain',
        marginTop: '16%',
        alignSelf: 'center',
        tintColor: 'red',
    },
    activeText: {
        color: utils.colors.textColor,
        textAlign: 'center',
        fontWeight: '500',
    },
    inactiveText: {
        color: utils.colors.gris300,
        textAlign: 'center',
    },
    container: { flex: 1, backgroundColor: utils.colors.griy500 },
});
