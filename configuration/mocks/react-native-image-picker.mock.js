// Simulate the response from the camera
const mockImageResponse = {
  didCancel: false,
  assets: [{uri: 'mock_image_uri'}],
};

const mockLaunchCamera = jest.fn((options, response)=>response(mockImageResponse));
       
const mockLaunchImageLibrary = jest.fn((options, response)=>response(mockImageResponse));

jest.mock('react-native-image-picker', () => ({
  launchCamera: mockLaunchCamera,
  launchImageLibrary: mockLaunchImageLibrary,
}));
