import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CommentModal } from '@contexts/visiteContext/adapters/primaries/components/comment/CommentModal';
import { Alert } from 'react-native';

describe('CommentModal', () => {

  it('renders correctly', () => {
    const setCommentMock = jest.fn();
    const onCloseMock = jest.fn();

    const { getByTestId } = render(
      <CommentModal
        comment=""
        setComment={setCommentMock}
        visible={true}
        onClose={onCloseMock}
      />
    );

    const modal = getByTestId('modal');
    const input = getByTestId('text-input');
    
    expect(modal).toBeTruthy();
    expect(input).toBeTruthy();
  });

  it('calls setComment and onClose functions when valid comment is entered and validated', () => {
    const setCommentMock = jest.fn();
    const onCloseMock = jest.fn();

    const { getByTestId } = render(
      <CommentModal
        comment=""
        setComment={setCommentMock}
        visible={true}
        onClose={onCloseMock}
      />
    );

    // set a comment
    const input = getByTestId('text-input');
    fireEvent.changeText(input, 'Test comment');
    
    // save comment
    const validateButton = getByTestId('header-modal-right-button');
    fireEvent.press(validateButton);
    
    // close comment
    const closeButton = getByTestId('header-modal-left-button');
    fireEvent.press(closeButton);
    
    expect(setCommentMock).toHaveBeenCalledWith('Test comment');
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('shows an error alert if the comment is empty when validated', () => {
    const setCommentMock = jest.fn();
    const onCloseMock = jest.fn();
    const alertMock = jest.spyOn(Alert, 'alert');

    const { getByTestId } = render(
      <CommentModal
        comment=""
        setComment={setCommentMock}
        visible={true}
        onClose={onCloseMock}
      />
    );

    const validateButton = getByTestId('header-modal-right-button');
    fireEvent.press(validateButton);
    
    expect(alertMock).toHaveBeenCalledWith('error.point.empty');
  });

});
