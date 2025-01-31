/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18n from './src/assets/languages/i18n';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
