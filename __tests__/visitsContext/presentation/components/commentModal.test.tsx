import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { CommentModal } from '../../../../src/visiteContext/adapters/primaries/components/CommentModal';
import { act } from 'react-test-renderer';
import i18n from '../../../../src/assets/languages/i18n';

describe('CommentModal', () => {
    beforeEach(() => {
        i18n.init();
    });

    jest.mock('react-native/Libraries/Alert/Alert', () => ({
        alert: jest.fn(),
    }));

    let props = {
        commentaires: 'mock-comment',
        setcommentaires: jest.fn
    }

    it('should render the component correctly', () => {
        expect(render(<CommentModal {...props} />)).toBeTruthy()
    });

    it('should open the modal when the button is pressed with comments', () => {

        const { getByText, getByTestId } = render(<CommentModal  {...props} />);
        const button = getByTestId('modal-btn');

        act(()=>fireEvent.press(button))

        waitFor(() => {
            const headerModal = getByText('txt.commentaires.without.start')
            expect(headerModal)
                .toBeTruthy();

            // Initial state: empty is true
            expect(getByTestId('comment-divider').children[0]).toBe(undefined);

            fireEvent.changeText(getByTestId('text-input'), 'mock-comment');

            // Updated state: empty is false
            expect(getByTestId('comment-divider').children[0]).not.toBe('mock-comment');

            fireEvent.press(getByTestId("confirm-btn"))
            expect(props.setcommentaires).toHaveBeenCalledWith('');
            fireEvent.press(getByTestId("cancel-btn"))
            expect(props.setcommentaires).toHaveBeenCalledWith('');

        }
        );
    });

    it('should open the modal when the button is pressed without comments', async () => {

        props = {
            commentaires: '',
            setcommentaires: jest.fn
        }
        
        const { getByText, getByTestId } = render(<CommentModal  {...props} />);
        const button = getByTestId('modal-btn');

        fireEvent.press(button)

        waitFor(() => {
            const headerModal = getByText('txt.commentaires.without.start')
            expect(headerModal)
                .toBeTruthy();

            // Initial state: empty is true
            expect(getByTestId('comment-divider').children[0]).toBe(undefined);

            fireEvent.changeText(getByTestId('text-input'), 'mock-comment');

            // Updated state: empty is false
            expect(getByTestId('comment-divider').children[0]).not.toBe('mock-comment');

            fireEvent.press(getByTestId("confirm-btn"))
            expect(props.setcommentaires).toHaveBeenCalledWith('');
            fireEvent.press(getByTestId("cancel-btn"))
            expect(props.setcommentaires).toHaveBeenCalledWith('');

        }
        );
    });


    it('should close the modal when the close button is pressed', () => {
        const { getByTestId } = render(<CommentModal  {...props} />);
        const button = getByTestId('modal-btn');
        fireEvent.press(button)

        fireEvent.press(getByTestId("cancel-btn"))
    });
});