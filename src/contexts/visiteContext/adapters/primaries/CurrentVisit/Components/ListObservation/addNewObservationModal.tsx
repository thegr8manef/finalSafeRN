import React, {useState} from 'react';
import {Alert, Modal, Pressable, StyleSheet, View} from 'react-native';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
import {HeaderModal} from '../../../components/HeaderModal';
import {CommentInfo} from '../../../components/comment/commentInfo';
import {AddNewObservationGroupItem} from './addNewObservationGroupItem';
import {PreviewImages} from '../../../components/images/previewImages';
import {Photo} from '@contexts/visiteContext/domain/entity/Photo';
import {BottomFooter} from '../../../components/BottomFooter';
import {chooseImage, launchCamera} from '@utils/utilsCamera';
import {isDisplayZoomed} from 'react-native-device-info';
import {VisitObservation} from '@contexts/visiteContext/domain/entity/VisitsObservation';
import {generateID} from '@utils/utils';
interface Props {
  visible: boolean;
  onClose: () => void;
  title: string;
  observationTitle: string;
  titleComment: string;
  setTitleComment: (titleComment: string) => void;
  comment: string;
  setComment: (comment: string) => void;
  images: Photo[];
  setImages: (images: Photo[]) => void;
  responseId: Number;
  setResponseId: (responseId: Number) => void;
  idRemarque: string;
  idVisits: string;
}
export const AddNewObservationModal = (props: Props) => {
  const {t} = useTranslation();
  //const [titleComment, setTitleComment] = useState<string>('');
  //const [comment, setComment] = useState<string>('');
  const [isClickedConform, setIsClickedConform] = useState(true);
  const [isClickedNonConform, setIsClickedNonConform] = useState(true);
  const [isClickedSO, setIsClickedSO] = useState(true);
  //const [images, setImages] = useState<Photo[]>([]);

  const content = [
    {
      type: 'image',
      source: utils.images.takePhotoIcon,
      onPress: () => {
        captureImage(); /* Handle image press */
      },
    },
    {
      type: 'image',
      source: utils.images.fileIcon,
      onPress: () => {
        chooseFile(); /* Handle image press */
      },
    },
  ];
  const addImage = (image: Photo) => {
    props.setImages([...props.images, image]);
  };
  const captureImage = async () => {
    launchCamera()
      .then(data => {
        if (data.assets && data.assets.length > 0 && data.assets[0].uri)
          var image = new Photo(
            generateID(),
            data.assets[0].fileName,
            data.assets[0].uri,
            props.idRemarque,
            props.idVisits,
            false,
            0,
            'test-id-formation',
            false,
            false,
            0,
          );
        addImage(image!!);
      })
      .catch(error => {
        // Handle errors here
      });
  };

  const chooseFile = () => {
    chooseImage().then(data => {
      if (data.getParts()?.length > 0) {
        var image = new Photo(
          generateID(),
          data.getParts()[0]?.fileName,
          data.getParts()[0]?.uri,
          props.idRemarque,
          props.idVisits,
          false,
          0,
          'test-id-formation',
          false,
          false,
          0,
        );
        addImage(image!!);
      }
    });
  };

  const onCheckConform = () => {
    setIsClickedConform(!isClickedConform);
    setIsClickedNonConform(true);
    setIsClickedSO(true);
    props.setResponseId(1);
  };
  const onCheckNonConform = () => {
    setIsClickedConform(true);
    setIsClickedNonConform(!isClickedNonConform);
    setIsClickedSO(true);
    props.setResponseId(0);
  };
  const onCheckSO = () => {
    setIsClickedConform(true);
    setIsClickedNonConform(true);
    setIsClickedSO(!isClickedSO);
    props.setResponseId(2);
  };
  const saveObservation = () => {
    if (verification()) {
      props.onClose();
    }
  };
  const verification = (): boolean => {
    if (props.responseId === 4) {
      Alert.alert('', t('txt.veuillez.ajouter.observation')!);
      return false;
    } else {
      if (
        props.observationTitle.length === 0 &&
        props.titleComment.length === 0
      ) {
        Alert.alert('', t('msg.saisr.commentaires.flash')!);
        return false;
      } else {
        if (props.comment.length === 0) {
          Alert.alert('', t('msg.saisr.commentaires.flash')!);
          return false;
        } else {
          return true;
        }
      }
    }
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
        {props.observationTitle.length > 0 ? (
          <View style={styles.Non_clickable_container}>
            <CommentInfo
              comment={props.observationTitle}
              setComment={null}
              title={t('txt.nouvelle.remarque')}
              label={t('txt.title')}
            />
          </View>
        ) : (
          <CommentInfo
            comment={props.titleComment}
            setComment={(comment: string) => props.setTitleComment(comment)}
            title={t('txt.nouvelle.remarque')}
            label={t('txt.title')}
          />
        )}
        <AddNewObservationGroupItem
          onCheckConform={() => onCheckConform()}
          onCheckNonConform={() => onCheckNonConform()}
          onCheckSO={() => onCheckSO()}
          is_clicked_conforme={isClickedConform}
          is_clicked_non_conforme={isClickedNonConform}
          is_clicked_sans_objet={isClickedSO}
        />
        <CommentInfo
          comment={props.comment}
          setComment={(comment: string) => props.setComment(comment)}
          title={t('txt.commentaires.without.start')}
          label={t('txt.commentaires.without.start')}
        />
        <PreviewImages images={props.images} />
        <BottomFooter
          confirmPress={() => saveObservation()}
          confirmText={t('txt.creez.remarque')}
          content={content}
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
  Non_clickable_container: {
    backgroundColor: 'white',
    pointerEvents: 'none',
  },
});
