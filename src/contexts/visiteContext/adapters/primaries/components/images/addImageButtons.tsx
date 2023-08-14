
import {
  View,
  Pressable,
  Image,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

interface Props {
  addImage:(image: string)=> void
}

export const AddImageButtons = (props: Props) => {

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
        Alert.alert('Write permission err :: ' + err);
      }
      return false;
    } else {
      return true;
    }
  };
 

  const captureImage = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    const isCameraPermitted = await requestCameraPermission();
    const isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          Alert.alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          Alert.alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          Alert.alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          Alert.alert(response.errorMessage !);
          return;
        }
        if (response.assets && response.assets.length > 0 && response.assets[0].uri)
        props.addImage(response.assets[0].uri);
      });
    }
  };

  const chooseFile = () => {
    const options = {
      mediaType          : 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        Alert.alert(response.errorMessage!);
        return;
      }
      if (response.assets && response.assets.length > 0 && response.assets[0].uri)
        props.addImage(response.assets[0].uri);
    });
  };
  return (
<<<<<<< HEAD:src/contexts/visiteContext/adapters/primaries/components/images/addImageButtons.tsx
    <View style={styles.container}>
        <Pressable style={styles.button}
=======
    <View testID='img-container' style={styles.DividerTwoImageBottomNav}>
      <View style={{flex: 1}}>
        <Pressable
>>>>>>> 9946d56 (feat(visitContext_test): imageController):src/visiteContext/adapters/primaries/components/ImageController.tsx
          onPress={() => captureImage()}
          android_ripple={{ color: utils.colors.gris300 }}>
          <Image
            testID='capture-img'
            style={styles.logoImage5}
            source={utils.images.takePhotoIcon}
          />
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => chooseFile()}
<<<<<<< HEAD:src/contexts/visiteContext/adapters/primaries/components/images/addImageButtons.tsx
          android_ripple={{ color: utils.colors.gris300 }}>
          <Image style={styles.logoImage5} source={utils.images.fileIcon} />
=======
          android_ripple={{color: colors.gris300}}>
          <Image
                      testID='choose-img'
            style={styles.logoImage5}
            source={require('../../../../assets/img/icn_file.png')}
          />
>>>>>>> 9946d56 (feat(visitContext_test): imageController):src/visiteContext/adapters/primaries/components/ImageController.tsx
        </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  logoImage5: {
    width: 30,
    height: 25,
    marginTop: 10,
    resizeMode: 'stretch',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    flex:1
  },
  button:{
    padding:10
  }
});
