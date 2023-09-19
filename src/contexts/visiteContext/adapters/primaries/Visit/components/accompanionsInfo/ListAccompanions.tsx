import React, { useState } from 'react';
import { Modal, StyleSheet, View, TextInput, Alert, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { HeaderModal } from '../../../components/HeaderModal';
import { WarringTextView } from '../../../Visit/components/warringTextView';
interface Props {
    accompanying: any[];
    selectedItems: string[];
    setSelectedItems: (selectedItems: string[]) => void;
}

export const ListAccoumpanions = (props: Props) => {
    const { t } = useTranslation();

    type ItemProps = { Name: string; reference: string };


    const toggleItemSelection = (itemId: string) => {
        if (props.selectedItems.includes(itemId)) {
            props.setSelectedItems(props.selectedItems.filter((name) => name !== itemId));
        } else {
            props.setSelectedItems([...props.selectedItems, itemId]);
        }
    };

    const Item = ({ Name, reference }: ItemProps) => (
        <TouchableOpacity
            style={
                styles.item}
            onPress={() => toggleItemSelection(Name)}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 5 }}>
                <View>
                    <Text style={styles.name}>
                        {Name}
                    </Text>
                    <Text
                        style={
                            styles.reference
                        }
                    >
                        {reference}
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                {props.selectedItems.includes(Name) && (
                    <Image
                        source={utils.images.checkmarkIcon}
                        style={{ width: 30, height: 30, alignSelf: 'center', margin: 20 }}
                    />
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <WarringTextView WarringTest={t('txt.consult.or.raise.rq')} />
            <FlatList
                data={props.accompanying}
                renderItem={({ item }) => <Item Name={item.Name} reference={item.reference} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        shadowColor: '#000',
        flex: 1,
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
        height: 70,
        flex: 1,
        borderBottomColor: utils.colors.gray90,
        borderTopColor: utils.colors.gray90,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        flexDirection: 'row',

    },
    name: {
        color: utils.colors.black,
        fontSize: 16,
        marginStart: 15,

    },
    reference: {
        color: utils.colors.gray700,
        fontSize: 16,
        marginStart: 15,

    },
});