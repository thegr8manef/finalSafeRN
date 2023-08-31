/*
This is a temporary mock for react-native-camera
When we are going to test the screens, we need to modify this mock 
*/
jest.mock('react-native-camera', () => ({
  RNCamera: {
    Constants: {
      FlashMode: {
        torch: 'torch',
        on: 'on',
      },
    },
  },
}));
