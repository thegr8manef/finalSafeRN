import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import i18n from '../../../../src/assets/languages/i18n';
import { ONON } from '@contexts/visiteContext/adapters/primaries/components/ObservationNegativeON';

describe('ObservationNegativeON test', () => {
    const mockONPressNegative = jest.fn();

    beforeEach(() => {
        i18n.init();
    });

    it('renders correctly', () => {
        const { getByTestId } = render(
            <ONON onPressNegative={mockONPressNegative} />
        );

        const upThumbButton = getByTestId('up-thumb-btn');
        expect(upThumbButton).toBeDefined();

        const image = getByTestId('img')
        expect(image).toBeDefined();

    });

    it('calls onPressNegative when button is pressed when OFF', () => {
        const { getByTestId } = render(
            <ONON onPressNegative={mockONPressNegative} />
        );

        const upThumbButton = getByTestId('up-thumb-btn');
        fireEvent.press(upThumbButton);

        expect(mockONPressNegative).toHaveBeenCalledTimes(1);
    });

});
