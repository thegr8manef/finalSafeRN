import React, { useState } from 'react';
import { Modal, StyleSheet, View, TextInput, Alert, Text, Image, FlatList } from 'react-native';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { HeaderModal } from '../../../components/HeaderModal';
import { WarringTextView } from '../../../Visit/components/warringTextView';
interface Props {
    visible: boolean;
    onClose: () => void;
    title: string;
    observationToBeLifted: any[]
}

export const ObservationToBeLiftedModal = (props: Props) => {
    const { t } = useTranslation();
    type ItemProps = { title: string, date: string };

    const Item = ({ title, date }: ItemProps) => (
        <View style={styles.item}>
            <View style={{ flexDirection: 'column', marginStart: 10}}>
                <Text style={styles.title_item}>{title}</Text>
                <Image source={utils.images.flashcon} style={styles.img_flash} />
            </View>
            <View style={{ flex: 3}}></View>
            <View style={{  marginEnd: 10}}>
                <Text style={styles.date_item}>{date}</Text>
                </View>
                <View style={{alignContent:'center',alignItems:'center',alignSelf:'center',marginEnd:10}}>
                <Image source={utils.images.arrow_right} style={styles.btn_ajout} />
            </View>
        </View>
    );
    return (
        <Modal
            testID="modal"
            animationType="slide"
            transparent={true}
            visible={props.visible}>
            <View style={styles.container}>
                <HeaderModal
                    title={props.title}
                    leftLabel={t('txt.annuler')!!}
                    onLeftPress={() => props.onClose()}
                />
                <WarringTextView WarringTest={t('txt.consult.or.raise.rq')} />
                <FlatList
                    data={props.observationToBeLifted}
                    renderItem={({ item }) => <Item title={item.title} date={item.date} />}
                    keyExtractor={item => item.id}
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
        margin: 12,
        borderBottomWidth: 2,
        borderBottomColor: utils.colors.primary,
        padding: 10,
        marginTop: 20,
    },
    item: {
        width: '100%',
        height: 80,
        flex: 1,
        borderBottomColor: utils.colors.gray90,
        borderTopColor: utils.colors.gray90,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    title_item: {
        color: utils.colors.black,
        flex: 3,
        fontWeight: '700',
        fontSize: 16,
    },
    date_item: {
        color: utils.colors.gray700,
        flex: 3,
        fontSize: 13,
    },
    img_flash: {
        width: 20,
        height: 20,
        alignSelf: 'center',
        marginEnd: 10,
        tintColor: utils.colors.red
    },
    btn_ajout: {
        width: 10,
        height: 20,
        alignSelf: 'center',
    }
});
