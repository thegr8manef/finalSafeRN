import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as utils from '@utils/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '@navigConfig/navigation.types';
import i18next, {t} from 'i18next';
import globalStyle from '@styles/globalStyle';
import ButtonComponent from '@common/adapters/primaries/components/ButtonPrimary';
import {Divider} from '@common/adapters/primaries/components/Divider';
import {Visit} from '@contexts/visiteContext/domain/entity/Visit';
import {flexBoxStyle} from '@styles/flexBoxStyle';
import {VISIT_TYPE_TO_IMAGE_SOURCE} from '@common/constants';
import {convertDate} from '@utils/utils';
import {windowWidth} from '@styles/dimension';
import {Profile} from '@contexts/profileContext/domain/entity/profile';
import {VisitModal} from '../components/commonComponentsVisits/VisitModal';
import {Site} from '@contexts/visiteContext/domain/entity/Site';
import {VisitFlash} from '@contexts/visiteContext/domain/entity/VisitFlash';
import {TRANSLATE} from '@common/translateConstants';
import {CustomAddNewVisit} from '../components/customAddNewVisit';
import {Route} from '@navigConfig/routes';

// Define the props for the component
interface Props {
  navigation: StackNavigationProp<StackParamList>;
  visits: Visit[] | undefined;
  error: string | undefined;
  loading: boolean;
  profile: Profile | undefined;
  sites: Site[] | null;
  flash: VisitFlash[] | undefined;
  loadFlash: () => void;
  sendData: (accessToken: string, lastUpadet: string, visits: Visit[]) => void;
  loadVisits: () => void;
  loadSites: () => void;
}

interface CustomVistList {
  visit: Visit;
}
interface CustomFlashList {
  flash: VisitFlash;
}
interface CustomVisitDetailsProps {
  title: string;
  value: number; // You might need to specify the correct type for the icon,
}

