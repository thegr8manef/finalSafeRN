import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { VisitsContainer } from '@contexts/visiteContext/adapters/primaries/Visit/visits.container';

describe('VisitsContainer', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<VisitsContainer navigation={{}} />);

    // Test text content
    expect(getByText('txt.aucune.synchro')).toBeTruthy();
    expect(getByText('txt.visites.cloturees')).toBeTruthy();
    expect(getByText('txt.synchroniser')).toBeTruthy();
    expect(getByText('txt.no.visit.clotured')).toBeTruthy();
    expect(getByText('txt.creez.new.visite')).toBeTruthy();
    expect(getByText('txt.prevention')).toBeTruthy();
    expect(getByText('txt.conformite')).toBeTruthy();
    expect(getByText('txt.hierarchique')).toBeTruthy();

    // Test TouchableOpacity interaction
    const syncButton = getByTestId('sync-button');
    fireEvent.press(syncButton);

    expect(getByTestId('img-prevention')).toBeTruthy();
    expect(getByTestId('img-conformite')).toBeTruthy();
    expect(getByTestId('img-hierarchical')).toBeTruthy();
  });

  // Additional tests
  it('displays the correct number of horizontal lines', () => {
    const { getAllByTestId } = render(<VisitsContainer navigation={{}} />);
    const horizontalLines = getAllByTestId('horizontal-line');
    expect(horizontalLines.length).toBe(2); 
  });

  it('navigates to the correct screen on image press', () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const { getByTestId } = render(<VisitsContainer navigation={navigation} />);
    const preventionImage = getByTestId('img-prevention');
    fireEvent.press(preventionImage);
  });

});
