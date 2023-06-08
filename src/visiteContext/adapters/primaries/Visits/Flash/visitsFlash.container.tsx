import React, {useEffect, useState, useMemo} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  PermissionsAndroid,
  Pressable,
  ScrollView,
} from 'react-native';
import colors from '../../../../../assets/colors';
import {Flash} from '../../../../domain/entity/Flash';
import {useTranslation} from 'react-i18next';
import {HeaderVisite} from '../../components/HeaderVisite';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../../navigation/configuration/navigation.types';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {RadioGroup} from 'react-native-radio-buttons-group';
import {ModalVisite} from '../../components/ModalVisite';
import {OPON} from '../../components/ObservationPositiveON';
import {OPOFF} from '../../components/ObservationPositiveOFF';
import {ONON} from '../../components/ObservationNegativeON';
import {ONOFF} from '../../components/ObservationNegativeOFF';

interface Props {
  navigation: StackNavigationProp<StackParamList>;
  loadingVisits: boolean;
  errorVisits: string | undefined;
  flash: Flash | undefined;
  LoadFlash: () => void;
}

export const VisitFlashContainer = (props: Props) => {
  const [mount, setMount] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [btnPositive, setbtnPositive] = useState(true);
  const [btnNegative, setbtnNegative] = useState(true);
  const [filePath, setFilePath] = useState({});
  if (!mount) {
    props.loadingVisits;
  }

  const {t} = useTranslation();

  const OptionEcartSansRisque = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: "je sais, je peux, j'agis",
        value: '1',
        color: colors.primary,
        labelStyle: styles.radioButton1,
      },
      {
        id: '2',
        label: 'je sais, je ne peux pas,je signale',
        value: '2',
        color: colors.primary,
        labelStyle: styles.radioButton2,
      },
      {
        id: '3',
        label: 'Je ne sais pas, je signale',
        value: '3',
        color: colors.primary,
        labelStyle: styles.radioButton3,
      },
    ],
    [],
  );
  useEffect(() => {
    setMount(true);
  });
  const _onPressButtonPostiveON = () => {
    setbtnPositive(false);
    setbtnNegative(true);
  };

  const _onPressButtonNegativeON = () => {
    setbtnNegative(false);
    setbtnPositive(true);
  };
  const _onPressButtonPostiveOFF = () => {
    setbtnPositive(true);
    setbtnNegative(false);
  };

  const _onPressButtonNegativeOFF = () => {
    setbtnPositive(false);
    setbtnNegative(true);
  };
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            buttonNegative: undefined,
            buttonNeutral: undefined,
            buttonPositive: '',
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            buttonNegative: undefined,
            buttonNeutral: undefined,
            buttonPositive: '',
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else {
      return true;
    }
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response.assets[0]);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.assets[0].base64);
        console.log('uri -> ', response.assets[0].uri);
        console.log('width -> ', response.assets[0].width);
        console.log('height -> ', response.assets[0].height);
        console.log('fileSize -> ', response.assets[0].fileSize);
        console.log('type -> ', response.assets[0].type);
        console.log('fileName -> ', response.assets[0].fileName);
        setFilePath(response.assets[0]);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response.assets[0]);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.assets[0].base64);
      console.log('uri -> ', response.assets[0].uri);
      console.log('width -> ', response.assets[0].width);
      console.log('height -> ', response.assets[0].height);
      console.log('fileSize -> ', response.assets[0].fileSize);
      console.log('type -> ', response.assets[0].type);
      console.log('fileName -> ', response.assets[0].fileName);
      setFilePath(response.assets[0]);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderVisite children={'Observation flash'} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.ContainerChantier} />

        <View style={styles.ContainerObservation}>
          {btnPositive && !btnNegative ? (
            <OPON onPressPositive={_onPressButtonPostiveON} />
          ) : (
            <OPOFF onPressPositiveOFF={_onPressButtonPostiveOFF} />
          )}
          <View style={styles.DividerObservation} />
          {btnNegative && !btnPositive ? (
            <ONON onPressNegative={_onPressButtonNegativeON} />
          ) : (
            <ONOFF onPressNegativeOFF={_onPressButtonNegativeOFF} />
          )}
        </View>
        {!btnNegative ? (
          <View style={styles.RadioContainer}>
            <Text>Pour corriger l'écart sans risque* :</Text>
            <RadioGroup
              radioButtons={OptionEcartSansRisque}
              onPress={setSelectedId}
              selectedId={selectedId}
              layout="column"
              containerStyle={{alignItems: 'flex-start'}}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
            />
          </View>
        ) : null}

        <View style={styles.CommentairesContainer}>
          <Text>Commentaires*</Text>
          <ModalVisite />
        </View>
        <View style={styles.ImageContainer}>
          {Object.keys(filePath).length === 0 ? (
            <Text style={styles.ImageContainerText}>Aucune Image</Text>
          ) : (
            <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
          )}
        </View>
        <View style={styles.BottomNav}>
          <View style={styles.DividerTwoImageBottomNav}>
            <View style={styles.DividerTwoImageBottomNav}>
              <View style={{flex: 1}}>
                <Pressable
                  onPress={() => captureImage('photo')}
                  android_ripple={{color: colors.gris300}}>
                  <Image
                    style={styles.logoImage5}
                    source={require('../../../../../assets/img/icn_prendre_photo.png')}
                  />
                </Pressable>
              </View>
              <View style={{flex: 1}}>
                <Pressable
                  onPress={() => chooseFile('photo')}
                  android_ripple={{color: colors.gris300}}>
                  <Image
                    style={styles.logoImage5}
                    source={require('../../../../../assets/img/icn_file.png')}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.dividerBottomNav} />
            <View style={styles.dividerBottomNav}>
              <Pressable android_ripple={{color: colors.gris300}}>
                <Text style={styles.buttonBottomnav}>Sauvegarder</Text>
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
    backgroundColor: '#47ce3d',
    width: '87%',
    fontSize: 17,
  },
  radioButton2: {
    backgroundColor: '#ce983d',
    width: '87%',
    fontSize: 17,
  },
  radioButton3: {
    backgroundColor: '#ce3d3d',
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
    height: 170,
    backgroundColor: 'white',
  },
});
