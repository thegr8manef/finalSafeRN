
import React from 'react'
import { render } from '@testing-library/react-native';
import { Flash } from '../../../../src/visiteContext/domain/entity/Flash';
import { Site } from '../../../../src/visiteContext/domain/entity/Site';
import { VisitFlashContainer } from '../../../../src/visiteContext/adapters/primaries/Flash/visitsFlash.container';

interface Props {
    navigation: any;
    loadingVisits: boolean;
    errorVisits: string | undefined;
    flash: Flash | undefined;
    saveFlash: (data: Flash) => void;
    error: string | undefined;
    site: Site | null;
    loading: boolean;
    loadSiteByCode: (code: string) => void;
    navigationDrawer: any;
}

describe('VisitFlashContainer', () => {

const props: Props = {
    navigation: {
        navigate: jest.fn(),
    },
    loadingVisits: true,
    errorVisits: undefined,
    flash: undefined,
    saveFlash: jest.fn(),
    error: undefined,
    site: null,
    loading: true,
    loadSiteByCode: jest.fn(),
    navigationDrawer: jest.fn(),
};

    it('should render the component correctly', () => {
        
        const { getByText, } = render( <VisitFlashContainer {...props} />);
        expect(getByText('Visit Flash')).toBeTruthy();
    });
});