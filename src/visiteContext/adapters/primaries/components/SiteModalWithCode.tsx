import {View, Text, Modal, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import colors from '../../../../assets/colors';
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
  const SetVisibilty = (visibilty : boolean) => {
props.setWithCodeVisibilty(visibilty)
  }
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
          <Text style={[styles.normalText, {fontWeight: 'bold', fontSize: 15}]}>
            {t('txt.code.chantier.no.star')}
          </Text>
          <Text
            style={styles.normalText}
            onPress={() => {
              // props.code.length !== 0
              //   ? [props.setclicked(true), (props.clicked = true),{props.loading === false ? alert(t('this code isn't exist')) : [props.setWithCodeVisibilty(false)] }]
              //   : alert(t('error.point.empty'));
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
            cursorColor={colors.primary}
            value={props.code.toUpperCase()}
            onChangeText={CodeChantier => props.setCode(CodeChantier)}
          />
          <View style={{height: 1, backgroundColor: colors.primary}}></View>
        </View>
        <ActivityIndicator
          size="large"
          color={colors.black}
          style={{display: !props.loading ? 'flex' : 'none'}}
        />
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
