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
import colors from '../../../../assets/colors';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

interface Props {
  images: string;
  setimages: (images: string[]) => void;
}

export const ImageController = (props: Props) => {
  const addItem = (newItem: string) => {
    if (props.images.length === null) {
      props.setimages([newItem]);
    } else {
      props.setimages([...props.images, newItem]);
    }
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
        alert('Write permission err', err);
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
          Alert.alert(response.errorMessage);
          return;
        }
        addItem(response.assets[0].uri);
      });
    }
  };

  const chooseFile = () => {
    const options = {
      mediaType: 'photo',
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
        Alert.alert(response.errorMessage);
        return;
      }
      addItem(response.assets[0].uri);
    });
  };
  return (
    <View testID='img-container' style={styles.DividerTwoImageBottomNav}>
      <View style={{ flex: 1 }}>
        <Pressable
          testID='capture-img'
          onPress={() => captureImage()}
          android_ripple={{ color: colors.gris300 }}>
          <Image
            style={styles.logoImage5}
            source={require('../../../../assets/img/icn_prendre_photo.png')}
          />
        </Pressable>
      </View>
      <View style={{ flex: 1 }}>
        <Pressable
          testID='choose-img'
          onPress={() => chooseFile()}
          android_ripple={{ color: colors.gris300 }}>
          <Image
            style={styles.logoImage5}
            source={require('../../../../assets/img/icn_file.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  logoImage5: {
    width: 30,
    height: 25,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  DividerTwoImageBottomNav: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default ImageController;
