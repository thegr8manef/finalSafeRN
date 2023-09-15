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
interface Props {
    ShowListAccompanions: () => void;
}
export const AccompanionsInput= (props: Props) => {
    return (
                <TouchableOpacity onPress={props.ShowListAccompanions} style={styles.ContainerInput}>
                    <View style={styles.InputTextView}>
                        <Text style={styles.InputText}>Select the accompanying person(s)</Text>
                    </View>
                    <View style={styles.InputIconView}>
                        <Image style={styles.Icon} source={utils.images.arrow_right}></Image>
                    </View>
                    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    ContainerInput:{
        height:50,
        borderColor : utils.colors.gris100,
        borderWidth: 2,
        marginHorizontal:10,
        flexDirection:'row',
        borderRadius:5,
        alignItems: 'center'
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
