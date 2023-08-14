import React from 'react';
import { render } from '@testing-library/react-native';
import { ProgressBarCard } from '@contexts/statisticContext/adapters/primaries/components/ProgressBarCard';
interface Props {
    label:string
    value: number
    color: string
}
describe('CardBarProgress', () => {
    it('should render the component with the correct props', () => {
        const props: Props = {
            label: 'Progress 1',
            value: 0.25,
            color: 'red'
        };
        const { getByTestId } = render(<ProgressBarCard  {...props} />);
        expect(getByTestId('Label').children[0]).toBe(props.label);
        expect(getByTestId('ProgressBar').props.progress).toBe(props.value);
    });
});