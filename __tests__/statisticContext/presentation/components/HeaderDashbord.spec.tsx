import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { HeaderDashboard } from '../../../../src/statisticContext/adapters/primaries/components/HeaderDashboard';

describe('HeaderDashboard', () => {
    it('should render the component with the correct text', () => {
        const { getByText } = render(<HeaderDashboard children={''} visits={11} dateDebut={''} dateFinale={''} labelPerimetre={''} numberChantier={10} navigation={undefined} />);
        expect(getByText('Mes visites :11')).toBeTruthy();
        expect(getByText('10')).toBeTruthy();
    });
});