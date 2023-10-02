import React, { useState } from 'react';
import { Modal, StyleSheet, View, TextInput, Alert, Text, Image, FlatList, Pressable } from 'react-native';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { HeaderModal } from '../../../components/HeaderModal';
import { WarringTextView } from '../../../Visit/components/warringTextView';
interface Props {
    visible: boolean;
    onClose: () => void;
    title: string;
    StrongPointsList: any[];
    AddNewStrongPointsModal: () => void;
}

export const StrongPointsModal = (props: Props) => {
    const { t } = useTranslation();
    type ItemProps = { title: string, date: string };

    const Item = ({ title, date }: ItemProps) => (
        <View style={styles.item}>
            <View style={{ flexDirection: 'column', marginStart: 10 }}>
                <Text style={styles.title_item}>{title}</Text>
                <Image source={utils.images.flashcon} style={styles.img_flash} />
            </View>
            <View style={{ flex: 3 }}></View>
            <View style={{ marginEnd: 10 }}>
                <Text style={styles.date_item}>{date}</Text>
            </View>
            <View style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginEnd: 10 }}>
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
                <WarringTextView WarringTest={t('txt.add.edit.strong.point')} />
                {props.StrongPointsList === null ? (<FlatList
                    data={props.StrongPointsList}
                    renderItem={({ item }) => <Item title={item.title} date={item.date} />}
                    keyExtractor={item => item.id}
                />) : (<View style={styles.view_no_strong_point}><Text style={styles.no_strong_point}  >{t('text.positive.points.empty')}</Text></View>)}
                <Pressable style={styles.footer} onPress={props.AddNewStrongPointsModal}>
                    <Image source={utils.images.btn_add_circle} style={styles.image_add} />
                    <Text style={styles.text_add}>{t('txt.create.new.strong.point')}</Text>
                </Pressable>
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
    },
    footer: {
        backgroundColor: utils.colors.gray90,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image_add: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginVertical: -25
    },
    text_add: {
        fontSize: 15,
        color: utils.colors.black,
        marginVertical: 10,
        fontWeight: '700'
    },
    no_strong_point: {
        flex:1,
        textAlignVertical:'center',
        textAlign:'center',
        fontSize:20,
        color:utils.colors.gris200,
    },
    view_no_strong_point: {
        flex:1,
    
    },
    
});
