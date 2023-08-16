import { StackNavigationProp } from "@react-navigation/stack"
import React from 'react'
import { StackParamList } from "../../../../src/navigation/configuration/navigation.types"
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { Profile } from "@contexts/profileContext/domain/entity/profile";
import { LoginContainer } from "@contexts/profileContext/adapters/primaries/Login/login.container";

describe("Test login container screen", () => {

    let props: {
        loading: boolean;
        error: string | undefined;
        profile: Profile | undefined;
        login: () => void;
        navigation: StackNavigationProp<StackParamList>;
    };

    beforeEach(() => {
        props = {
            loading: false,
            error: undefined,
            profile: undefined,
            login: jest.fn(),
            navigation: {
                replace: jest.fn(),
            },
        };
    })

    it('should render correctly', async () => {

        const { getByTestId } = render(<LoginContainer {...props} />);
        const loginContainer = getByTestId('login-container');

        await waitFor(() => {
            expect(loginContainer).toBeDefined();
        })
    })

    it('should show the activity indicator when the sign in button is pressed', async() => {
        const { getByTestId, getByText } = render(<LoginContainer {...props} />);

        const signInButton = getByText('action_sign_in');
        fireEvent.press(signInButton);

        expect(props.login).toHaveBeenCalled();

        // Update the loading prop to true
        const updatedProps = {
            ...props,
            loading: true,
        };
        const { queryByTestId: queryByTestIdWithUpdatedProps } = render(<LoginContainer {...updatedProps} />);
        const updatedLoginContainer = getByTestId('login-container');
        await waitFor(() => {
            expect(updatedLoginContainer).toBeDefined();
        })
        // Check that the ActivityIndicator is displayed when loading is true
        const updatedActivityIndicator = queryByTestIdWithUpdatedProps('activity-indicator');
        expect(updatedActivityIndicator).not.toBeNull();
    })

    it('should not show the activity indicator by default', async () => {
        const { getByTestId, queryByTestId } = render(<LoginContainer {...props} />);
        const loginContainer = getByTestId('login-container');

        await waitFor(() => {
            expect(loginContainer).toBeDefined();
        })

        const activityIndicator = queryByTestId('activity-indicator');
        expect(activityIndicator).toBeNull();
    })
})

