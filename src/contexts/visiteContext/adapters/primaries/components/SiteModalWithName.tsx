import { View, Text, Modal, StyleSheet, Image, TextInput } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as utils from '@utils/index';
import {Divider} from '@common/adapters/primaries/components/Divider';

interface Props {
  modalVisible: boolean;
  setWithNameVisibilty(visibilty: boolean): void;
}
export const SiteModalWithName = (props: Props) => {
  const { t } = useTranslation();

  const SetVisibilty = (visibilty: boolean) => {
    props.setWithNameVisibilty(visibilty);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.header}>
          <Text
            testID='cancel-modal-btn'
            style={[styles.normalText, { flex: 1 }]}
            onPress={() => {
              SetVisibilty(false);
            }}>
            {t('txt_cancel')}
          </Text>
          <Text style={[styles.normalText, { fontWeight: 'bold', fontSize: 15, flex: 1.5 }]}>
            {t('choisir_un_chantier')}
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.filter}>
            <Text style={styles.textFiletr}> {t('choisir_un_chantier')}</Text>
            <View style={styles.btnFilter}>
              <Text style={styles.textFiletr}> {t('txt.mes.chantier')}</Text>
              <Image
                source={utils.images.filterArrowIcon}
                style={styles.filterIcon}
              />
            </View>
          </View>
        </View>

        <Divider />
        <View style={styles.filterContainer}>
          <Image source={utils.images.searchIcon} style={styles.searchIcon} />
          <TextInput
            testID='filter-input'
            style={styles.input}
            placeholder={t('txt.filter')}
            cursorColor={utils.colors.primary}
          />
        </View>
        <Divider />
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
    backgroundColor: utils.colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  normalText: {
    color: utils.colors.textColor,
    height: '90%',
    marginTop: '10%',
    alignItems: 'center',
  },
  container: {
    margin: 20,
  },
  filter: {
    flexDirection: 'row',
  },
  textFiletr: {
    color: utils.colors.textColor,
  },
  btnFilter: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  filterIcon: {
    width: 15,
    height: 10,
    marginLeft: 8,
    top: 7,
    resizeMode: 'stretch',
  },
  input: {
    borderColor: utils.colors.gray90,
    borderWidth: 1,
    margin: 20,
    flex: 1,
    paddingLeft: 40,
    fontSize: 15,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  searchIcon: {
    position: 'absolute',
    width: 20,
    height: 20,
    marginLeft: 30,
    resizeMode: 'stretch',
    top: '37%',
  },
});
