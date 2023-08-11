import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../../assets/colors';
import {useTranslation} from 'react-i18next';
import {SiteModalWithCode} from './SiteModalWithCode';
import {SiteModalWithName} from './SiteModalWithName';
interface Props {
  setcodeByChantier: (CodeChantier: string) => void;
  codeByChantier: string | undefined;
  setclicked: (clicked: boolean) => void;
  clicked: boolean;
  codeExist: string | undefined;
  nom_chantier: string | undefined;
  loading: boolean;
}

export const SitesList = (props: Props) => {
  const {t} = useTranslation();
  const [withCodeVisibilty, setWithCodeVisibilty] = useState(false);
  const [withNameVisibilty, setWithNameVisibilty] = useState(false);
  return (
    <View style={styles.big_container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() => {
            setWithCodeVisibilty(true);
          }}>
          <View style={styles.siteContainer}>
            <Image
              source={require('../../../../assets/img/icon_saisie.png')}
              style={styles.img}
            />
            <Text testID='code_chantier_btn' style={styles.label}>{t('code_chantier_btn')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() => {
            setWithNameVisibilty(true);
          }}>
          <View style={styles.siteContainer}>
            <Image
              source={require('../../../../assets/img/icon_chantier.png')}
              style={styles.img}
            />
            <Text testID='chantier_de_mon_perimetre' style={styles.label}>{t('chantier_de_mon_perimetre')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableContainer}>
          <View style={styles.siteContainer}>
            <Image
              source={require('../../../../assets/img/icon_qr_code.png')}
              style={[styles.img, {width: '25%'}]}
            />
            <Text testID='qr_code' style={styles.label}>{t('qr_code')}</Text>
          </View>
        </TouchableOpacity>

        <SiteModalWithCode
          modalVisible={withCodeVisibilty}
          setWithCodeVisibilty={setWithCodeVisibilty}
          code={props.codeByChantier}
          setCode={props.setcodeByChantier}
          setclicked={props.setclicked}
          clicked={props.clicked}
          loading={props.loading}
          codeExist={props.codeExist}
        />
        <SiteModalWithName
          modalVisible={withNameVisibilty}
          setWithNameVisibilty={setWithNameVisibilty}
        />
      </View>
      <View style={styles.infoChantierContainer}>
        <View>
          {props.codeExist === undefined ? (
            <View style={styles.container_divider} />
          ) : (
            <View>
              <Text style={styles.textCodeChantier}>
                {props.codeByChantier}
              </Text>
              <Text style={styles.textNameChantier}>{props.nom_chantier}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  big_container: {
    flexDirection: 'column',
    flex: 5,
  },
  container: {
    flex: 2,
    flexDirection: 'row',
  },
  infoChantierContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  siteContainer: {
    flex: 1,
    borderColor: colors.gris,
    borderWidth: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableContainer: {
    flex: 1,
  },
  img: {
    marginTop: 20,
    width: '18%',
    height: '30%',

    resizeMode: 'stretch',
  },
  label: {
    color: colors.textColor,
    padding: 3,
    textAlign: 'center',
    flex: 1,
  },
  container_divider: {
    width: 100,
    borderTopWidth: 1,
    borderStyle: 'dashed',
  },
  textCodeChantier: {
    textAlign: 'center',
    color: colors.black,
    marginTop: 20,
    fontSize: 17,
  },
  textNameChantier: {
    textAlign: 'center',
    color: colors.gray700,
    marginTop: 10,
  },
});
