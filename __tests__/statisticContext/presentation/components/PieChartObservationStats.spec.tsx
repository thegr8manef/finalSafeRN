import React from 'react';
import { render } from '@testing-library/react-native';
import { StatObservation } from '@contexts/statisticContext/domain/entity/statObservation';
import { PieChartObservationStats } from '@contexts/statisticContext/adapters/primaries/Dashboard/Components/PieChartObservationStats';

describe('PieChartObservationStats', () => {
  
  const statObservation = new StatObservation(10,20,30,40,50,60,70,80,90,100);

  it('should render the component with the correct text labels', () => {
    const props = {
      observationStats:statObservation,
      accessor:'total',
      title: 'CONFORM AND POSITIVE \/ NON-CONFORM AND TO BE IMPROVED'
    };
    const { getByTestId } = render(<PieChartObservationStats {...props} />);
    const textLabel = getByTestId('Label');
    expect(textLabel).toBeTruthy()
  });
})