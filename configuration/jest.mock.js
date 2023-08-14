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
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

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
