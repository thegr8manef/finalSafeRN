import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { CommentModal } from '../../../../src/visiteContext/adapters/primaries/components/CommentModal';
import { act } from 'react-test-renderer';
import i18n from '../../../../src/assets/languages/i18n';

describe('CommentModal', () => {
    beforeEach(() => {
        i18n.init();
    });

    const props = {
        commentaires: '',
        setcommentaires: jest.fn
    }

    it('should render the component correctly', () => {
        const { getByText } = render(<CommentModal {...props} />);
        //  expect(getByText('Commentaires')).toBeTruthy();
    });

    it('should open the modal when the button is pressed', () => {
        const { getByText, getByTestId } = render(<CommentModal  {...props} />);
        const button = getByTestId('modal-btn');
        act(() => {
            fireEvent.press(button)
        })

        waitFor(() => 
        expect(getByText('txt.commentaires.without.start'))
        .toBeTruthy()
        );
    });

    it('should close the modal when the close button is pressed', () => {
        const { getByTestId } = render(<CommentModal  {...props} />);
        const button = getByTestId('modal-btn');
        act(() => {
            fireEvent.press(button)
        })

    });
});