jest.mock(
    'react-native//Libraries/PermissionsAndroid/PermissionsAndroid',
    () => {
      return {
        ...jest.requireActual(
          'react-native//Libraries/PermissionsAndroid/PermissionsAndroid',
        ),
        request: jest.fn(() => new Promise(resolve => resolve('granted'))),
      };
    },
  );
  