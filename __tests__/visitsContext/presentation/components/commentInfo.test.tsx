import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CommentInfo } from '@contexts/visiteContext/adapters/primaries/components/comment/commentInfo';

describe('CommentInfo', () => {

  it('renders correctly with comment text', () => {
    const mockComment = 'Test comment';
    const mockSetComment = jest.fn();

    const { getByTestId, queryByTestId } = render(
      <CommentInfo comment={mockComment} setComment={mockSetComment} />
    );

    const commentText = getByTestId('comment-text');
    const divider = queryByTestId('divider');
    
    expect(commentText).toBeTruthy();
    expect(divider).toBeFalsy();
  });

  it('renders correctly without comment text', () => {
    const mockComment = '';
    const mockSetComment = jest.fn();

    const { getByTestId, queryByTestId } = render(
      <CommentInfo comment={mockComment} setComment={mockSetComment} />
    );

    const commentText = queryByTestId('comment-text');
    const divider = getByTestId('divider');
    
    expect(commentText).toBeFalsy();
    expect(divider).toBeTruthy();
  });

  it('opens and closes the modal when pressed', () => {
    const mockComment = '';
    const mockSetComment = jest.fn();

    const { getByTestId, queryByTestId } = render(
      <CommentInfo comment={mockComment} setComment={mockSetComment} />
    );

    const button = getByTestId('comment-input');
    fireEvent.press(button);
    
    const modal = queryByTestId('modal');
    expect(modal?.children?.[0]).toBeTruthy();

    const closeButton = getByTestId('header-modal-left-button');
    fireEvent.press(closeButton);
    
    expect(modal?.children?.[0]).toBeFalsy();
  });

});
