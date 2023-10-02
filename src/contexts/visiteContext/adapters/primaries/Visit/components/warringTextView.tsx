import React from 'react';
import * as utils from '@utils/index';
import {
    StyleSheet,
    View,
    Alert,
    Text
} from 'react-native';
interface Props {
    WarringTest: string;
}
export const WarringTextView = (props: Props) => {
    return (
        <View style={styles.warringContainer}>
            <Text style={styles.warringText}>{props.WarringTest}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    warringContainer: {

        height: 30,
        backgroundColor: utils.colors.gray90,
    },
    warringText: {
        color: utils.colors.black,
        marginTop: 5,
        marginStart: 10,
        fontSize: 14
    },
});
