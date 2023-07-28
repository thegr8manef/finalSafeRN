import {View, Text, Modal, StyleSheet, Image} from 'react-native';
import React from 'react';
import colors from '../../../../assets/colors';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native-gesture-handler';
import {Divider} from '../../../../assets/components/Divider';

interface Props {
  modalVisible: boolean;
  setWithNameVisibilty(visibilty: boolean): void;
}

export const SiteWithName = (props: Props) => {
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
              props.setWithNameVisibilty(false);
            }}>
            {t('txt_cancel')}
          </Text>
          <Text style={[styles.normalText, {fontWeight: 'bold', fontSize: 15}]}>
            {t('choisir_un_chantier')}
          </Text>
          <Text style={styles.normalText} />
        </View>
        <View style={styles.container}>
          <View style={styles.filter}>
            <Text style={styles.textFiletr}> {t('choisir_un_chantier')}</Text>
            <View style={styles.btnFilter}>
              <Text style={styles.textFiletr}> {t('txt.mes.chantier')}</Text>
              <Image
                source={require('../../../../assets/img/icn_filter_arrow.png')}
                style={styles.filterIcon}
              />
            </View>
          </View>
        </View>

        <Divider />
        <View style={styles.filterContainer}>
          <Image
            source={require('../../../../assets/img/icn_search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={t('txt.filter')}
            cursorColor={colors.primary}
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
    margin: 20,
  },
  filter: {
    flexDirection: 'row',
  },
  textFiletr: {
    color: colors.textColor,
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
    borderColor: colors.gray90,
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
