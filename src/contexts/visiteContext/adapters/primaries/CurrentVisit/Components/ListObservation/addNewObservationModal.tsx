import React, { useState } from 'react';
import { Modal, StyleSheet, View, TextInput, Alert, Text, Image, Pressable, FlatList } from 'react-native';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { HeaderModal } from '../../../components/HeaderModal';
import { WarringTextView } from '../../../Visit/components/warringTextView';
import { SearchInputAccompanion } from '../../../Visit/components/accompanionsInfo/searchInputAccompanion';
import { TypeSelectionSites } from '../../../components/siteInfo/TypeSelectionSites';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommentInfo } from '../../../components/comment/commentInfo';
interface Props {
    visible: boolean;
    onClose: () => void;
    title: string;

}
export const AddNewObservationModal = (props: Props) => {
    const { t } = useTranslation();
    const [titleComment, setTitleComment] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    return (
        <Modal
            testID="modal"
            animationType="slide"
            transparent={true}
            visible={props.visible}>
            <View style={styles.container}>
                <HeaderModal
                    title={props.title}
                    leftLabel={t('flash_alert_button')!!}
                    onLeftPress={() => props.onClose()}
                />
            <CommentInfo comment={titleComment} setComment={(comment: string) => setTitleComment(comment)} title={t('txt.nouvelle.remarque')} label={t('txt.title')} />

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
});
