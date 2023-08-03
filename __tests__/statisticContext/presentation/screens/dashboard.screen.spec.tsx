import React from 'react';
import { render } from '@testing-library/react-native';
import { DashboardContainer } from '../../../../src/statisticContext/adapters/primaries/Dashboard/dashboard.container';
import { Stat } from '../../../../src/statisticContext/domain/entity/Stat';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../../../src/navigation/configuration/navigation.types';

interface Props {
    navigation: StackNavigationProp<StackParamList>;
    loading: boolean;
    error: string | undefined;
    stat: Stat | undefined;
    connectionStatus: boolean | undefined;
    loadRemoteStats: () => void;
    loadLocalStats: () => void;
}

describe('statistic screen flow', () => {

    let props: Props
    beforeEach(()=>{
        props= {
            loading: false,
        error: undefined,
        stat: undefined,
        connectionStatus: undefined,
        navigation: {navigate: jest.fn(), goBack: jest.fn()},
        loadRemoteStats: jest.fn(),
        loadLocalStats: jest.fn(),
        }
    })
    it('should render the component with the correct text', () => {
        const { getByText } = render(<DashboardContainer {...props} />);
        expect(getByText('Mes visites :165')).toBeTruthy();
    });

})