import React, { useState } from 'react';
import { Modal, StyleSheet, View, TextInput, Alert } from 'react-native';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { HeaderModal } from '../../../components/HeaderModal';
import { WarringTextView } from '../../../Visit/components/warringTextView';
interface Props {
    visible: boolean;
    onClose: () => void;
    title: string;
}

export const ObservationToBeLiftedModal = (props: Props) => {
    const { t } = useTranslation();

    return (
        <Modal
            testID="modal"
            animationType="slide"
            transparent={true}
            visible={props.visible}>
            <View style={styles.container}>
                <HeaderModal
                    title={props.title}
                    leftLabel={t('txt.annuler')}
                    onLeftPress={() => props.onClose()}
                />
                <WarringTextView WarringTest={t('txt.consult.or.raise.rq')} />

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
        margin: 12,
        borderBottomWidth: 2,
        borderBottomColor: utils.colors.primary,
        padding: 10,
        marginTop: 20,
    },
});
