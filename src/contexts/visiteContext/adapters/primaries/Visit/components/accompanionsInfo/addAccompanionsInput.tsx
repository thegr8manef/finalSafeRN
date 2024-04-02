import React from 'react';
import * as utils from '@utils/index';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Pressable
} from 'react-native';
import { t } from 'i18next';
import { Accompagnants } from '@contexts/visiteContext/domain/entity/Accompagnant';
interface Props {
    selectAccompanions: Accompagnants[];
    ShowAddAccompanionsModal: () => void;
}
export const AddAccompanionsInput = (props: Props) => {
    return (
        <View style={styles.ContainerInput}>
            {props.selectAccompanions.length === 0 ? (
                <View style={styles.InputTextView}>
                    <Text style={styles.InputText}>{t('txt.selectionnez.accompagnat')}</Text>
                </View>) : (
                <View style={styles.InputTextView}>

                    <Text style={styles.InputText}>
                        {/* {[props.selectAccompanions[0].fn]+' '+[props.selectAccompanions[0].ln].join(', ')} */}
                        {props.selectAccompanions.map(acc => acc.fn+' '+acc.ln+', ')}
                    </Text>

                </View>
            )}
            <Pressable style={styles.InputIconView} onPress={props.ShowAddAccompanionsModal}>
                <Image style={styles.Icon} source={utils.images.btn_add}></Image>
            </Pressable>
        </View>
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
