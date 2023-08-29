import ImagePicker, { CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';
import { Alert, PermissionsAndroid, Platform } from 'react-native';

interface FormDataPart {
  uri: string;
  name: string;
  type: string;
}

export const requestCameraPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (error) {
      return false;
    }
  } else {
    return true;
  }
};

export const requestExternalWritePermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (error) {
      return false;
    }
  } else {
    return true;
  }
};

export const chooseImage = async (
  callback: (formData: { formData: FormData }) => void
) => {
    const options: ImagePicker.ImageLibraryOptions & { mediaType: 'photo' } = {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
      };
      
  ImagePicker.launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      Alert.alert('User cancelled image picker');
    } else if (response.errorCode === 'camera_unavailable') {
      Alert.alert('Camera not available on device');
    } else if (response.errorCode === 'permission') {
      Alert.alert('Permission not satisfied');
    } else if (response.errorCode === 'others') {
      Alert.alert(response.errorMessage || '');
    } else {
      if (response.assets && response.assets.length > 0 && response.assets[0].uri) {
        const data = new FormData();
        const formDataPart: FormDataPart = {
          uri: response.assets[0].uri,
          name: response.assets[0].fileName || 'image.jpg',
          type: response.assets[0].type || 'image/jpeg',
        };
        data.append('photo', formDataPart);
        callback({ formData: data });
      }
    }
  });
};

export const launchCamera = async (callback: (result: any) => void) => {
    
  const options: CameraOptions = {
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 550,
    quality: 1,
    videoQuality: 'low',
    durationLimit: 30,
    saveToPhotos: true,
  };

  const isCameraPermitted = await requestCameraPermission();
  const isStoragePermitted = await requestExternalWritePermission();

  if (isCameraPermitted && isStoragePermitted) {
    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
      } else if (response.errorCode === 'camera_unavailable') {
        Alert.alert('Camera not available on device');
      } else if (response.errorCode === 'permission') {
        Alert.alert('Permission not satisfied');
      } else if (response.errorCode === 'others') {
        Alert.alert(response.errorMessage!);
      } else {
        callback({ result: response });
      }
    });
  }
};
