import { IMAGE_OPTION } from '@common/constants';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

// Interface for defining the structure of FormData part
interface FormDataPart {
    uri: string;
    name: string;
    type: string;
}

// Function to request camera permission for Android devices
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

// Function to request external write permission for Android devices
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

// Function to check the result of camera permission request and display alerts accordingly
export const checkCameraPermission = (response: any, callback: () => void) => {
    if (response.didCancel) {
        Alert.alert('User cancelled image picker');
    } else if (response.errorCode === 'camera_unavailable') {
        Alert.alert('Camera not available on device');
    } else if (response.errorCode === 'permission') {
        Alert.alert('Permission not satisfied');
    } else if (response.errorCode === 'others') {
        Alert.alert(response.errorMessage || '');
    } else {
        callback(); // Call the callback function if there are no errors
    }
}

// Function to create FormData and append the selected image data to it
export const imageAppend = (response: any, callback: (formData: FormData) => void) => {
    if (response.assets && response.assets.length > 0 && response.assets[0].uri) {
        const data = new FormData();
        const formDataPart: FormDataPart = {
            uri: response.assets[0].uri,
            name: response.assets[0].fileName || 'image.jpg',
            type: response.assets[0].type || 'image/jpeg',
        };
        data.append('photo', formDataPart);
        callback(data); // Call the callback function with the formData
    }
}

// Function to launch the image picker for selecting images from the device
// Function to launch the image picker for selecting images from the device
export const chooseImage = async () => {

    const options: ImagePicker.CameraOptions = IMAGE_OPTION;

    return new Promise<any>((resolve, reject) => {
        ImagePicker.launchImageLibrary(options, (response: any) => {
            if (response) {
                checkCameraPermission(response, () => {
                    imageAppend(response, (formData: FormData) => {
                        resolve(formData);
                    });
                });
            } else {
                reject('Image picker response is undefined.');
            }
        });
    });
};


// Function to launch the device's camera for taking photos
export const launchCamera = async () => {
    const options: ImagePicker.CameraOptions = IMAGE_OPTION;
    const isCameraPermitted = await requestCameraPermission();
    const isStoragePermitted = await requestExternalWritePermission();

    return new Promise<any>((resolve, reject) => {
        if (isCameraPermitted && isStoragePermitted) {
            ImagePicker.launchCamera(options, (response) => {
                if (response) {
                    checkCameraPermission(response, () => {
                        resolve(response);
                    });
                } else {
                    reject('Camera response is undefined.');
                }
            });
        } else {
            reject('Camera or storage permission not granted.');
        }
    });
};

