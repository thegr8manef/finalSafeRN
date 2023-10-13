import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { HeaderModal } from '../../../components/HeaderModal';
import { CommentInfo } from '../../../components/comment/commentInfo';
import { AddNewObservationGroupItem } from './addNewObservationGroupItem';
import { PreviewImages } from '../../../components/images/previewImages';
import { Photo } from '@contexts/visiteContext/domain/entity/Photo';
import { BottomFooter } from '../../../components/BottomFooter';
import { chooseImage, launchCamera } from '@utils/utilsCamera';
import { isDisplayZoomed } from 'react-native-device-info';
interface Props {
    visible: boolean;
    onClose: () => void;
    title: string;
    observationTitle: string;

}
export const AddNewObservationModal = (props: Props) => {
    const { t } = useTranslation();
    const [titleComment, setTitleComment] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [isClickedConform, setIsClickedConform] = useState(true);
    const [isClickedNonConform, setIsClickedNonConform] = useState(true);
    const [isClickedSO, setIsClickedSO] = useState(true);
    const [images, setImages] = useState<Photo[]>([]);

    const content = [
        { type: "image", source: utils.images.takePhotoIcon, onPress: () => { console.log('take photo') /* Handle image press */ } },
        { type: "image", source: utils.images.fileIcon, onPress: () => { console.log('choose photo')/* Handle image press */ } },
    ];

    const onCheckConform = () => {
        setIsClickedConform(!isClickedConform);
        setIsClickedNonConform(true);
        setIsClickedSO(true);
    };
    const onCheckNonConform = () => {
        setIsClickedConform(true);
        setIsClickedNonConform(!isClickedNonConform);
        setIsClickedSO(true);
    };
    const onCheckSO = () => {
        setIsClickedConform(true);
        setIsClickedNonConform(true);
        setIsClickedSO(!isClickedSO);
    };
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
                {props.observationTitle.length > 0 ? (<View style={styles.Non_clickable_container}>
                    <CommentInfo comment={props.observationTitle} setComment={null} title={t('txt.nouvelle.remarque')} label={t('txt.title')} />
                </View>)
                    : (
                        <CommentInfo comment={titleComment} setComment={(comment: string) => setTitleComment(comment)} title={t('txt.nouvelle.remarque')} label={t('txt.title')} />
                    )}
                <AddNewObservationGroupItem onCheckConform={() => onCheckConform()} onCheckNonConform={() => onCheckNonConform()} onCheckSO={() => onCheckSO()} is_clicked_conforme={isClickedConform} is_clicked_non_conforme={isClickedNonConform} is_clicked_sans_objet={isClickedSO} />
                <CommentInfo comment={comment} setComment={(comment: string) => setComment(comment)} title={t('txt.commentaires.without.start')} label={t('txt.commentaires.without.start')} />
                <PreviewImages images={images} />
                <BottomFooter confirmPress={() => console.log('create observation')} confirmText={t('txt.creez.remarque')} content={content} />
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
    Non_clickable_container: {
        backgroundColor: 'white',
        pointerEvents: 'none'
    },
});

