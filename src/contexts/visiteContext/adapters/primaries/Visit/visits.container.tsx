import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigConfig/navigation.types';
import { t } from 'i18next';
import globalStyle from '@styles/globalStyle';
import ButtonComponent from '@common/adapters/primaries/components/ButtonPrimary';
import { Divider } from '@common/adapters/primaries/components/Divider';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { Profile } from '@contexts/profileContext/domain/entity/profile';
import { Synchronisation } from '@contexts/synchronisationContext/domain/entity/Synchronisation';

interface Props {
  navigation: StackNavigationProp<StackParamList>;
  errorVisits: string | undefined;
  error: string | undefined;
  sites: Site[] | null;
  loading: boolean;
  loadSites: () => void;
  profile : Profile | undefined
  sendData : (accessToken : string, lastUpadet : string, synchronisation : Synchronisation) => void;
}

interface CustomAddNewVisitProps {
  title: string;
  icon: any; // You might need to specify the correct type for the icon
}


export const VisitsContainer = (props: Props): JSX.Element => {

  const CustomAddNewVisit: React.FC<CustomAddNewVisitProps> = ({ title, icon }) => {
    return (
      <View style={styles.visitContatiner}>
        <Image source={icon} style={styles.visitImageStyle} />
        <Text style={globalStyle.fontMediumDark15Style}>{title}</Text>
      </View>
    );
  };

  const CustomVisitList: React.FC<CustomAddNewVisitProps> = (visit : Visit) => {
    return (
      <View></View>
    );
  };

  const handlSynchronisation = () => {
  

    const syn = {
      "vs": [
          {
              "tp": 3,
              "tk": "8d5f5bd5-f365-4c2f-b581-af445bdd3dd2acan1692261041336",
              "cdcs": "B98283AB",
              "dt": "2023\/08\/18 15:30:41",
              "rq": {
                  "dt": "2023\/08\/18 15:31:03",
                  "ds": "shitd",
                  "tk": "ac6d4cb0-1dea-4854-a4eb-a2902edd413d3can1692261041340",
                  "lvl": 3,
                  "nt": 0,
                  "md": []
              }
          }
      ]
  }
    props.sendData(props.profile?.accessToken!!, props.profile?.lastUpdate!!, syn )
  }

  return (
    <View style={globalStyle.containerStyle}>
      <View style={styles.mainStyle}>
        <Text style={globalStyle.fontMedium15Style}>{t('txt.aucune.synchro')}</Text>
        <View style={[globalStyle.rowContainerStyle, styles.synchroContainerStyle]}>
          <Text style={globalStyle.fontMediumDark17Style}>
            {t('txt.visites.cloturees')}
          </Text>
          <ButtonComponent
            onPressButton={handlSynchronisation}
            buttonColor={utils.colors.primary}
            width={'30%'}
            textButton={t('txt.synchroniser')} />
        </View>
        <Divider />
        <View style={globalStyle.centerContainerStyle}>
          <Text style={globalStyle.fontMedium15Style}>{t('txt.no.visit.clotured')}</Text>
        </View>
      </View>
      <Divider />
      <View style={globalStyle.containerStyle}>
        <Text style={[globalStyle.fontBoldDark15Style, globalStyle.fontCenterStyle]}>{t('txt.creez.new.visite')}</Text>
        <View style={styles.visitTypesStyle}>
          <CustomAddNewVisit title={t('txt.prevention')} icon={utils.images.addPrevenationIcon} />
          <CustomAddNewVisit title={t('txt.conformite')} icon={utils.images.addConformite} />
          <CustomAddNewVisit title={t('txt.hierarchique')} icon={utils.images.addhierarchicalIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    flex: 5,
    backgroundColor: utils.colors.white,
  },
  synchroContainerStyle: {
    margin: 10,
    backgroundColor: utils.colors.white,

  },
  visitTypesStyle: {
    flex: 1,
    flexDirection: 'row',
  },

  visitContatiner: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  visitImageStyle: {
    width: '65%',
    height: '65%',
    resizeMode: 'contain',
  },
  visitTitle: {
    textAlign: 'center',
    color: utils.colors.textColor,
    fontSize: 12,
    fontWeight: '400',
    marginTop: 10,
  },
});
