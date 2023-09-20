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
import { AddNewObservationGroupItem, AddNewObservationType } from './addNewObservationGroupItem';
import { PreviewImages } from '../../../components/images/previewImages';
import { Photo } from '@contexts/visiteContext/domain/entity/Photo';
import { BottomFooter } from '../../../components/BottomFooter';
interface Props {
    visible: boolean;
    onClose: () => void;
    title: string;

}
export const AddNewObservationModal = (props: Props) => {
    const { t } = useTranslation();
    const [titleComment, setTitleComment] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [isClickedShow, setIsClickedShow] = useState(false);
    const [images, setImages] = useState<Photo[]>([]);
    
    const content = [
        { type: "image", source: utils.images.takePhotoIcon, onPress: () => { captureImage() /* Handle image press */ } },
        { type: "image", source: utils.images.fileIcon, onPress: () => { chooseFile() /* Handle image press */ } },
      ];

    const addImage = (image: Photo) => {
        setImages([...images, image]);
    };


    const OnCheckItem = () => {
        setIsClickedShow(!isClickedShow);
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
                <CommentInfo comment={titleComment} setComment={(comment: string) => setTitleComment(comment)} title={t('txt.nouvelle.remarque')} label={t('txt.title')} />
                <AddNewObservationGroupItem onCheckItem={() => { OnCheckItem() }} is_clicked={isClickedShow} />
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
});
function captureImage() {
    throw new Error('Function not implemented.');
}

function chooseFile() {
    throw new Error('Function not implemented.');
}

