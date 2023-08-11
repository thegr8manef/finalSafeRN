import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import i18n from '../../../../src/assets/languages/i18n';
import { ONOFF } from '../../../../src/visiteContext/adapters/primaries/components/ObservationNegativeOFF';

describe('ObservationNegativeOFF test', () => {
    const mockOFFPressNegative = jest.fn();

    beforeEach(() => {
        i18n.init();
    });

    it('renders correctly', () => {
        const { getByTestId } = render(
            <ONOFF onPressNegativeOFF={mockOFFPressNegative} />
        );

        const upThumbButton = getByTestId('up-thumb-btn');
        expect(upThumbButton).toBeDefined();

        const image = getByTestId('img')
        expect(image).toBeDefined();

    });

    it('calls onPressNegativeOFF when button is pressed when OFF', () => {
        const { getByTestId } = render(
            <ONOFF onPressNegativeOFF={mockOFFPressNegative} />
        );

        const upThumbButton = getByTestId('up-thumb-btn');
        fireEvent.press(upThumbButton);

        expect(mockOFFPressNegative).toHaveBeenCalledTimes(1);
    });

});
