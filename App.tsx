import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {reduxStore} from './src/redux_configuration/store.redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/configuration/rootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import colors from './src/assets/colors';
import ApplicationContext from './src/common/appConfig/ApplicationContext';

const store = reduxStore();

export default function App() {
  const db = ApplicationContext.getInstance().db();

  try {
    db.then(realm => {
      realm?.write(() => {
        const objects = realm.objects('Statistic');
        console.log(objects);
      });
    });
  } catch (error) {}

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.primary} />
      <SafeAreaProvider style={{flex: 1}}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
