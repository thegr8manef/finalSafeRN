import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import React, { useEffect } from 'react';
import * as utils from '@utils/index';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigConfig/navigation.types';
import i18next, { t } from 'i18next';
import globalStyle from '@styles/globalStyle';
import ButtonComponent from '@common/adapters/primaries/components/ButtonPrimary';
import { Divider } from '@common/adapters/primaries/components/Divider';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { flexBoxStyle } from '@styles/flexBoxStyle';
import { VISIT_TYPE_TO_IMAGE_SOURCE } from '@common/constants';
import { convertDate } from '@utils/utils';
import { windowWidth } from '@styles/dimension';
import { Profile } from '@contexts/profileContext/domain/entity/profile';
import { Synchronisation } from '@contexts/synchronisationContext/domain/entity/Synchronisation';

interface Props {
  navigation: Partial<StackNavigationProp<StackParamList>>;
  visits: Visit[] | undefined;
  error: string | undefined;
  loading: boolean;
  profile: Profile | undefined;

  // functions
  sendData: (accessToken: string, lastUpadet: string, synchronisation: Synchronisation) => void;
  loadVisits: () => void;
}

interface CustomAddNewVisitProps {
  title: string;
  icon: any; // You might need to specify the correct type for the icon,
  testID?: string,
  screenToNavigate: string
}

interface CustomVistList {
  visit: Visit;
}

interface CustomVisitDetailsProps {
  title: string;
  value: number; // You might need to specify the correct type for the icon,
}

export const VisitsContainer = (props: Props): JSX.Element => {

  useEffect(() => {
    props.loadVisits();
  }, [])


  useEffect(() => {
  }, [props.visits]);

  const CustomAddNewVisit: React.FC<CustomAddNewVisitProps> = ({ title, icon, testID, screenToNavigate }) => {
    return (
      <TouchableOpacity
        onPress={() => { props.navigation.navigate(screenToNavigate) }}
        style={styles.visitContatiner}>
        <Image testID={testID} source={icon} style={styles.visitImageStyle} />
        <Text style={globalStyle.fontMediumDark15Style}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const CustomVisitOption: React.FC<CustomVisitDetailsProps> = ({ title, value }) => {
    return (
      <View style={flexBoxStyle.flexColumn}>
        <Text style={[styles.visitDetailsStyle, flexBoxStyle.mT1]}>{value}</Text>
        <Text style={styles.visitDetailsStyle}>{title}</Text>
      </View>
    )
  }
  const CustomVistList: React.FC<CustomVistList> = ({ visit }) => {
    const imageSource = VISIT_TYPE_TO_IMAGE_SOURCE[visit.tp] || VISIT_TYPE_TO_IMAGE_SOURCE.default
    return (
      <View testID='custom-visit-list' style={flexBoxStyle.flexRowSpace}>
        <View style={flexBoxStyle.m1}>
          <View style={flexBoxStyle.flexRowCenterSpace}>
            <View style={styles.visitRowStyle}>
              <Image source={imageSource} style={globalStyle.defaultImageStyle} />
              <View >
                <Text style={globalStyle.fontMedium15Style} numberOfLines={2}> {convertDate(visit?.dt, i18next.language)} </Text>
                <Text style={globalStyle.fontMediumDark15Style} numberOfLines={2}> {visit?.getchantier()?.no}</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={flexBoxStyle.flexEnd}>
            {visit.tp != 4 &&
              <CustomVisitOption title={t('txt_Observations')} value={0} />
            }
            <CustomVisitOption title={t('txt.levee')} value={0} />
            <CustomVisitOption title={t('txt.photos')} value={visit?.rq?.[0]?.md?.length} />
            <Image source={utils.images.visitLockIcon} style={globalStyle.defaultImageStyle} />
          </View>
        </View>
      </View>
    );
  };

  const handlSynchronisation = () => {
    props.sendData(props.profile?.accessToken!, props.profile?.lastUpdate!)
  }

  return (
    <View style={globalStyle.containerStyle}>
      <View style={styles.mainStyle}>
        <View style={styles.fontBackground}>
          <View style={flexBoxStyle.p1}>
            <Text style={[globalStyle.fontMedium15Style]}>{t('txt.aucune.synchro')}</Text>
          </View>
        </View>
        <View style={[globalStyle.rowContainerStyle, styles.synchroContainerStyle]}>
          <Text style={globalStyle.fontMediumDark17Style}>
            {props.visits?.length} {t('txt.visites.cloturees')}
          </Text>
          <ButtonComponent
            testID='sync-button'
            buttonColor={props.visits?.length ? utils.colors.primary : utils.colors.gray90}
            width={'30%'}
            textButton={t('txt.synchroniser')}
            onPress={handlSynchronisation}
          />
        </View>
        <Divider />
        {props.visits?.length ? (
          <FlatList
            data={props.visits}
            keyExtractor={(item) => item.tk?.toString()} // Adjust the key extractor based on your data structure
            renderItem={({ item }) => <CustomVistList visit={item} />}
            ItemSeparatorComponent={() => (<Divider />)}
          />
        ) : (
          <View style={globalStyle.centerContainerStyle}>
            <Text style={globalStyle.fontMedium15Style}>{t('txt.no.visit.clotured')}</Text>
          </View>
        )}
      </View>
      <Divider />
      <View style={globalStyle.containerStyle}>
        <View style={styles.visitTypesStyle}>
          <CustomAddNewVisit testID='img-prevention' title={t('txt.prevention')} icon={utils.images.addPrevenationIcon} screenToNavigate='PreventionVisit'/>
          <CustomAddNewVisit testID='img-conformite' title={t('txt.conformite')} icon={utils.images.addConformite} screenToNavigate='PreventionVisit' />
          <CustomAddNewVisit testID='img-hierarchical' title={t('txt.hierarchique')} icon={utils.images.addhierarchicalIcon} screenToNavigate='PreventionVisit' />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  visitDetailsStyle: {
    ...globalStyle.fontMedium13Style,
    ...globalStyle.fontCenterStyle,
    ...flexBoxStyle.mL1
  },
  visitRowStyle: {
    ...flexBoxStyle.flexRow,
    width: windowWidth / 2.3,
  },
  fontBackground: {
    backgroundColor: utils.colors.gray90,
  },
  mainStyle: {
    flex: 5,
    backgroundColor: utils.colors.white,
  },
  synchroContainerStyle: {
    margin: 10,
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
});
