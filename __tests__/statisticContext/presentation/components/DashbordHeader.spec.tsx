import React from 'react';
import { render } from '@testing-library/react-native';
import { DashboardHeader } from '@contexts/statisticContext/adapters/primaries/components/DashboardHeader';

describe('HeaderDashboard', () => {
    it('should render the component with the correct text', () => {
        const { getByText } = render(<DashboardHeader visits={11} dateDebut={''} dateFinale={''} labelPerimetre={''} numberChantier={10} />);
        expect(getByText('Mes visites :11')).toBeTruthy();
        expect(getByText('10')).toBeTruthy();
    });
});