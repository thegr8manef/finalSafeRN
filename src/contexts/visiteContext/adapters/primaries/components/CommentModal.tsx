import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {HeaderModal} from './HeaderModal';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
interface Props {
  commentaires: string;
  setcommentaires: (text: string) => void;
}

export const CommentModal = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [empty, setEmpty] = React.useState(true);
  const {t} = useTranslation();
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <HeaderModal
              title={t('txt.commentaires.without.start')}
              leftLabel={t('txt.annuler')}
              rightLabel={t('txt.valider')}
              onRightPress={() => {
                if (props.commentaires.length !== 0) {
                  setModalVisible(!modalVisible);
                  setEmpty(false);
                } else Alert.alert(t('error.point.empty'));
              }}
              onLeftPress={() => {
                setModalVisible(!modalVisible);
                setEmpty(true);
                props.setcommentaires('');
              }}
            />
            <TextInput
              style={styles.input}
              onChangeText={text => props.setcommentaires(text)}
              value={props.commentaires}
              cursorColor={utils.colors.primary}
              placeholder={t('txt.commentaires')!!}
              keyboardType="web-search"
            />
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
        android_ripple={styles.androidRipple}>
        {!empty ? (
          <Text style={styles.commentDivider}>
            {props.commentaires}
          </Text>
        ) : (
          <Text style={styles.commentDivider}>
            {[null]}
          </Text>
        )}
        <Image source={utils.images.textareaIcon} style={styles.logoImage3} />
        <Image source={utils.images.dividerIcon} style={styles.logoImage4} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  androidRipple:{
    color: utils.colors.gris300
  },
  commentDivider: {
    marginBottom: '-4%', 
    marginLeft: '5%', 
    fontSize: 17
  },
  centeredView: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
  },
  button: {
    width: '99%',
    padding: 20,
    opacity: 1,
  },
  buttonOpen: {},
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
  },
  logoImage3: {
    width: 10,
    height: 10,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginEnd: '7%',
  },
  logoImage4: {
    width: '90%',
    height: '40%',
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginEnd: '7%',
    marginTop: 3,
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
