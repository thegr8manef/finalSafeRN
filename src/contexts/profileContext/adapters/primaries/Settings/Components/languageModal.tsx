import React, {useState} from 'react';
import {Modal, StyleSheet, View, TextInput, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
import { HeaderModal } from '@contexts/visiteContext/adapters/primaries/components/HeaderModal';
import DropDownPicker from 'react-native-dropdown-picker';
import { LANGUAGE_CONSTANTS } from '@common/constants';
interface Props {
  visible: boolean;
  onClose: () => void;
}

export const LanguageModal = (props: Props) => {
    const [language, setLanguage] = useState(null);
    const [open, setOpen] = useState(true);
    const [items, setItems] = useState(LANGUAGE_CONSTANTS);
    const {t, i18n} = useTranslation();


  const changeLanguage = async () => {
    try {
      i18n.changeLanguage(language!!);
      await AsyncStorage.setItem('language', language!!);
      props.onClose();
    } catch (e) { }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}>
      <View style={styles.container}>
        <HeaderModal
          title={t('txt.language.switch')}
          rightLabel={t('txt.fermer')!}
          onRightPress={() => props.onClose() } 
          leftLabel={''}        />
          <DropDownPicker
          open={true}
          value={language}
          items={items}
          setOpen={setOpen}
          setValue={setLanguage}
          setItems={setItems}
          onChangeValue={changeLanguage}
          style={styles.dropDownPicker}
          containerStyle={styles.dropDownPickerContainer}
          disableBorderRadius={false}
          dropDownContainerStyle={styles.dropDownPicker}
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
  
  dropDownPicker: {
    width: '100%',
    backgroundColor: utils.colors.white,
    borderWidth: 0,
  },

  dropDownPickerContainer: {
    width: '100%',
    height: '100%',
    borderColor: utils.colors.default,
    border: 0,
    backgroundColor: utils.colors.default,
  },

});
