import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import i18n from '../../../../src/assets/languages/i18n';
import { SiteModalWithName } from '@contexts/visiteContext/adapters/primaries/components/SiteModalWithName';

describe('SiteModalWithName', () => {
    const mockSetWithNameVisibilty = jest.fn();

    beforeEach(() => {
        i18n.init()
    })

    it('renders correctly', () => {
        const { getByTestId } = render(
            <SiteModalWithName modalVisible={true} setWithNameVisibilty={mockSetWithNameVisibilty} />
        );

        const cancelButton = getByTestId('cancel-modal-btn');
        expect(cancelButton).toBeDefined();

        const filterInput = getByTestId('filter-input');
        expect(filterInput).toBeDefined();
    });

    it('calls setWithNameVisibilty when Cancel button is pressed', () => {
        const { getByTestId } = render(
            <SiteModalWithName modalVisible={true} setWithNameVisibilty={mockSetWithNameVisibilty} />
        );

        const cancelButton = getByTestId('cancel-modal-btn');
        fireEvent.press(cancelButton);

        expect(mockSetWithNameVisibilty).toHaveBeenCalledTimes(1);
        expect(mockSetWithNameVisibilty).toHaveBeenCalledWith(false);
    });

});
