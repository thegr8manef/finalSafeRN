import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import i18n from '../../../../src/assets/languages/i18n';
import { ObservationNegative } from '@contexts/visiteContext/adapters/primaries/components/observation/observationNegative';

describe('ObservationNegative test', () => {
    const mockPressNegative = jest.fn();

    const props = {
        onPress: mockPressNegative,
        status: false
    }

    beforeEach(() => {
        i18n.init();
    });

    it('renders correctly', () => {
        const { getByTestId } = render(
            <ObservationNegative {...props} />
        );

        const negativeThumbButton = getByTestId('negative-observation-btn');
        expect(negativeThumbButton).toBeDefined();

        const image = getByTestId('negative-img-observation-btn')
        expect(image).toBeDefined();

    });

    it('calls onPressNegative status off', () => {
        const { getByTestId } = render(
            <ObservationNegative {...props} />
        );

        const negativeThumbButton = getByTestId('negative-observation-btn');
        fireEvent.press(negativeThumbButton);

        expect(mockPressNegative).toHaveBeenCalledTimes(1);
    });

    it('calls onPressNegative status on', () => {
        const { getByTestId } = render(
            <ObservationNegative {...props} status={true} />
        );

        const negativeThumbButton = getByTestId('negative-observation-btn');
        fireEvent.press(negativeThumbButton);

        expect(mockPressNegative).toHaveBeenCalledTimes(1);
    });
});
