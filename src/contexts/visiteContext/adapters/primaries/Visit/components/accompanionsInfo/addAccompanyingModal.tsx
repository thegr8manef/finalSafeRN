import React, { useState } from 'react';
import { View, Modal, StyleSheet, Alert, TextInput, Text } from 'react-native';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { HeaderModal } from '../../../components/HeaderModal';
import { WarringTextView } from '../warringTextView';


interface Props {
    modalVisible: boolean;
    onClose: () => void;
    accompanyingName: string;
    setAccompanyingName: (text: string) => void;
    label:string;

}
export const AddAccompanyingModal = (props: Props) => {
    const [accompanying, setAccompanying] = useState<string>(props.accompanyingName);
    const { t } = useTranslation();

    const saveAccompanyingPerson = () => {
        if (accompanying.length !== 0) {
            props.setAccompanyingName(accompanying);
            props.onClose();
        } else Alert.alert(t('txt.verfier.champs'));
    };

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.modalVisible}>
            <View style={styles.container} >
                <HeaderModal
                    title={t('txt.accompagnat')}
                    leftLabel={t('txt_cancel')!!}
                    onLeftPress={props.onClose}
                    rightLabel={t('txt.valider')!!}
                    onRightPress={() => saveAccompanyingPerson()} />
                <WarringTextView WarringTest={t('txt.ajouter.accompagant')} />
                <Text style={styles.text}>{t('txt.nom')}</Text>
                <TextInput
                    testID="text-input"
                    style={styles.input}
                    onChangeText={text => setAccompanying(text)}
                    value={accompanying}
                    cursorColor={utils.colors.primary}
                    placeholder={props.label}
                    keyboardType="web-search"
                />
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        shadowColor: '#000',
    },
    input: {
        height: 40,
        marginHorizontal:12,
        borderBottomWidth: 2,
        borderBottomColor: utils.colors.primary,

    },
    text:{
        fontSize:17,
        marginStart:12,
        marginTop:12
    }
});