// Define the main component
export const VisitsContainer = (props: Props): JSX.Element => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [screenToNavigate, setscreenToNavigate] = useState<string>('');
  const [title, settitle] = useState<string>('');
  const [selectedSite, setselectedSite] = useState<Site | undefined>();
  const [refreshing, setRefreshing] = useState(false);

  const combinedData = [];

  // const NextStep = () => {
  //   if (selectedSite !== undefined) {
  //     props.navigation.replace(screenToNavigate, {
  //       selectedSite: selectedSite,
  //       selectedSiteName: selectedSite.name,
  //       selectedSiteRef: selectedSite.reference,
  //     });
  //   }
  // };
  const changeTitle = () => {
    if (screenToNavigate !== '') {
      switch (screenToNavigate) {
        case 'PreventionVisit': {
          settitle('txt.new.visite.prevention');

          break;
        }
        case 'ConformityVisit': {
          settitle('txt.new.visite.conformité');

          break;
        }
        case 'HierarchicalVisit': {
          settitle('txt.new.visite.hiearchique');

          break;
        }
        default: {
          break;
        }
      }
    }
  };

  // Load visits when the component mounts
  useEffect(() => {
    props.loadVisits();
    props.loadSites();
    props.loadFlash();
  }, []);
  useEffect(() => {
    // NextStep();
    changeTitle();
  }, [props.visits, screenToNavigate, selectedSite, props.flash]);

  const CustomVisitOption: React.FC<CustomVisitDetailsProps> = ({
    title,
    value,
  }) => {
    return (
      <View style={flexBoxStyle.flexColumn}>
        <Text style={[styles.visitDetailsStyle, flexBoxStyle.mT1]}>
          {value}
        </Text>
        <Text style={styles.visitDetailsStyle}>{title}</Text>
      </View>
    );
  };
  const CustomVistList: React.FC<CustomVistList> = ({visit}) => {
    const imageSource =
      VISIT_TYPE_TO_IMAGE_SOURCE[visit.type] ||
      VISIT_TYPE_TO_IMAGE_SOURCE.default;
    return (
      <View testID="custom-visit-list" style={flexBoxStyle.flexRowSpace}>
        <View style={flexBoxStyle.m1}>
          <View style={flexBoxStyle.flexRowCenterSpace}>
            <View style={styles.visitRowStyle}>
              <Image
                source={imageSource}
                style={globalStyle.defaultImageStyle}
              />
              <View>
                <Text style={globalStyle.fontMedium15Style} numberOfLines={2}>
                  {' '}
                  {convertDate(visit?.dateStart, i18next.language)}{' '}
                </Text>
                <Text
                  style={globalStyle.fontMediumDark15Style}
                  numberOfLines={2}>
                  {' '}
                  {visit.chantier?.name}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={flexBoxStyle.flexEnd}>
            {visit.type != 4 && (
              <CustomVisitOption
                title={t('txt_Observations')}
                value={visit.observations?.length!!}
              />
            )}
            <CustomVisitOption title={t('txt.levee')} value={0} />
            <CustomVisitOption
              title={t('txt.photos')}
              value={visit ? visit.observations!![0].listPhotos!!.length : 0}
            />
            <Image
              source={utils.images.visitLockIcon}
              style={globalStyle.defaultImageStyle}
            />
          </View>
        </View>
      </View>
    );
  };

  const CustomFlashList: React.FC<CustomFlashList> = ({flash}) => {
    const imageSource =
      VISIT_TYPE_TO_IMAGE_SOURCE[4] || VISIT_TYPE_TO_IMAGE_SOURCE.default;
    return (
      <View testID="custom-visit-list" style={flexBoxStyle.flexRowSpace}>
        <View style={flexBoxStyle.m1}>
          <View style={flexBoxStyle.flexRowCenterSpace}>
            <View style={styles.visitRowStyle}>
              <Image
                source={imageSource}
                style={globalStyle.defaultImageStyle}
              />
              <View>
                <Text style={globalStyle.fontMedium15Style} numberOfLines={2}>
                  {' '}
                  {convertDate(flash?.date, i18next.language)}{' '}
                </Text>
                <Text
                  style={globalStyle.fontMediumDark15Style}
                  numberOfLines={2}>
                  {' '}
                  {flash.site_name}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={flexBoxStyle.flexEnd}>
            {/* {visit.type != 4 &&
              <CustomVisitOption title={t('txt_Observations')} value={0} />

            } */}
            <CustomVisitOption title={t('txt.levee')} value={0} />
            <CustomVisitOption
              title={t('txt.photos')}
              value={flash ? 0 : flash.images.length}
            />
            <Image
              source={utils.images.visitLockIcon}
              style={globalStyle.defaultImageStyle}
            />
          </View>
        </View>
      </View>
    );
  };

  const handleRefresh = () => {
    setRefreshing(true);
    // Assuming that props.loadFlash and props.loadVisits return Promises
    Promise.all([props.loadFlash(), props.loadVisits()])
      .then(() => {
        setRefreshing(false);
      })
      .catch(error => {
        console.error('Refresh error:', error);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    if (refreshing) {
      handleRefresh();
    }
  }, [refreshing]);
  // Handler for synchronizing data
  const handlSynchronisation = () => {
    props.sendData(
      props.profile?.accessToken!!,
      props.profile?.lastUpdate!!,
      props.visits!!,
    );
  };

  if (Array.isArray(props.visits)) {
    combinedData.push(
      ...props.visits.map(visit => ({key: 'visit', data: visit})),
    );
  }

  if (Array.isArray(props.flash)) {
    combinedData.push(
      ...props.flash.map(flash => ({key: 'flash', data: flash})),
    );
  }
  // Render the main component
  return (
    <View style={globalStyle.containerStyle}>
      <View style={styles.mainStyle}>
        <View style={styles.fontBackground}>
          <View style={flexBoxStyle.p1}>
            <Text style={[globalStyle.fontMedium15Style]}>
              {t('txt.aucune.synchro')}
            </Text>
          </View>
        </View>
        <View
          style={[globalStyle.rowContainerStyle, styles.synchroContainerStyle]}>
          <Text style={globalStyle.fontMediumDark17Style}>
            {combinedData?.length} {t('txt.visites.cloturees')}
          </Text>
          <ButtonComponent
            testID="sync-button"
            buttonColor={
              combinedData?.length ? utils.colors.primary : utils.colors.gray90
            }
            width={'30%'}
            textButton={t(TRANSLATE.SYNCRONIZATION)}
            onPressButton={handlSynchronisation}
          />
        </View>
        <Divider />

        {props.visits?.length || props.flash?.length ? (
          <FlatList
            // data={props.visits}
            // keyExtractor={(item) => item.id?.toString()} // Adjust the key extractor based on your data structure
            // renderItem={({ item }) => <CustomVistList visit={item} />}
            data={combinedData}
            keyExtractor={(item, index) => `${item.key}-${index}`}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
            // Adjust the key extractor based on your data structure
            renderItem={({item}) => {
              if (item.key === 'visit') {
                return <CustomVistList visit={item.data} />;
              } else if (item.key === 'flash') {
                return <CustomFlashList flash={item.data} />;
              }
            }}
            ItemSeparatorComponent={() => <Divider />}
          />
        ) : (
          <View style={globalStyle.centerContainerStyle}>
            <Text style={globalStyle.fontMedium15Style}>
              {t(TRANSLATE.NO_VISIT_CLOSED)}
            </Text>
          </View>
        )}
      </View>
      <Divider />
      <View style={globalStyle.containerStyle}>
        <View style={styles.visitTypesStyle}>
          <CustomAddNewVisit
            testID="img-prevention"
            title={t('txt.prevention')}
            icon={utils.images.addPrevenationIcon}
            onPrees={() =>
              props.navigation.navigate(Route.CheckSiteScreen, {
                sites: props.sites!!,
                title: TRANSLATE.PREVENTION,
                screenToNavigate: 'PreventionVisit',
              })
            }
            screenToNavigate="PreventionVisit"
          />
          <CustomAddNewVisit
            testID="img-conformite"
            title={t('txt.conformite')}
            icon={utils.images.addConformite}
            onPrees={() =>
              props.navigation.navigate(Route.CheckSiteScreen, {
                sites: props.sites!!,
                title: TRANSLATE.CONFORMITE,
                screenToNavigate: 'ConformityVisit',
              })
            }
            screenToNavigate="ConformityVisit"
          />
          <CustomAddNewVisit
            testID="img-hierarchical"
            title={t('txt.hierarchique')}
            icon={utils.images.addhierarchicalIcon}
            onPrees={() =>
              props.navigation.navigate(Route.CheckSiteScreen, {
                sites: props.sites!!,
                title: TRANSLATE.HIERACHIQUE,
                screenToNavigate: 'HierarchicalVisit',
              })
            }
            screenToNavigate="HierarchicalVisit"
          />
        </View>
        {/* <VisitModal
          onClose={() => setModalVisible(false)}
          sites={props.sites}
          visible={modalVisible}
          title={title}
          NextStep={() => NextStep()}
          selectedSite={selectedSite}
          setSelectedSite={setselectedSite}
        /> */}
      </View>
      <View style={props.loading ? styles.loaderContainer : {}}>
        <ActivityIndicator
          testID="activity-indicator"
          size="large"
          color={utils.colors.primary}
          style={{display: props.loading ? 'flex' : 'none'}}
        />
      </View>
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  visitDetailsStyle: {
    ...globalStyle.fontMedium13Style,
    ...globalStyle.fontCenterStyle,
    ...flexBoxStyle.mL1,
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
});
