import { Site } from "@contexts/visiteContext/domain/entity/Site";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as utils from '@utils/index';

interface Props {
    site: Site | undefined
}
export const PreviewAccompanion = (props: Props) => {
    return (
        <View style={styles.container}>
            {props.site ?
                <View>
                    <Text style={styles.code}>{props.site.reference}</Text>
                    <Text style={styles.name}>{props.site.name}</Text>
                </View> :
                <View style={styles.placeholder} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    code: {
        color: utils.colors.black,
        fontSize: 14,
        padding: 10,
        alignSelf: 'center'
    },
    name: {
        color: utils.colors.gray90,
        fontSize: 12,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    placeholder: {
        color: utils.colors.gray700,
        width: 100,
        borderTopWidth: 1,
        borderStyle: 'dashed',
        alignSelf: 'center',
        marginTop: 20
    }
})