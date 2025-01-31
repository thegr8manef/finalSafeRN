import React from 'react';
import { render } from '@testing-library/react-native';
import { StatVisit } from '@contexts/statisticContext/domain/entity/statVisit';
import { ProgressVisitsStats } from '@contexts/statisticContext/adapters/primaries/Dashboard/Components/ProgressVisitsStats';


interface Props {
  title: string;
  statsVisit: StatVisit
}
describe('ProgressVisitsStats', () => {
  const statVisit = new StatVisit( 10, 20,30,40,100, );
    
  
  it('should render the component with the correct props', () => {
    const props: Props ={
      title:'Visits',
      statsVisit: statVisit
     }
  const { getByTestId , getAllByTestId} = render(<ProgressVisitsStats  {...props} />);
    expect(getByTestId('Title').children[0]).toBe('Visits');
    expect(getAllByTestId('ProgressBar').length).toBe(4)
    expect(getAllByTestId('Label').length).toBe(4)

  });

});