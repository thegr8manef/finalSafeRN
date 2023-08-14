
import React from 'react'
import { render } from '@testing-library/react-native';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { Flash } from '@contexts/visiteContext/domain/entity/Flash';
import { VisitFlashContainer } from '@contexts/visiteContext/adapters/primaries/Flash/visitsFlash.container';

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

        expect(render( <VisitFlashContainer {...props} />)).toBeTruthy();
    });
});