import {StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {reduxStore} from './src/redux_configuration/store.redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/configuration/rootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as utils from '@utils/index';
import {
  loadConnectionStatus,
  setConnectionStatus,
} from './src/common/isConnected/useCase/loadConnectionStatus/actions';
import NetInfo from '@react-native-community/netinfo';
import i18n from './src/assets/languages/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = reduxStore();

export default function App() {
  const [mount, setMount] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('language');

      if (value !== null) {
        i18n.changeLanguage(value);
      } else {
        i18n.changeLanguage('fr');
      }
    } catch (e) {}
  };

  if (!mount) {
    store.dispatch(loadConnectionStatus());
    getData();
  }

  useEffect(() => {
    NetInfo.addEventListener(state => {
      store.dispatch(setConnectionStatus(state.isConnected!));
    });
    setMount(true);
  });

  return (
    <Provider store={store}>
      <StatusBar translucent={true} backgroundColor={utils.colors.primary} />
      <SafeAreaProvider style={{flex: 1}}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
