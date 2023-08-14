import {View, Text, Modal, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  modalVisible: boolean;
  setWithCodeVisibilty(visibilty: boolean): void;
  code: string;
  setCode: (CodeChantier: string) => void;
  setclicked: (clicked: boolean) => void;
  clicked: boolean;
  loading: boolean;
  codeExist: string | undefined;
}

export const SiteModalWithCode = (props: Props) => {
  const {t} = useTranslation();
  const SetVisibilty = (visibilty: boolean) => {
    props.setWithCodeVisibilty(visibilty);
  };
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
              [SetVisibilty(false)];
            }}>
            {t('txt_cancel')}
          </Text>
          <Text style={styles.centeredText}>
            {t('txt.code.chantier.no.star')}
          </Text>
          <Text
            style={styles.normalText}
            onPress={() => {
              if (props.code.length !== 0) {
                props.setclicked(true);
                props.clicked = true;
                if (props.codeExist === undefined) {
                  alert(t('no_cs_by_ref'));
                } else {
                  SetVisibilty(false);
                }
              } else {
                alert(t('error.point.empty'));
              }
            }}>
            {t('txt.valider')}
          </Text>
        </View>
        <View style={styles.container}>
          <Text>{t('txt.code.chantier')}</Text>
          <TextInput
            cursorColor={utils.colors.primary}
            value={props.code.toUpperCase()}
            onChangeText={CodeChantier => props.setCode(CodeChantier)}
          />
          <View
            style={styles.textInputBorder}></View>
        </View>
        <ActivityIndicator
          size="large"
          color={utils.colors.black}
          style={{display: props.loading ? 'flex' : 'none'}}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInputBorder: {
    height: 1, 
    backgroundColor: utils.colors.primary
  },
  centeredText:{
    fontWeight: 'bold', 
    fontSize: 15,
    color: utils.colors.textColor,
    height: '90%',
    marginTop: '10%',
    alignItems: 'center',
  },
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
    margin: 30,
  },
});
