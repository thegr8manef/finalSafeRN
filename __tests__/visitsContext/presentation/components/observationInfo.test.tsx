import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import i18n from '../../../../src/assets/languages/i18n';
import { ObservationInfo } from '@contexts/visiteContext/adapters/primaries/components/observation/observationInfo';

describe('Observation info test', () => {
    const mockOnSave =(levelId: number)=>jest.fn();
    i18n.init();

    const props = {
        onSave: mockOnSave,
    }

    beforeEach(() => {
        jest.resetAllMocks()
    });

    it('renders correctly', () => {
        const { getByTestId } = render(
            <ObservationInfo {...props} />
        );

        const negativeThumbButton = getByTestId('negative-observation-btn');
        expect(negativeThumbButton).toBeDefined();

        
        const positiveThumbButton = getByTestId('positive-observation-btn');
        expect(positiveThumbButton).toBeDefined();

    });

});
