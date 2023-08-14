import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import colors from '../../../../assets/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/configuration/navigation.types';
import {Chantier} from '../../../../common/adapters/secondaries/db/entity/Chantier';
import { Header } from '../../../../common/adapters/primaries/components/Header';

interface Props {
  navigation: StackNavigationProp<StackParamList>;

}
const HorizontalLine = (): JSX.Element => {
  return <View style={styles.horizontalLine} />;
};

export const VisitsContainer = (props: Props): JSX.Element => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Header title={t('txt.visites')} navigation={props.navigation} />

      <View style={styles.main}>
        <Text style={styles.txt_synchro}>{t('txt.aucune.synchro')}</Text>

        <View style={styles.synchroContainer}>
          <Text style={styles.visites_cloturees}>
            {t('txt.visites.cloturees')}
          </Text>
          <TouchableOpacity style={styles.btn_synchro}>
            <Text style={styles.txt_btn_synchro}>{t('txt.synchroniser')}</Text>
          </TouchableOpacity>
        </View>
        <HorizontalLine />

        <View style={styles.list_vists}>
          <Text>{t('txt.no.visit.clotured')}</Text>
        </View>
      </View>
      <HorizontalLine />
      <View style={styles.footer}>
        <Text style={styles.txt_new_visit}>{t('txt.creez.new.visite')}</Text>

        <View style={styles.visits_type}>
          <View style={styles.type_container}>
            <Image
              source={require('../../../../assets/img/icn_add_prevention.png')}
              style={styles.type_image}
            />
            <Text style={styles.type_title}>{t('txt.prevention')}</Text>
          </View>

          <View style={styles.type_container}>
            <Image
              source={require('../../../../assets/img/icn_add_conformite.png')}
              style={styles.type_image}
            />
            <Text style={styles.type_title}>{t('txt.conformite')}</Text>
          </View>

          <View style={styles.type_container}>
            <Image
              source={require('../../../../assets/img/icn_add_hierarchique.png')}
              style={styles.type_image}
            />
            <Text style={styles.type_title}>{t('txt.hierarchique')}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '8%',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sidbar_icn: {
    width: '100%',
    height: '30%',
    marginLeft: 30,
  },
  pressable_sidbar: {
    width: '12%',
  },
  page_title: {
    color: colors.textColor,
    fontSize: 25,
    marginLeft: '40%',
    fontWeight: '500',
  },
  pressable_flash: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  header_title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_icn_flash: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flash_icn: {
    width: '16%',
    height: '70%',
    resizeMode: 'stretch',
    marginRight: 25,
  },

  main: {
    flex: 5,
    backgroundColor: colors.white,
  },
  txt_synchro: {
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: colors.default,
  },

  footer: {
    flex: 1,
  },
  synchroContainer: {
    height: 50,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  visites_cloturees: {
    marginLeft: 20,
    fontSize: 15,
    color: colors.textColor,
  },

  txt_btn_synchro: {
    fontSize: 13,
    color: colors.textColor,
  },

  btn_synchro: {
    marginRight: 20,
    backgroundColor: colors.gris200,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 3,
  },

  horizontalLine: {
    borderBottomColor: colors.gris100,
    borderBottomWidth: 1,
  },
  list_vists: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt_new_visit: {
    color: colors.textColor,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  visits_type: {
    flex: 1,
    flexDirection: 'row',
  },

  type_container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  type_image: {
    width: '65%',
    height: '65%',
    resizeMode: 'contain',
  },

  type_title: {
    textAlign: 'center',
    color: colors.textColor,
    fontSize: 12,
    fontWeight: '400',
    marginTop: 10,
  },
});
