jest.mock('react-native-radio-buttons-group', () => ({
    RadioGroup: () => ({default: jest.fn()}),
  }));
  