import React from 'react';
import { render } from '@testing-library/react-native';
import { CardOne } from '../../../../../src/statisticContext/adapters/primaries/components/CardOne';

describe('CardOne', () => {
    const props = {
        textLabels: 'My Card',
        textValues: 'This is my value',
        textHints: 'This is my hint',
        colorText: 'red',
    };

    it('should render the component with the correct props', () => {
        const { getByTestId } = render(<CardOne {...props} />);

        expect(getByTestId('text-labels').children.at(0)).toBe(props.textLabels);
        expect(getByTestId('text-values').children.at(0)).toBe(props.textValues);
        expect(getByTestId('text-hint').children.at(0)).toBe(props.textHints);
    });

    it('Should all text color be in red', () => {
        const { getByTestId } = render(<CardOne {...props} />);

        expect(getByTestId('text-labels').props.style.color).toBe(props.colorText);
        expect(getByTestId('text-values').props.style.color).toBe(props.colorText);
    });
});
