
import React from 'react'
import { fireEvent, render } from '@testing-library/react-native';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { Flash } from '@contexts/visiteContext/domain/entity/Flash';
import { VisitFlashContainer } from '@contexts/visiteContext/adapters/primaries/Flash/visitsFlash.container';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigConfig/navigation.types';
import { Alert } from 'react-native';

interface Props {
    navigation: Partial<StackNavigationProp<StackParamList>>;
    loadingVisits: boolean;
    errorVisits: string | undefined;
    flash: Flash | undefined;
    saveFlash: (data: Flash) => void;
    error: string | undefined;
    sites: Site[] | null;
    loading: boolean;
    LoadSites: () => void;
    navigationDrawer: any;
}

describe('VisitFlashContainer', () => {
    const alertMock = jest.spyOn(Alert, 'alert');

    const props: Props = {
        navigation: {
            navigate: jest.fn()
        },
        loadingVisits: true,
        errorVisits: undefined,
        flash: undefined,
        saveFlash: jest.fn(),
        error: undefined,
        sites: null,
        loading: true,
        LoadSites: jest.fn(),
        navigationDrawer: jest.fn(),
    };

    it('should render the component correctly', () => {

        expect(render(<VisitFlashContainer loadSites={jest.fn} {...props} />)).toBeTruthy();
    });


    it('should show Alert when press save and levelId is null ', () => {
        const { getByTestId } = render(<VisitFlashContainer loadSites={jest.fn} {...props} />)

        const saveButton = getByTestId('save-btn');
        fireEvent.press(saveButton)
        expect(alertMock).toHaveBeenCalledWith('', 'neg_ou_pos')
        // Can this button be disabled when level ID is null ?
    });

    it('should press save and with positive levelId without comment ', () => {
        const { getByTestId, queryByTestId } = render(<VisitFlashContainer loadSites={jest.fn} {...props} />)


        // Press Positive to select level id
        const positiveButton = queryByTestId('positive-observation-btn')
        expect(positiveButton).toBeTruthy()
        positiveButton && fireEvent.press(positiveButton)

        // Press Save
        const saveButton = getByTestId('save-btn');
        fireEvent.press(saveButton)
        expect(alertMock).toHaveBeenCalledWith('', "msg.saisr.commentaires.flash")

    });

    it('should press save and with positive levelId & comment ', () => {
        const { getByTestId, queryByTestId } = render(<VisitFlashContainer loadSites={jest.fn} {...props} />)


        // Press Positive to select level id
        const positiveButton = queryByTestId('positive-observation-btn')
        expect(positiveButton).toBeTruthy()
        positiveButton && fireEvent.press(positiveButton)

        // Open comment modal :: to set comment
        const commentInputButton = queryByTestId('comment-input')
        expect(commentInputButton).toBeTruthy()
        commentInputButton && fireEvent.press(commentInputButton)

        // Set comment 
        const commentTextInput = queryByTestId('text-input')
        commentTextInput && fireEvent.changeText(commentTextInput, 'This is a comment!')

        // Save comment FROM modal
        const saveCommentButton = queryByTestId('header-modal-right-button')
        expect(saveCommentButton).toBeTruthy()
        saveCommentButton && fireEvent.press(saveCommentButton)
        
        // Add images
        
        // Press Save
        const saveButton = getByTestId('save-btn');
        fireEvent.press(saveButton)


        alertMock.mock.calls[0]?.[2]?.[1].onPress?.()

        expect(alertMock).toHaveBeenCalled()
    })

})