jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown

  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },

  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

jest.mock('react-native-radio-buttons-group', () => ({
  RadioGroup: () => ({default: jest.fn()}),
}));

jest.mock('react-native-chart-kit', () => ({
  PieChart: jest.fn(),
}));

jest.mock('react-native//Libraries/PermissionsAndroid/PermissionsAndroid', () =>
  require('react-native//Libraries/PermissionsAndroid/PermissionsAndroid/mock'),
);

// Simulate the response from the camera
const mockImageResponse = {
  didCancel: false,
  assets: [{uri: 'mock_image_uri'}],
};
const mockLaunchCamera = jest.fn((_, callback) => {
  callback(mockImageResponse);
});

const mockLaunchImageLibrary = jest.fn((_, callback) => {
  callback(mockImageResponse);
});

jest.mock('react-native-image-picker', () => ({
  launchCamera: mockLaunchCamera,
  launchImageLibrary: mockLaunchImageLibrary,
}));
