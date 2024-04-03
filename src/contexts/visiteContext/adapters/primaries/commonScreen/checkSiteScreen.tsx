import React, {useState} from 'react';
import {Modal, StyleSheet, View, TextInput, Alert} from 'react-native';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
import {Site} from '@contexts/visiteContext/domain/entity/Site';
import {HeaderModal} from '../components/HeaderModal';
import {TRANSLATE} from '@common/translateConstants';
import {SiteInfo} from '../components/siteInfo/siteInfo';
import {BottomFooter} from '../components/BottomFooter';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackParamList} from '@navigConfig/navigation.types';
import {Route} from '@navigConfig/routes';
import {StackNavigationProp} from '@react-navigation/stack';
interface Props {
  navigation: StackNavigationProp<StackParamList>;
}

export const CheckSiteScreen = (props: Props) => {
  const [selectedSite, setSelectedSite] = useState<Site | undefined>(undefined);
  const {t} = useTranslation();

  const {sites, title} =
    useRoute<RouteProp<StackParamList, Route.CheckSiteScreen>>().params;

  const handleNextStep = () => {
    props.navigation.navigate(Route.PreventionVisit, {
      selectedSite: selectedSite?.id!!,
      selectedSiteName: selectedSite?.name!!,
      selectedSiteRef: selectedSite?.reference!!,
    });
  };

  const validVisit = (): boolean => {
    if (selectedSite === undefined) {
      Alert.alert('', t(TRANSLATE.NO_QR_CODE)!);
      return false;
    } else {
      handleNextStep();
      return true;
    }
  };
  return (
    <View style={styles.container}>
      <HeaderModal
        title={t(title!!)}
        leftLabel={t(TRANSLATE.CANCEL)!!}
        onLeftPress={() => {
          console.log('I will go back ');
        }}
      />
      <SiteInfo
        sites={sites!!}
        selectedSite={selectedSite}
        setSelectedSite={setSelectedSite}
        selectedIdSite={selectedSite?.id!!}
      />
      <BottomFooter
        confirmPress={() => validVisit()}
        confirmText={t(TRANSLATE.NEXT)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: '5%',
  },
});
