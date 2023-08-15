import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import i18n from '../../../../src/assets/languages/i18n';
import { OPON } from '@contexts/visiteContext/adapters/primaries/components/ObservationPositiveON';

describe('ObservationPositiveON test', () => {
    const mockOnPressPositive = jest.fn();

    beforeEach(() => {
        i18n.init();
    });

    it('renders correctly', () => {
        const { getByTestId } = render(
            <OPON onPressPositive={mockOnPressPositive} />
        );

        const upThumbButton = getByTestId('up-thumb-btn');
        expect(upThumbButton).toBeDefined();

        const image = getByTestId('img')
        expect(image).toBeDefined();

    });

    it('calls onPressPositive when button is pressed', () => {
        const { getByTestId } = render(
            <OPON onPressPositive={mockOnPressPositive} />
        );

        const upThumbButton = getByTestId('up-thumb-btn');
        fireEvent.press(upThumbButton);

        expect(mockOnPressPositive).toHaveBeenCalledTimes(1);
    });

});
