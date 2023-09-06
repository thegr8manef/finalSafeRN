import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import i18n from '../../../../src/assets/languages/i18n';
import { ObservationPositive } from '@contexts/visiteContext/adapters/primaries/components/observation/observationPositive';

describe('ObservationPositive test', () => {
    const mockPressPositive = jest.fn();

    const props = {
        onPress: mockPressPositive,
        status: false
    }

    beforeEach(() => {
        i18n.init();
    });

    it('renders correctly', () => {
        const { getByTestId } = render(
            <ObservationPositive {...props} />
        );

        const positiveThumbButton = getByTestId('positive-observation-btn');
        expect(positiveThumbButton).toBeDefined();

        const image = getByTestId('img-observation-btn')
        expect(image).toBeDefined();

    });

    it('calls onPressPositive status off', () => {
        const { getByTestId } = render(
            <ObservationPositive {...props} />
        );

        const positiveThumbButton = getByTestId('positive-observation-btn');
        fireEvent.press(positiveThumbButton);

        expect(mockPressPositive).toHaveBeenCalledTimes(1);
    });

    it('calls onPressPositive status on', () => {
        const { getByTestId } = render(
            <ObservationPositive {...props} status={true} />
        );

        const positiveThumbButton = getByTestId('positive-observation-btn');
        fireEvent.press(positiveThumbButton);

        expect(mockPressPositive).toHaveBeenCalledTimes(1);
    });
});
