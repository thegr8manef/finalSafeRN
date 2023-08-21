// Simulate the response from the camera
const mockImageResponse = {
  didCancel: false,
  assets: [{uri: 'mock_image_uri'}],
};
const mockResponse = { didCancel: true };

const mockLaunchCamera = jest.fn((options, callback) => callback(mockResponse));
       
const mockLaunchImageLibrary = jest.fn((options, callback) => callback(mockResponse));

jest.mock('react-native-image-picker', () => ({
  launchCamera: mockLaunchCamera,
  launchImageLibrary: mockLaunchImageLibrary,
}));
