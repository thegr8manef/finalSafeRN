import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import i18n from '../../../../src/assets/languages/i18n';
import { OPOFF } from '@contexts/visiteContext/adapters/primaries/components/ObservationPositiveOFF';

describe('ObservationPositiveOFF test', () => {
    const mockOFFPressPositive = jest.fn();

    beforeEach(() => {
        i18n.init();
    });

    it('renders correctly', () => {
        const { getByTestId } = render(
            <OPOFF onPressPositiveOFF={mockOFFPressPositive} />
        );

        const upThumbButton = getByTestId('up-thumb-btn');
        expect(upThumbButton).toBeDefined();

        const image = getByTestId('img')
        expect(image).toBeDefined();

    });

    it('calls onPressPositiveOFF when button is pressed when OFF', () => {
        const { getByTestId } = render(
            <OPOFF onPressPositiveOFF={mockOFFPressPositive} />
        );

        const upThumbButton = getByTestId('up-thumb-btn');
        fireEvent.press(upThumbButton);

        expect(mockOFFPressPositive).toHaveBeenCalledTimes(1);
    });

});
