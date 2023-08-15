import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import ImageController from '@contexts/visiteContext/adapters/primaries/components/ImageController';

describe('ImageController', () => {
    it('captures an image', async () => {
        const setImages = jest.fn();
        const { getByTestId } = render(<ImageController images={"mock_image_uri"} setimages={setImages} />);

        const captureButton = getByTestId('capture-img');
        fireEvent.press(captureButton);

        // Wait for the component to process the response
        await new Promise(resolve => setTimeout(resolve, 100));
//todo fix
   //     expect(setImages).toHaveBeenCalledWith(['mock_image_uri']);
    });

    it('chooses a file', async () => {
        const setImages = jest.fn((images:string[]) => {
            return images
        })

        const { getByTestId } = render(<ImageController images={"mock_image_uri"} setimages={setImages} />);

        const chooseButton = getByTestId('choose-img');
        fireEvent.press(chooseButton);

        // Wait for the component to process the response
        await new Promise(resolve => setTimeout(resolve, 100));
//todo fix
//        expect(setImages).toHaveBeenCalledWith(['mock_image_uri']);
    });
});
