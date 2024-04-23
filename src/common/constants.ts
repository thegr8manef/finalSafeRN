import * as utils from '@utils/index';
import {t} from 'i18next';
import * as ImagePicker from 'react-native-image-picker';
import {TRANSLATE} from './translateConstants';

export default {
  accessToken:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIyM2JmYmVlMy1iMzc0LTQ5MWEtYjI0Mi0wODk2ZmMwYWYxNmUiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMTNmY2Q2ZmItMTBkNi00Y2RlLThlZTQtYWZjMWUxZmFkYTNmL3YyLjAiLCJpYXQiOjE2ODUzNTQ2NTIsIm5iZiI6MTY4NTM1NDY1MiwiZXhwIjoxNjg1MzU4NTUyLCJhaW8iOiJBV1FBbS84VEFBQUFtR3BkZm9NZEVVai9TeVVNTzBMNkY5YTUrUGRrNWNFeXFhejNXT3pnTVVoOUxVNWw5YU40ZGEzUXFhQlhWekVwM2hyd3pkb2U5aFMyMmsybDk4cDlpM2RCYjhyNHlVSEQ0WXNnMVRwQTkyTW43aTJtQUM3ekxla1ROLzloRm9ybiIsImZhbWlseV9uYW1lIjoiU291aXNzaSIsImdpdmVuX25hbWUiOiJIaWJhIiwibmFtZSI6IkhpYmEgU291aXNzaSIsIm9pZCI6IjNkNTg1N2Q2LTI2YTMtNDliMC04N2ViLTJlNjI4ZmYzNjUzNSIsInByZWZlcnJlZF91c2VybmFtZSI6Imhzb3Vpc3NpQG1vYmVsaXRlZGV2Lm9ubWljcm9zb2Z0LmNvbSIsInJoIjoiMC5BVjBBLTliOEU5WVEza3lPNUtfQjRmcmFQLU8tdnlOMHN4cEpza0lJbHZ3SzhXNWRBQ00uIiwic3ViIjoiVzlwaV9LcFA2MW5VdEpUN1hxbUNJUG04QmEyeHRlY2pTUnBsUjA1Yk15RSIsInRpZCI6IjEzZmNkNmZiLTEwZDYtNGNkZS04ZWU0LWFmYzFlMWZhZGEzZiIsInV0aSI6IkVwYXJDbHZQZ0VTWC11S2FUand2QUEiLCJ2ZXIiOiIyLjAifQ.YMxsom6QBhml2tj0XbAt-Vuz56FcNM5-vGQwkrLTha4PjTR1chIsdlkgwX4N3vbUDMQUZFEbS4ayexLzH7N13pU6JFIH29FyfxaznB2MBpESBwsaSIgwsSRSWSb54wEENfSHrsAT6XI7Yzy9qD_QV_8YeIC9rnOAn3zy1FS-vqp55NUrPliHxIUWxOJpsgC8-gD_BOl83cjcs-Gqi3-yEe85f81S867U3EC8xFC9NTI8O4KGCU_3TNEi7NtN29cXqo38jicdpexCTTbGzK0kXogdxVPz3wfsV0EK3MSR95-xcdvpYQXpniZ2W_NV0I9FiQ5cpwEo076f4Yq5mmHfVQ',
};

export const LANGUAGE_CONSTANTS = [
  {label: 'Français', value: 'fr'},
  {label: 'Néelandais', value: 'nl'},
  {label: 'Polonais', value: 'pl'},
  {label: 'Allemand', value: 'al'},
  {label: 'Anglais', value: 'en'},
];

export const NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341'; // UUID of the "namespace"

export const NAME = Date.now().toString() + Math.random().toString();

export const VISIT_TYPE_TO_IMAGE_SOURCE = {
  0: utils.images.visitpreventionIcon,
  1: utils.images.visitConformiteIcon,
  2: utils.images.visitFlasIcon,
  3: utils.images.visithierachicalIcon,
  4: utils.images.visitFlasIcon,
  // Add more mappings for different types as needed
  default: utils.images.visitFlasIcon, // Default image for unknown types
};

export const CHARACTERS: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const IMAGE_OPTION: ImagePicker.CameraOptions = {
  mediaType: 'photo',
  maxWidth: 300,
  maxHeight: 550,
  quality: 1,
  videoQuality: 'low',
  durationLimit: 30,
  saveToPhotos: true,
};
export const URL_POLICY: string =
  'https://finalsafe.eiffage.com/politique-confidentialite';
export const URL_NOTICE: string =
  'https://finalsafe.eiffage.com/mentions-legales';

export const REGEX_DATE = /\sGMT.*/;

export const SETTINGS = (date: String) => [
  {
    title: t(TRANSLATE.CHANTIERS),
    data: [
      {
        id: 1,
        label: t(TRANSLATE.MY_CHANTIERS),
        name: date,
        icon: utils.images.synchoLogo,
      },
      {
        id: 2,
        label: t(TRANSLATE.AUTRES_CHANTIERS),
        name: date,
        icon: utils.images.arrow_right,
      },
    ],
  },
  {
    title: t(TRANSLATE.REFERNTIEL_LISTES),
    data: [
      {
        id: 3,
        label: t(TRANSLATE.RISQUES_QUESTIONS),
        name: date,
        icon: utils.images.synchoLogo,
      },
    ],
  },
  {
    title: t(TRANSLATE.PHOTOS),
    data: [
      {
        id: 4,
        label: t(TRANSLATE.NO_PHOTOS),
        name: null,
        icon: utils.images.mediaSyncho,
      },
    ],
  },
  {
    title: t(TRANSLATE.LANGUAGE),
    data: [
      {
        id: 5,
        label: t(TRANSLATE.LANGUAGE),
        name: null,
      },
    ],
  },
  {
    title: t(TRANSLATE.ABOUT),
    data: [
      {
        id: 6,
        label: t(TRANSLATE.CONFIDENTIALITY),
        name: null,
        icon: utils.images.arrow_right,
      },
      {
        id: 7,
        label: t(TRANSLATE.LEGAL_NOTICE),
        name: null,
        icon: utils.images.arrow_right,
      },
    ],
  },
];

// Visit type
export enum VISIT_TYPE {
  '3TYPE' = 'txt.visite.de.hierarchique',

  '1TYPE' = 'txt.visite.de.conformité',

  '0TYPE' = 'txt.visite.de.prevention',
}

export const TYPE_STRING = 'TYPE';
