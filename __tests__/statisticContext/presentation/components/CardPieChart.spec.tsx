import React from 'react';
import { render, screen } from '@testing-library/react-native';
import {View} from 'react-native'
import { CardPieChart } from '../../../../src/statisticContext/adapters/primaries/components/CardPieChart';

describe('CardPieChart', () => {
  it('should render the component with the correct text labels', () => {
    const props = {
      textLabels: 'Number of conformes',
      accessor: 'total',
      PieChartConformeTotal: 10,
      PieChartPositivesTotal: 20,
      PieChartNonConformeTotal: 30,
      PieChartAmeliorerTotal: 40,
    };
    const { getByText } = render(<CardPieChart {...props} />);
    const textLabel = getByText(props.textLabels);
    expect(textLabel).toBe(props.textLabels);
  });

  it('should render the component with the correct data', () => {
    const props = {
      textLabels: 'Number of conformes',
      accessor: 'total',
      PieChartConformeTotal: 10,
      PieChartPositivesTotal: 20,
      PieChartNonConformeTotal: 30,
      PieChartAmeliorerTotal: 40,
    };
    const { getByText, queryByTestId } = render(<CardPieChart {...props} />);
    const pieChart = queryByTestId('card-pie-chart');
    expect(pieChart).toBeTruthy();

    const data = screen.getAllByRole('legend');
    console.log({data});
    
    expect(data).toHaveLength(4);
    expect(data[0].textContent).toBe('Conformes');
    expect(data[1].textContent).toBe('Positives');
    expect(data[2].textContent).toBe('Non conformes');
    expect(data[3].textContent).toBe('A améliorer');
  });
});