import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import i18n from '../../../../src/assets/languages/i18n';
import { SiteModalWithCode } from '@contexts/visiteContext/adapters/primaries/components/SiteModalWithCode';

describe('SiteModalWithCode', () => {
    const mockSetWithCodeVisibilty = jest.fn();
    const mockSetCode = jest.fn();
    const mockSetclicked = jest.fn();
    beforeEach(() => {
        i18n.init()
    })

    it('renders correctly', () => {
        const { getByTestId } = render(
            <SiteModalWithCode
                modalVisible={true}
                setWithCodeVisibilty={mockSetWithCodeVisibilty}
                code=""
                setCode={mockSetCode}
                setclicked={mockSetclicked}
                clicked={false}
                loading={false}
                codeExist={undefined}
            />
        );

        const cancelButton = getByTestId('cancel-modal-btn');
        expect(cancelButton).toBeDefined();
        fireEvent.press(cancelButton)
        const validerButton = getByTestId('submit-btn');
        expect(validerButton).toBeDefined();
        fireEvent.press(validerButton)

        const codeInput = getByTestId('code-input');
        expect(codeInput).toBeDefined();
        fireEvent.press(codeInput)
        fireEvent.changeText(codeInput,'123')

    });

    it('handles click on Valider button when (code?.length !== 0)', () => {
        const { getByTestId } = render(
            <SiteModalWithCode
                modalVisible={true}
                setWithCodeVisibilty={mockSetWithCodeVisibilty}
                code="123"
                setCode={mockSetCode}
                setclicked={mockSetclicked}
                clicked={false}
                loading={false}
                codeExist={undefined}
            />
        );

        const validerButton = getByTestId('submit-btn');
        act(() => {
            fireEvent.press(validerButton);
        })

        expect(mockSetclicked).toHaveBeenCalledTimes(1);
        expect(mockSetWithCodeVisibilty).toHaveBeenCalledTimes(0);

    });

    it('handles click on Valider button (code?.length !== 0 && codeExist)', () => {
        const { getByTestId } = render(
            <SiteModalWithCode
                modalVisible={true}
                setWithCodeVisibilty={mockSetWithCodeVisibilty}
                code="123"
                setCode={mockSetCode}
                setclicked={mockSetclicked}
                clicked={false}
                loading={false}
                codeExist={'123'}
            />
        );

        const validerButton = getByTestId('submit-btn');
        act(() => {
            fireEvent.press(validerButton);
        })
        expect(mockSetclicked).toHaveBeenCalledTimes(1);
        expect(mockSetWithCodeVisibilty).toHaveBeenCalledTimes(1);

    });
});
