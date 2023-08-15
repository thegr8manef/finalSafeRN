import * as utils from '@utils/index';
import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    label: string
    icon: ImageSourcePropType
    onPress: () => void
}
export const SearchSiteItem = (props: Props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.onPress}>
            <View style={styles.content}>
                <Image source={props.icon} style={styles.image} />
                <Text style={styles.label}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        borderColor: utils.colors.gris,
        borderWidth: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: 20,
        width: '18%',
        height: '30%',
        resizeMode: 'contain',
    },
    label: {
        color: utils.colors.textColor,
        padding: 3,
        textAlign: 'center',
        flex: 1,
    }
})