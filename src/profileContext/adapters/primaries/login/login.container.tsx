import {View, Text, Image, Pressable, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/configuration/navigation.types';
import {Profile} from '../../../domain/entity/profile';
import * as utils from '../../../../utils';
import {LANGUAGE_CONSTANTS} from '../../../../common/constants';
import styles from './login.style';

interface Props {
  loading: boolean;
  error: string | undefined;
  profile: Profile | undefined;
  login: () => void;
  navigation: StackNavigationProp<StackParamList>;
}

export const LoginContainer = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('');
  const [mounted, setMounted] = useState(false);
  const {t, i18n} = useTranslation();
  const [items, setItems] = useState(LANGUAGE_CONSTANTS);

  useEffect(() => {
    setMounted(true);
    if (props.profile != undefined) {
      props.navigation.replace('Profile');
    }
    if (!mounted) {
      getData();
    }
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('language');
      if (value !== null) {
        setLanguage(value);
      } else {
        setLanguage('Français');
      }
    } catch (e) {}
  };

  const changeLanguage = async () => {
    try {
      i18n.changeLanguage(language);
      await AsyncStorage.setItem('language', language);
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <DropDownPicker
          open={open}
          value={language}
          items={items}
          setOpen={setOpen}
          setValue={setLanguage}
          setItems={setItems}
          onChangeValue={changeLanguage}
          style={styles.dropDownPicker}
          containerStyle={styles.dropDownPickerContainer}
          placeholder={language}
          disableBorderRadius={false}
          dropDownContainerStyle={styles.dropDownPicker}
        />
      </View>

      <View style={styles.mainContainer}>
        <Image source={utils.images.splashSLogo} style={styles.logoImage} />

        <Text style={styles.description}>{t('sso_description')}</Text>
      </View>
      <ActivityIndicator
        size="large"
        color={utils.colors.primary}
        style={{display: props.loading ? 'flex' : 'none'}}
      />
      <View style={styles.bottomContainer}>
        <Pressable
          onPress={() => {
            props.login();
          }}
          style={[styles.button, {display: props.loading ? 'none' : 'flex'}]}>
          <Text style={styles.btnText}>{t('action_sign_in')}</Text>
        </Pressable>

        <Image source={utils.images.eiffageLogo} style={styles.eiffageLogo} />
      </View>
    </View>
  );
};
