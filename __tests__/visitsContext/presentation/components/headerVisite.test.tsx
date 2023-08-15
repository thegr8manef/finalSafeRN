import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import { HeaderVisite } from '@contexts/visiteContext/adapters/primaries/components/HeaderVisite';

describe('HeaderVisite', () => {
    const navigation = {
        openDrawer: jest.fn(),
    };

    it('should render the component correctly', () => {
        render(<HeaderVisite navigation children='' />);
    });

    it('should render the logo image correctly', () => {
        const { getByTestId } = render(<HeaderVisite navigation children='' />);
        expect(getByTestId('logo-img')).toBeTruthy();
    });

    it('should call the navigation.openDrawer() function when the sidenav button is pressed', () => {

        const { getByTestId } = render(<HeaderVisite navigation={navigation} children='' />);
        const sidenavButton = getByTestId('sidenav');
        act(() => {
            fireEvent.press(sidenavButton)
        })
        waitFor(() => expect(navigation.openDrawer).toBeCalled());
    });
});