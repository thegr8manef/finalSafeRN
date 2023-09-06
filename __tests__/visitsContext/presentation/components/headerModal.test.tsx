import React from 'react';
import i18n from '../../../../src/assets/languages/i18n';
import { fireEvent, render } from '@testing-library/react-native';
import { ImageSourcePropType } from 'react-native';
import { HeaderModal } from '@contexts/visiteContext/adapters/primaries/components/HeaderModal';

describe('HeaderModal test', () => {
    interface Props {
        title: string; // Header title
        onRightPress?: () => void; // Function to handle the press of a right button (optional)
        onLeftPress?: () => void; // Function to handle the press of a left button (optional)
        leftLabel: string; // Label for the left button
        rightLabel?: string; // Label for the right button (optional)
        rightIcon?: ImageSourcePropType[]; // Array of images/icons for the right buttons (optional)
        onRightIconPress?: (index: number) => void; // Function to handle the press of an icon button (optional)
    }

    let props: Props = {
        title: 'title',
        leftLabel: 'label',
    };
    beforeEach(() => {
        i18n.init();
    });

    it('renders correctly', () => {
        expect(render(<HeaderModal {...props} />)).toBeTruthy();
    });

    it('with right icon', () => {
        const onRightIconPress = jest.fn()

        props = {
            title: 'title',
            leftLabel: 'label',
            rightIcon: [{ uri: '123' }],
            onRightIconPress
        };
        const { getByTestId } = render(<HeaderModal {...props} />)
        const rightButton = getByTestId('header-modal-right-button')

        fireEvent.press(rightButton)

        expect(onRightIconPress).toBeCalled()
    });
});
