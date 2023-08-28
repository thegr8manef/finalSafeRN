import React from 'react';
import { render, waitFor, act } from '@testing-library/react-native';
import { SplashContainer } from '@contexts/profileContext/adapters/primaries/Splash/splash.container';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigConfig/navigation.types';
import { Profile } from '@contexts/profileContext/domain/entity/profile';

describe('Test SplashContainer screen', () => {
    jest.useFakeTimers(); // Enable fake timers

    let props: {
        navigation: StackNavigationProp<StackParamList>;
        loading: boolean;
        connectionStatus: boolean | undefined;
        profile: Profile | undefined;
        loadLocalProfile: () => void;
        loadSychronisationData: (accessToken: string, lastUpdate: string) => void;
    }

    beforeEach(() => {
        props = {
            navigation: { reset: jest.fn() },
            loading: false,
            connectionStatus: undefined,
            profile: undefined,
            loadLocalProfile: jest.fn(),
            loadSychronisationData: jest.fn(),
        }
    })

    it('renders correctly', () => {
        const { getByTestId } = render(<SplashContainer {...props} />);
        const splashContainer = getByTestId('splash-container');
        expect(splashContainer).toBeTruthy();
    });

    it('should load local profile on mount', async () => {
        render(<SplashContainer {...props} />);
        await waitFor(() => expect(props.loadLocalProfile).toHaveBeenCalledTimes(1));
    })

    it('navigates to Home when profile and connectionStatus are valid', async () => {
        const updatedProps = {
            ...props,
            connectionStatus: true,
            profile: new Profile(
                '123',
                'John Doe',
                'access_token',
                'test@test.com',
                'DR EIC TESTS',
                '-1',
            )
        }
        render(<SplashContainer {...updatedProps} />);

        act(() => {
            jest.runAllTimers(); // Advance setTimeout
        });

        await waitFor(() => expect(updatedProps.loadSychronisationData).toHaveBeenCalledWith(updatedProps?.profile?.accessToken, '-1')); //-1 is lastUpdate
    });

    it('navigates to Home when connectionStatus is false', async () => {
        const updatedProps = {
            ...props,
            connectionStatus: false,
            profile: new Profile(
                '123',
                'John Doe',
                'access_token',
                'test@test.com',
                'DR EIC TESTS',
                '-1',
            )
        }
        render(
            <SplashContainer {...updatedProps} />
        );
        await waitFor(() => expect(props.loadLocalProfile).toHaveBeenCalledTimes(1));

        act(() => {
            jest.runAllTimers(); // Advance setTimeout
        });

        expect(props.navigation.reset).toHaveBeenCalledWith({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    });

    it('navigates to Login when profile email is empty', async () => {
        const updatedProps = {
            ...props,
            profile: new Profile('', '', '', '', '', '')
        }
        render(
            <SplashContainer {...updatedProps} />
        );
        await waitFor(() => expect(props.loadLocalProfile).toHaveBeenCalledTimes(1));

        act(() => {
            jest.runAllTimers(); // Advance setTimeout
        });

        expect(updatedProps.navigation.reset).toHaveBeenCalledWith({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    });

    it('renders ProgressBarCard and text when mountedSyn is true', async () => {
        const updatedProps = {
            ...props,
            connectionStatus: true,
            profile: new Profile(
                '123',
                'John Doe',
                'access_token',
                'test@test.com',
                'DR EIC TESTS',
                '-1',
            )
        }
        const { queryByTestId } = render(
            <SplashContainer {...updatedProps} />
        );

        act(() => {
            jest.runAllTimers(); // Advance setTimeout
        });
        const progressBarCard = queryByTestId('ProgressBar');
        expect(progressBarCard).toBeTruthy();
        const synchroText = queryByTestId('synchro-text');
        expect(synchroText).toBeTruthy();
    });
});
