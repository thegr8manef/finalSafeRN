import {StatusBar, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {reduxStore} from '@redux/store.redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as utils from '@utils/index';
import NetInfo from '@react-native-community/netinfo';
import i18n from '@assets/languages/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootNavigation} from '@navigConfig/rootNavigation';
import {
  loadConnectionStatus,
  setConnectionStatus,
} from '@common/isConnected/useCase/loadConnectionStatus/actions';
import FlashMessage from 'react-native-flash-message';

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
    NetInfo.addEventListener(state =>
      store.dispatch(setConnectionStatus(state.isConnected!)),
    );
    setMount(true);
  });

  return (
    <Provider store={store}>
      <StatusBar translucent={true} backgroundColor={utils.colors.statusBar} />
      <NavigationContainer>
        <SafeAreaProvider style={{flex: 1}}>
          <RootNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
      <FlashMessage
        position="top"
        duration={2500}
        style={styles.flashMessageContainer}
      />
    </Provider>
  );
}

const styles = StyleSheet.create({
  flashMessageContainer: {
    marginTop: '5%',
  },
});
