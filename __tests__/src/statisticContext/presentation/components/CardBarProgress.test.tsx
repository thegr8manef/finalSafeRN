import React from 'react';
import { render } from '@testing-library/react-native';
import { CardBarProgress } from '../../../../../src/statisticContext/adapters/primaries/components/CardBarProgress';

describe('CardBarProgress', () => {
  it('should render the component with the correct props', () => {
    const props = {
      textLabels: 'My Progress Bar',
      textHint1: 'Progress 1',
      valueHint1: 0.25,
      textHint2: 'Progress 2',
      valueHint2: 0.5,
      textHint3: 'Progress 3',
      valueHint3: 0.75,
      textHint4: 'Progress 4',
      valueHint4: 1,
    };
    const { getByTestId } = render(<CardBarProgress  {...props} />);
    expect(getByTestId('Label').children[0]).toBe(props.textLabels);
    expect(getByTestId('Progress.Bar_1').props.progress).toBe(props.valueHint1);
    expect(getByTestId('Progress.Bar_2').props.progress).toBe(props.valueHint2);
    expect(getByTestId('Progress.Bar_3').props.progress).toBe(props.valueHint3);
    expect(getByTestId('Progress.Bar_4').props.progress).toBe(props.valueHint4);

  });
});