import React from 'react';
import { render } from '@testing-library/react-native';
import { NumberCard } from '../../../../src/statisticContext/adapters/primaries/components/NumberCard';

describe('NumberCard Component', () => {
    const props = {
        label: 'My Card',
        value: 'my value',
        descriptipn: 'This is my hint',
        colorText: 'red'
    };

    it('should render the component with the correct props', () => {
        const { getByTestId } = render(<NumberCard {...props} />);

        expect(getByTestId('label').children.at(0)).toBe(props.label);
        expect(getByTestId('value').children.at(0)).toBe(props.value);
        expect(getByTestId('description').children.at(0)).toBe(props.descriptipn);
    });

    it('Should all text color be in red', () => {
        const { getByTestId } = render(<NumberCard {...props} />);

        expect(getByTestId('label').props.style.color).toBe(props.colorText);
        expect(getByTestId('value').props.style.color).toBe(props.colorText);
    });
});
