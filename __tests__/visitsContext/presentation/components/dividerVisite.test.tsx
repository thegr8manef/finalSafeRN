import React from 'react';
import {render} from '@testing-library/react-native';
import { DividerVisite } from '@contexts/visiteContext/adapters/primaries/components/DividerVisite';

describe('DividerVisite', () => {
  it('should render the component correctly', () => {
    const {getByTestId} = render(<DividerVisite />);
    expect(getByTestId('divider')).toBeTruthy();
  });
});