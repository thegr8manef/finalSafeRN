import React from 'react';
import * as utils from '@utils/index';
import {
    StyleSheet,
    View,
    Alert,
    Text,
    Image
} from 'react-native';
import { AccompanionsInput } from './accompanionsInputInfo';
interface Props {
    ShowListAccompanions: () => void;
}
export const AccompanionsInfo= (props: Props) => {
    return (
            <View style={styles.Container}>
                <View style={styles.ContainerText}>
                <Text style={styles.Text}>Accompanying persons</Text>
                </View>
                    <AccompanionsInput ShowListAccompanions={props.ShowListAccompanions} />
            </View>
    );
};

const styles = StyleSheet.create({
    Container:{
        height:120,
    },
    ContainerText:{
        height:50,
    },
    ContainerInput:{
        height:50,
        borderColor : utils.colors.gris100,
        borderWidth: 2,
        marginHorizontal:10,
        flexDirection:'row',
        borderRadius:5,
        alignItems: 'center'
    },
    Text:{
        color: utils.colors.gris200,
        margin:15,
        fontSize: 15
    },
    InputTextView: {
        flex:2,
        marginStart:10,
        },
    Icon :{
        width: 10,
        height:20
    },
    InputText: {
        color: utils.colors.black,
        fontWeight:'400',
        fontSize:17,
        },
    InputIconView :{
    flex:0.1,
    marginEnd: 10
    }
});
