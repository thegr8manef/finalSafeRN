import React from 'react';
import * as utils from '@utils/index';
import {
    StyleSheet,
    View,
    Alert,
    Text,
    Image,
    Pressable
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { t } from 'i18next';
interface Props {
    selectAccompanions: string[];
    ShowAddAccompanionsModal: () => void;
}
export const AddAccompanionsInput = (props: Props) => {
    return (
        <Pressable onPress={props.ShowAddAccompanionsModal} style={styles.ContainerInput}>
            {props.selectAccompanions.length === 0 ? (<View style={styles.InputTextView}>
                <Text style={styles.InputText}>{t('txt.selectionnez.accompagnat')}</Text>
            </View>) : (
                <View style={styles.InputTextView}>

                    <Text style={styles.InputText}>
                        {props.selectAccompanions.join(', ')}
                    </Text>

                </View>
            )}
            <View style={styles.InputIconView}>
                <Image style={styles.Icon} source={utils.images.btn_add}></Image>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    ContainerInput: {
        height: 50,
        borderColor: utils.colors.gris100,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center'
    },
    InputTextView: {
        flex: 2,
        marginStart: 10,
    },
    Icon: {
        width: '100%',
        height: '100%'
    },
    InputText: {
        color: utils.colors.gris100,
        fontWeight: '400',
        fontSize: 15,
    },
    InputIconView: {
        flex: 0.25,
    }
});
