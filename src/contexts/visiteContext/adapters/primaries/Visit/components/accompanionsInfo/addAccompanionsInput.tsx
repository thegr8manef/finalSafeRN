import React from 'react';
import * as utils from '@utils/index';
import {
    StyleSheet,
    View,
    Alert,
    Text,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { t } from 'i18next';
interface Props {
    selectAccompanions : Site | undefined;
    ShowAddAccompanionsModal: () => void;
}
export const AddAccompanionsInput= (props: Props) => {
    return (
                <TouchableOpacity onPress={props.ShowAddAccompanionsModal} style={styles.ContainerInput}>
{props.selectAccompanions === undefined         ?           (<View style={styles.InputTextView}>
                        <Text style={styles.InputText}>{t('txt.selectionnez.accompagnat')}</Text>
                    </View>) : (
                        <View style={styles.InputTextView}>
                        <Text style={styles.InputText}>{props.selectAccompanions.name}</Text>
                    </View>
                    )}
                    <View style={styles.InputIconView}>
                        <Image style={styles.Icon} source={utils.images.btn_add}></Image>
                    </View>
                    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    ContainerInput:{
        height:50,
        borderColor : utils.colors.gris100,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection:'row',
        borderRadius:5,
        alignItems: 'center'
    },
    InputTextView: {
        flex:2,
        marginStart:10,
        },
    Icon :{
        width: '100%',
        height:'100%'
    },
    InputText: {
        color: utils.colors.gris100,
        fontWeight:'400',
        fontSize:15,
        },
    InputIconView :{
    flex:0.25,
    }
});
