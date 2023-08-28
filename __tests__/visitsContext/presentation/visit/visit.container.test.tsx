import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {VisitsContainer} from '@contexts/visiteContext/adapters/primaries/Visit/visits.container';
import {Profile} from '@contexts/profileContext/domain/entity/profile';
import {Synchronisation} from '@contexts/synchronisationContext/domain/entity/Synchronisation';
import {Visit} from '@contexts/visiteContext/domain/entity/Visit';
import {StackParamList} from '@navigConfig/navigation.types';
import {StackNavigationProp} from '@react-navigation/stack';
import {FlashPhotoDto} from '@contexts/visiteContext/adapters/secondaires/dto/flash.photo.dto';

interface Props {
  navigation: Partial<StackNavigationProp<StackParamList>>;
  visits: Visit[] | undefined;
  error: string | undefined;
  loading: boolean;
  profile: Profile | undefined;

  // functions
  sendData: (
    accessToken: string,
    lastUpadet: string,
    synchronisation: Synchronisation,
  ) => void;
  loadVisits: () => void;
}

describe('VisitsContainer', () => {
  const navigation = {
    navigate: jest.fn(),
  };

  const props: (additionalInfo?: Object) => Props = (additionalInfo = {}) => {
    return {
      navigation: navigation,
      visits: [],
      error: 'An error occurred',
      loading: false,
      profile: undefined,
      sendData: (
        accessToken: string,
        lastUpadet: string,
        synchronisation: Synchronisation,
      ): void => {
        jest.fn();
      },
      loadVisits: function (): void {
        jest.fn();
      },
      ...additionalInfo,
    };
  };

  it('renders correctly', () => {
    const {getByTestId} = render(<VisitsContainer {...props()} />);

    // Test TouchableOpacity interaction
    const syncButton = getByTestId('sync-button');
    fireEvent.press(syncButton);

    expect(getByTestId('img-prevention')).toBeTruthy();
    expect(getByTestId('img-conformite')).toBeTruthy();
    expect(getByTestId('img-hierarchical')).toBeTruthy();
  });

  // Additional tests
  it('displays the correct number of horizontal lines', () => {
    const {getAllByTestId} = render(<VisitsContainer {...props()} />);
    const horizontalLines = getAllByTestId('horizontal-line');
    expect(horizontalLines.length).toBe(2);
  });

  it('displays the correct number of horizontal lines', () => {
    const {getAllByTestId} = render(<VisitsContainer {...props()} />);
    const horizontalLines = getAllByTestId('horizontal-line');
    expect(horizontalLines?.length).toBe(2);
  })

  it('should show list of visits without remarque', () => {
    const {queryByTestId} = render(
      <VisitsContainer
        {...props({visits: [new Visit(1, '12', 'f', 'd', [], undefined)]})}
      />,
    );
    const customVisitList = queryByTestId('custom-visit-list');
    expect(customVisitList).toBeTruthy();
  });

  // With visits
  it('should show list of visits without remarque', () => {
    const flashPhoto: FlashPhotoDto = {
      id: '123',
      Name: 'Photo',
      path: '/path/photo.jpg',
      idRemarque: '456',
      idVisite: '-1',
      levee: true,
      or: 0,
      formationId: undefined,
      wasDrafts: false,
      deleted: false,
      synchEtat: 1,
    };

    const visitArray: Visit[] = [
      new Visit(
        1,
        '12',
        'f',
        'd',
        [{md: [flashPhoto], ds: '', dt: '', lvl: 1, tk: '', nt: false}],
        undefined,
      ),
      new Visit(
        2,
        '2',
        'x',
        'y',
        [{md: [flashPhoto], ds: '', dt: '', lvl: 1, tk: '', nt: true}],
        undefined,
      ),
    ];

    const {getAllByTestId} = render(
      <VisitsContainer
        {...props({
          visits: visitArray,
        })}
      />,
    );
    const customVisitListElm1 = getAllByTestId('custom-visit-list')[0];
    expect(customVisitListElm1).toBeTruthy();

    const customVisitListElm2 = getAllByTestId('custom-visit-list')[1];
    expect(customVisitListElm2).toBeTruthy();
  });
});
