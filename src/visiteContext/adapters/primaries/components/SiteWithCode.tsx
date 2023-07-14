import {View, Text, Modal, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import colors from '../../../../assets/colors';
import {HeaderModal} from './HeaderModal';
import {useTranslation} from 'react-i18next';

interface Props {
  modalVisible: boolean;
  setWithCodeVisibilty(visibilty: boolean): void;
}

export const SiteWithCode = (props: Props) => {
  const {t} = useTranslation();
  //   const [modalVisible, setModalVisible] = useState(props.modalVisible);
  useEffect(() => {
    console.log(props.modalVisible);
  });
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.header}>
          <Text
            style={styles.normalText}
            onPress={() => {
              props.setWithCodeVisibilty(false);
            }}>
            {t('txt_cancel')}
          </Text>
          <Text style={[styles.normalText, {fontWeight: 'bold', fontSize: 15}]}>
            {t('txt.code.chantier.no.star')}
          </Text>
          <Text style={styles.normalText}>{t('txt.valider')}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  header: {
    height: '10%',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  normalText: {
    color: colors.textColor,
    height: '90%',
    marginTop: '10%',
    alignItems: 'center',
  },
});
