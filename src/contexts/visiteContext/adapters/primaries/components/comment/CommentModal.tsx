import React, {useState} from 'react';
import {Modal, StyleSheet, View, TextInput, Alert} from 'react-native';
import {HeaderModal} from '../HeaderModal';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
interface Props {
  comment: string;
  setComment: (text: string) => void;
  visible: boolean;
  onClose: () => void;
}

export const CommentModal = (props: Props) => {
  const [comment, setComment] = useState<string>(props.comment);
  const {t} = useTranslation();

  const saveComment = () => {
    if (comment.length !== 0) {
      props.setComment(comment);
      props.onClose();
    } else Alert.alert(t('error.point.empty'));
  };

  return (
    <Modal
      testID="modal"
      animationType="slide"
      transparent={true}
      visible={props.visible}>
      <View style={styles.container}>
        <HeaderModal
          title={t('txt.commentaires.without.start')}
          leftLabel={t('txt.annuler')}
          rightLabel={t('txt.valider')!}
          onRightPress={() => saveComment()}
          onLeftPress={() => props.onClose()}
        />
        <TextInput
          testID="text-input"
          style={styles.input}
          onChangeText={text => setComment(text)}
          value={comment}
          cursorColor={utils.colors.primary}
          placeholder={t('txt.commentaires')!}
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
    margin: 12,
    borderBottomWidth: 2,
    borderBottomColor: utils.colors.primary,
    padding: 10,
    marginTop: 20,
  },
});
