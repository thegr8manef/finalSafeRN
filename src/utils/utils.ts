import languageCodeMap from "@config/languageMapping";
import 'moment/locale/fr';
import 'moment/locale/nl';
import 'moment/locale/de';
import 'moment/locale/pl';
import 'moment/locale/en-in';
import moment from "moment";
import * as ImagePicker from 'react-native-image-picker';
import {
    Alert,
} from 'react-native';

interface FormDataPart {
    uri: string;
    name: string;
    type: string;
}
interface ImagePickerOptions {
    title?: string;
    mediaType?: 'photo' | 'video' | 'mixed';
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
    // Other options...
}
// Function to convert a date to a specific format
export function convertDate(date: string, lang: string): string {
    try {
        const changeLangCode = getLanguageCode(lang)
        // Set the locale based on the language code
        moment.locale(changeLangCode);
        // Parse the input date using Moment.js and format it as 'DD MMMM YYYY'
        return moment(date, 'YYYY/MM/DD HH:mm:ss').format('DD MMMM YYYY');
    } catch (error) {
        // Handle any errors that might occur during the operation
        return date; // Return the original date if an error occurs
    }
}
// Function to get the language code based on language name
export function getLanguageCode(language: string) {
    // Use the language-to-code mapping to convert the language name to a code
    // If not found in the mapping, default to the provided language name
    return languageCodeMap[language] || language;
}

export const chooseImage = async (callback: (formData: { formData: FormData }) => void) => {
    const options: ImagePicker.ImageLibraryOptions & { mediaType: 'photo' } = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
  
    ImagePicker.launchImageLibrary(options, (response: ImagePicker.ImagePickerResponse) => {
      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode === 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode === 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode === 'others') {
        Alert.alert(response.errorMessage || '');
        return;
      }
  
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
    });
  };