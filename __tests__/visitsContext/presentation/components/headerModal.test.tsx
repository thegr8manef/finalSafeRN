import React from 'react';
import { render } from '@testing-library/react-native';
import i18n from '../../../../src/assets/languages/i18n';
import { HeaderModal } from '@contexts/visiteContext/adapters/primaries/components/HeaderModal';

describe('HeaderModal', () => {
    const props = {
        onPressCustomizeNegative: jest.fn(),
        onPressCustomizePositive: jest.fn(),
        children: ''
    }
    beforeEach(() => {
        i18n.init();
    });
    it('should render the component correctly', () => {
        const { getByTestId } = render(<HeaderModal {...props} />);
        expect(getByTestId('cancel-btn')).toBeTruthy();
        expect(getByTestId('confirm-btn')).toBeTruthy();
    });

    it('should render the children correctly', () => {
        const { getByTestId } = render(<HeaderModal {...props} children="This is the header" />);
        expect(getByTestId('header')).toBeTruthy();
    });
});
