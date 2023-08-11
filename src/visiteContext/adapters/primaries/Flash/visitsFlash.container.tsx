import React, {useEffect, useState, useMemo} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import colors from '../../../../assets/colors';
import {Flash} from '../../../domain/entity/Flash';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/configuration/navigation.types';
import {RadioGroup} from 'react-native-radio-buttons-group';
import {CommentModal} from '../components/CommentModal';
import {OPON} from '../components/ObservationPositiveON';
import {OPOFF} from '../components/ObservationPositiveOFF';
import {ONON} from '../components/ObservationNegativeON';
import {ONOFF} from '../components/ObservationNegativeOFF';
import {ImageController} from '../components/ImageController';
import {Site} from '../../../domain/entity/Site';
import {SitesList} from '../components/SitesList';
import { Header } from '../../../../common/adapters/primaries/components/Header';

interface Props {
  navigation: StackNavigationProp<StackParamList>;
  loadingVisits: boolean;
  errorVisits: string | undefined;
  flash: Flash | undefined;
  saveFlash: (data: Flash) => void;
  error: string | undefined;
  site: Site | null;
  loading: boolean;
  loadSiteByCode: (code: string) => void;
  navigationDrawer: any;
}
export const VisitFlashContainer = (props: Props) => {
  const [mount, setMount] = useState(false);
  const [commentaires, setcommentaires] = useState('');
  const [levelId, setLevelId] = useState(0);
  const [btnPositive, setbtnPositive] = useState(false);
  const [btnNegative, setbtnNegative] = useState(false);
  const [images, setimages] = useState([]);
  var test_observation = true;
  var test_commentaires = true;
  const [code, setCode] = useState('');
  const [clicked, setclicked] = useState(false);
  const [loadingData, setloadingData] = useState(false);
  var test_observation = true;
  var test_commentaires = true;

  if (!mount) {
    props.loadingVisits;
  }
  const flash = new Flash(commentaires, images, levelId);
  const createTwoButtonAlert = () =>
    Alert.alert('', t('etes_vous_sur_de_vouloir_sauvegarder'), [
      {
        text: 'NON',
        style: 'cancel',
      },
      {
        text: 'OUI',
        onPress: () => [
          props.saveFlash(flash),
          props.navigation.jumpTo('visites'),
        ],
      },
    ]);
  const SaveData = () => {
    if (!btnNegative && !btnPositive) {
      Alert.alert('', t('neg_ou_pos'));
      test_observation = true;
    } else {
      test_observation = false;
      if (commentaires === '') {
        Alert.alert('', t('msg.saisr.commentaires.flash'));
        test_commentaires = true;
      } else {
        test_commentaires = false;
        if (!test_commentaires && !test_observation) {
          createTwoButtonAlert();
        }
      }
    }
  };
  if (clicked) {
    props.loadSiteByCode(code);

    setclicked(false);
    if (props.loading) {
      setloadingData(false);
    } else {
      setloadingData(true);
    }
  }

  const {t} = useTranslation();
  const OptionEcartSansRisque = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: t('txt_i_know_i_can_i_act'),
        value: '1',
        color: colors.primary,
        labelStyle: styles.radioButton1,
      },
      {
        id: '2',
        label: t('txt_i_know_i_can_not_i_report'),
        value: '2',
        color: colors.primary,
        labelStyle: styles.radioButton2,
      },
      {
        id: '3',
        label: t('txt_i_do_not_know_i_report'),
        value: '3',
        color: colors.primary,
        labelStyle: styles.radioButton3,
      },
    ],
    [],
  );
  useEffect(() => {
    setMount(true);
  }, []);
  const _onPressButtonPostiveON = () => {
    setbtnPositive(true);
    setbtnNegative(false);
  };

  const _onPressButtonNegativeON = () => {
    setbtnNegative(true);
    setbtnPositive(false);
  };
  const _onPressButtonPostiveOFF = () => {
    setbtnPositive(false);
    setbtnNegative(true);
  };

  const _onPressButtonNegativeOFF = () => {
    setbtnPositive(true);
    setbtnNegative(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('txt_visit_flash')} navigation={props.navigation} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.ContainerChantier}>
          <SitesList
            loading={props.loading}
            setcodeByChantier={setCode}
            codeByChantier={code}
            setclicked={setclicked}
            clicked={clicked}
            codeExist={props.site?.reference}
            nom_chantier={props.site?.name}></SitesList>
        </View>

        <View style={styles.ContainerObservation}>
          {!btnPositive ? (
            <OPON onPressPositive={_onPressButtonPostiveON} />
          ) : (
            <OPOFF onPressPositiveOFF={_onPressButtonPostiveOFF} />
          )}
          <View style={styles.DividerObservation} />
          {!btnNegative ? (
            <ONON onPressNegative={_onPressButtonNegativeON} />
          ) : (
            <ONOFF onPressNegativeOFF={_onPressButtonNegativeOFF} />
          )}
        </View>
        {btnNegative ? (
          <View style={styles.RadioContainer}>
            <Text>{t('txt_evaluation_visit_flash')}</Text>
            <RadioGroup
              radioButtons={OptionEcartSansRisque}
              onPress={setLevelId}
              selectedId={levelId}
              layout="column"
              containerStyle={{alignItems: 'flex-start'}}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
            />
          </View>
        ) : null}

        <View style={styles.CommentairesContainer}>
          <Text>{t('txt.commentaires')}</Text>
          <CommentModal
            commentaires={commentaires}
            setcommentaires={setcommentaires}
          />
        </View>
        <View style={styles.ImageContainer}>
          {Object.keys(images).length === 0 || images === null ? (
            <Text style={styles.ImageContainerText}>
              {t('txt.aucune.image')}
            </Text>
          ) : (
            // <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={images}
              renderItem={({item, index}) => (
                <Image
                  source={{uri: item}} /* Use item to set the image source */
                  key={index} /* Important to set a key for list items,
                               but it's wrong to use indexes as keys, see below */
                  style={styles.imageStyle}
                />
              )}
            />
          )}
        </View>
        <View style={styles.BottomNav}>
          <View style={styles.DividerTwoImageBottomNav}>
            <ImageController images={images} setimages={setimages} />
            <View style={styles.dividerBottomNav} />
            <View style={styles.dividerBottomNav}>
              <Pressable
                android_ripple={{color: colors.gris300}}
                onPress={() => SaveData()}>
                <Text style={styles.buttonBottomnav}>
                  {t('txt.sauvegarder.remarque')}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoImage3: {
    width: 10,
    height: 10,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginEnd: '7%',
  },
  logoImage4: {
    width: '90%',
    height: '40%',
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginEnd: '7%',
    marginTop: 3,
  },
  logoImage5: {
    width: 30,
    height: 25,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 120,
    height: 120,
    margin: 20,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  imageBorderStyle: {
    width: 105,
    height: 105,
    margin: 0,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  radioButton1: {
    backgroundColor: colors.green300,
    width: '87%',
    fontSize: 17,
  },
  radioButton2: {
    backgroundColor: colors.yellow900,
    width: '87%',
    fontSize: 17,
  },
  radioButton3: {
    backgroundColor: colors.pink,
    width: '87%',
    fontSize: 17,
  },
  buttonBottomnav: {
    textAlign: 'center',
    marginTop: '13%',
    fontSize: 18,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerBottomNav: {
    flex: 1,
    backgroundColor: 'white',
  },
  BottomNav: {
    height: 55,
    backgroundColor: 'white',
    borderTopColor: colors.gris200,
    borderTopWidth: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  DividerTwoImageBottomNav: {
    flex: 1,
    flexDirection: 'row',
  },
  ImageContainerText: {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    height: 160,
    backgroundColor: colors.gris100,
  },
  CommentairesContainer: {
    height: 70,
    flexDirection: 'column',
    marginStart: 25,
    marginTop: 30,
  },
  RadioContainer: {
    height: 130,
    marginStart: 25,
    marginTop: 5,
  },
  DividerObservation: {
    flex: 0.01,
    backgroundColor: colors.gris300,
    marginVertical: 10,
  },
  ContainerObservation: {
    height: 100,
    borderTopColor: colors.primary,
    borderTopWidth: 3,
    backgroundColor: colors.gris100,
    flexDirection: 'row',
    marginHorizontal: 25,
  },
  ContainerChantier: {
    height: 130,
    margin: 30,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
    height: 50,
  },
  title: {
    fontSize: 16,
  },
});
