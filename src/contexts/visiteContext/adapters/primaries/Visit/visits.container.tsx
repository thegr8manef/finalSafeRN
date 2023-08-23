import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
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
import { visitTypeToImageSource } from '@common/constants';
import { convertDate } from '@utils/utils';
import { windowWidth } from '@styles/dimension';
import { Remarque } from '@common/adapters/secondaries/db/entity/Remarque';
import { Profile } from '@contexts/profileContext/domain/entity/profile';

interface Props {
  navigation: StackNavigationProp<StackParamList>;
  loadVisits: () => void;
  visits: Visit[] | undefined;
  error: string | undefined;
  loading: boolean;
  createdRemark: Remarque | undefined;
  profile: Profile | undefined;

}

interface CustomAddNewVisitProps {
  title: string;
  icon: any; // You might need to specify the correct type for the icon,
  testID?: string
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
    if (!props.createdRemark) {
      props.loadVisits();
    }
  }, [props.createdRemark])


  useEffect(() => {
  }, [props.visits]);

  const CustomAddNewVisit: React.FC<CustomAddNewVisitProps> = ({ title, icon, testID }) => {
    return (
      <View style={styles.visitContatiner}>
        <Image testID={testID} source={icon} style={styles.visitImageStyle} />
        <Text style={globalStyle.fontMediumDark15Style}>{title}</Text>
      </View>
    );
  };

  const CustomVisitOption: React.FC<CustomVisitDetailsProps> = ({ title, value }) => {
    return (
      <View style={flexBoxStyle.flexColumn}>
        <Text style={styles.visitDetailsStyle}>{value}</Text>
        <Text style={styles.visitDetailsStyle}>{title}</Text>
      </View>
    )
  }
  const CustomVistList: React.FC<CustomVistList> = ({ visit }) => {
    var imageSource = visitTypeToImageSource[visit.tp] || visitTypeToImageSource.default
    return (
      <View style={flexBoxStyle.flexRowSpace}>
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
            {visit.tp != 3 &&
              <CustomVisitOption title={'Observations'} value={0} />
            }
            <CustomVisitOption title={'Levée'} value={0} />
            <CustomVisitOption title={'Photos'} value={visit?.rq[0].md.length} />
            <Image source={utils.images.visitLockIcon} style={globalStyle.defaultImageStyle} />
          </View>
        </View>
      </View>
    );
  };


  const handlSynchronisation = () => {
   props.sendData(props.profile?.accessToken!!, props.profile?.lastUpdate!! )
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
            textButton={t('txt.synchroniser')} />
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
          <CustomAddNewVisit testID='img-prevention' title={t('txt.prevention')} icon={utils.images.addPrevenationIcon} />
          <CustomAddNewVisit testID='img-conformite' title={t('txt.conformite')} icon={utils.images.addConformite} />
          <CustomAddNewVisit testID='img-hierarchical' title={t('txt.hierarchique')} icon={utils.images.addhierarchicalIcon} />
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
