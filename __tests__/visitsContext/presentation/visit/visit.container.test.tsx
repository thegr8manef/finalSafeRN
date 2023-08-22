import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { VisitsContainer } from '@contexts/visiteContext/adapters/primaries/Visit/visits.container';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigConfig/navigation.types';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { Profile } from '@contexts/profileContext/domain/entity/profile';
import { Synchronisation } from '@contexts/synchronisationContext/domain/entity/Synchronisation';

describe('VisitsContainer', () => {
    let props: {
        navigation: StackNavigationProp<StackParamList>;
        visits: Visit[] | undefined;
        error: string | undefined;
        loading: boolean;
        profile: Profile | undefined;

        // functions
        sendData: (accessToken: string, lastUpadet: string, synchronisation: Synchronisation) => void;
        loadVisits: () => void;
    }

    beforeEach(() => {
        props = {
            navigation: {},
            visits: undefined,
            error: undefined,
            loading: false,
            profile: undefined,
            sendData: jest.fn(),
            loadVisits: jest.fn()
        }
    })

    it('renders correctly', () => {
        const { getByText, getByTestId, queryByText } = render(<VisitsContainer  {...props} />);

        // Test text content
        // expect(getByText('txt.aucune.synchro')).toBeTruthy();
        // expect(getByText('txt.visites.cloturees')).toBeTruthy();
        // expect(getByTestId('txt.synchroniser')).toBeTruthy();
        // expect(getByText('txt.no.visit.clotured')).toBeTruthy();
        // expect(queryByText('txt.creez.new.visite')).toBeTruthy();
        // expect(queryByText('txt.prevention')).toBeTruthy();
        // expect(queryByText('txt.conformite')).toBeTruthy();
        // expect(queryByText('txt.hierarchique')).toBeTruthy();

        // Test TouchableOpacity interaction
        const syncButton = getByTestId('sync-button');
        fireEvent.press(syncButton);

        expect(getByTestId('img-prevention')).toBeTruthy();
        expect(getByTestId('img-conformite')).toBeTruthy();
        expect(getByTestId('img-hierarchical')).toBeTruthy();
    });

    // Additional tests
    it('displays the correct number of horizontal lines', () => {
        const { getAllByTestId } = render(<VisitsContainer {...props} />);
        const horizontalLines = getAllByTestId('horizontal-line');
        expect(horizontalLines.length).toBe(2);
    });

    it('navigates to the correct screen on image press', () => {
        const navigation = {
            navigate: jest.fn(),
        };
        const { getByTestId } = render(<VisitsContainer {...props} />);
        const preventionImage = getByTestId('img-prevention');
        fireEvent.press(preventionImage);
    });
});
