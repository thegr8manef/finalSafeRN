import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ImageController } from '@contexts/visiteContext/adapters/primaries/components/ImageController';

// Mock react-native-image-picker functions
jest.mock('react-native-image-picker', () => ({
    launchCamera: jest.fn(),
    launchImageLibrary: jest.fn(),
}));

describe('ImageController', () => {
    it('renders correctly', () => {
        const setImagesMock = jest.fn();
        const { getByTestId } = render(
            <ImageController images={""} setimages={setImagesMock} />
        );

        const captureButton = getByTestId('capture-img');
        const chooseButton = getByTestId('choose-img');

        expect(captureButton).toBeTruthy();
        expect(chooseButton).toBeTruthy();
    });

    it('calls captureImage function when capture button is pressed', () => {
        const setImagesMock = jest.fn();
        const { getByTestId } = render(
            <ImageController images={""} setimages={setImagesMock} />
        );

        const captureButton = getByTestId('capture-img');
        fireEvent.press(captureButton);

        //todo
    });

    it('calls chooseFile function when choose button is pressed', () => {
        const setImagesMock = jest.fn();
        const { getByTestId } = render(
            <ImageController images={""} setimages={setImagesMock} />
        );

        const chooseButton = getByTestId('choose-img');
        fireEvent.press(chooseButton);

        //todo
    });

});
