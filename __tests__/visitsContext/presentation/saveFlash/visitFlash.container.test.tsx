
import React from 'react'
import { render } from '@testing-library/react-native';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { Flash } from '@contexts/visiteContext/domain/entity/Flash';
import { VisitFlashContainer } from '@contexts/visiteContext/adapters/primaries/Flash/visitsFlash.container';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigConfig/navigation.types';

interface Props {
    navigation: Partial<StackNavigationProp<StackParamList>>;
    loadingVisits: boolean;
    errorVisits: string | undefined;
    flash: Flash | undefined;
    saveFlash: (data: Flash) => void;
    error: string | undefined;
    sites: Site[] | null;
    loading: boolean;
    LoadSites: () => void;
    navigationDrawer: any;
  }

describe('VisitFlashContainer', () => {

const props: Props = {
    navigation:  {
        navigate: jest.fn()
    },
    loadingVisits: true,
    errorVisits: undefined,
    flash: undefined,
    saveFlash: jest.fn(),
    error: undefined,
    sites: null,
    loading: true,
    LoadSites: jest.fn(),
    navigationDrawer: jest.fn(),
};

    it('should render the component correctly', () => {

        expect(render( <VisitFlashContainer {...props} />)).toBeTruthy();
    });
});