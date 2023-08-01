import React from 'react';
import { render } from '@testing-library/react-native';
import { DashboardContainer } from '../../../../../src/statisticContext/adapters/primaries/Dashboard/dashboard.container';
import { Stat } from '../../../../../src/statisticContext/domain/entity/Stat';

interface Props {
    navigation: any;
    loading: boolean;
    error: string | undefined;
    stat: Stat | undefined;
    connectionStatus: boolean | undefined;
    loadRemoteStats: () => void;
    loadLocalStats: () => void;
}

describe('statistic screen flow', () => {


    const props: Props = {
        loading: false,
        error: undefined,
        stat: undefined,
        connectionStatus: undefined,
        navigation: undefined,
        loadRemoteStats: jest.fn(),
        loadLocalStats: jest.fn(),
    }

    it('should render the component with the correct text', () => {
        const { getByText } = render(<DashboardContainer {...props} />);
        expect(getByText('Tableau de bord')).toBeTruthy();
        expect(getByText('165')).toBeTruthy();
    });

})

function deepFreeze(arg0: any) {
    throw new Error('Function not implemented.');
}
