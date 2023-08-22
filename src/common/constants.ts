
import * as utils from '@utils';
export default {
  accessToken:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIyM2JmYmVlMy1iMzc0LTQ5MWEtYjI0Mi0wODk2ZmMwYWYxNmUiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMTNmY2Q2ZmItMTBkNi00Y2RlLThlZTQtYWZjMWUxZmFkYTNmL3YyLjAiLCJpYXQiOjE2ODUzNTQ2NTIsIm5iZiI6MTY4NTM1NDY1MiwiZXhwIjoxNjg1MzU4NTUyLCJhaW8iOiJBV1FBbS84VEFBQUFtR3BkZm9NZEVVai9TeVVNTzBMNkY5YTUrUGRrNWNFeXFhejNXT3pnTVVoOUxVNWw5YU40ZGEzUXFhQlhWekVwM2hyd3pkb2U5aFMyMmsybDk4cDlpM2RCYjhyNHlVSEQ0WXNnMVRwQTkyTW43aTJtQUM3ekxla1ROLzloRm9ybiIsImZhbWlseV9uYW1lIjoiU291aXNzaSIsImdpdmVuX25hbWUiOiJIaWJhIiwibmFtZSI6IkhpYmEgU291aXNzaSIsIm9pZCI6IjNkNTg1N2Q2LTI2YTMtNDliMC04N2ViLTJlNjI4ZmYzNjUzNSIsInByZWZlcnJlZF91c2VybmFtZSI6Imhzb3Vpc3NpQG1vYmVsaXRlZGV2Lm9ubWljcm9zb2Z0LmNvbSIsInJoIjoiMC5BVjBBLTliOEU5WVEza3lPNUtfQjRmcmFQLU8tdnlOMHN4cEpza0lJbHZ3SzhXNWRBQ00uIiwic3ViIjoiVzlwaV9LcFA2MW5VdEpUN1hxbUNJUG04QmEyeHRlY2pTUnBsUjA1Yk15RSIsInRpZCI6IjEzZmNkNmZiLTEwZDYtNGNkZS04ZWU0LWFmYzFlMWZhZGEzZiIsInV0aSI6IkVwYXJDbHZQZ0VTWC11S2FUand2QUEiLCJ2ZXIiOiIyLjAifQ.YMxsom6QBhml2tj0XbAt-Vuz56FcNM5-vGQwkrLTha4PjTR1chIsdlkgwX4N3vbUDMQUZFEbS4ayexLzH7N13pU6JFIH29FyfxaznB2MBpESBwsaSIgwsSRSWSb54wEENfSHrsAT6XI7Yzy9qD_QV_8YeIC9rnOAn3zy1FS-vqp55NUrPliHxIUWxOJpsgC8-gD_BOl83cjcs-Gqi3-yEe85f81S867U3EC8xFC9NTI8O4KGCU_3TNEi7NtN29cXqo38jicdpexCTTbGzK0kXogdxVPz3wfsV0EK3MSR95-xcdvpYQXpniZ2W_NV0I9FiQ5cpwEo076f4Yq5mmHfVQ',
};

export const LANGUAGE_CONSTANTS = [
  {label: 'Français', value: 'fr'},
  {label: 'Néelandais', value: 'bl'},
  {label: 'Polonais', value: 'pl'},
  {label: 'Allemand', value: 'al'},
  {label: 'Anglais', value: 'en'},
];

export const NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341'; // UUID of the "namespace"
export const NAME = Date.now().toString() + Math.random().toString();


export const visitTypeToImageSource = {
  0: utils.images.visitpreventionIcon,
  1: utils.images.visitConformiteIcon,
  2: utils.images.visithierachicalIcon,
  3: utils.images.visitFlasIcon,
  // Add more mappings for different types as needed
  default: utils.images.visitFlasIcon, // Default image for unknown types
};
