import React from 'react';
import { render , fireEvent} from '@testing-library/react-native';
import ImageController from '../../../../src/visiteContext/adapters/primaries/components/ImageController';
import { act } from 'react-test-renderer';

describe('ImageController', () => {

    interface Props {
        images: string;
        setimages: (images: string[]) => void;
    }

    const props: Props = {
        images: '',
        setimages: jest.fn
    }

    it('should render the component correctly', () => {
        const { getByTestId } = render(<ImageController {...props} />);
        expect(getByTestId('img-container')).toBeTruthy();
        expect(getByTestId('choose-img')).toBeTruthy();
    });

    it('should call the captureImage function when the camera button is pressed', () => {
        const { getByTestId } = render(<ImageController {...props} />);
        const cameraButton = getByTestId('capture-img');
        act(()=>{
            fireEvent.press(cameraButton)
        })
        expect(props.setimages).toBeCalled();
    });

    it('should call the chooseFile function when the file button is pressed', () => {
        const { getByTestId } = render(<ImageController {...props} />);
        const fileButton = getByTestId('choose-img');
        act(()=>{
            fireEvent.press(fileButton)
        })
        expect(props.setimages).toBeCalled();
    });
});