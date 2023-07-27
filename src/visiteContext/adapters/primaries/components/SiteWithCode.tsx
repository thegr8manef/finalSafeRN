import {View, Text, Modal, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../../../assets/colors';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  modalVisible: boolean;
  setWithCodeVisibilty(visibilty: boolean): void;
}

export const SiteWithCode = (props: Props) => {
  const {t} = useTranslation();

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
        <View style={styles.container}>
          <Text>{t('txt.code.chantier')}</Text>
          <TextInput cursorColor={colors.primary} />
          <View style={{height: 1, backgroundColor: colors.primary}} />
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
    height: 70,
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
  container: {
    margin: 30,
  },
});
