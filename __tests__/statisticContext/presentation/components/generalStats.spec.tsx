import React from 'react';
import { render } from '@testing-library/react-native';
import { GeneralStats } from '../../../../src/statisticContext/adapters/primaries/Dashboard/Components/generalStats';
import { Stat } from '../../../../src/statisticContext/domain/entity/Stat';
import { StatObservation } from '../../../../src/statisticContext/domain/entity/statObservation';
import { StatVisit } from '../../../../src/statisticContext/domain/entity/statVisit';
import { StatRisk } from '../../../../src/statisticContext/domain/entity/statRisk';
interface Props {
    stat: Stat
}
describe('GeneralStats Component', () => {
    const statRisk = new StatRisk(
        { label: 'Low', value: 10 },
        { label: 'Medium', value: 20 },
        { label: 'High', value: 30 },
        { label: 'Very High', value: 40 },
      );
    
      const statVisit = new StatVisit( 10, 20,30,40,100, );
    
      const statObservation = new StatObservation( 10,   20,   30, 40,     50,60,70, 80,  90, 100);
      const stat = new Stat(statRisk,   statVisit, statObservation,  1, 1590402837,   );
    
const props: Props ={
    stat: stat
}
    it('should render 3 components Number card', () => {
        const { getAllByTestId } = render(<GeneralStats {...props} />);

        expect(getAllByTestId('label').length).toBe(3);
        expect(getAllByTestId('value').length).toBe(3);
        expect(getAllByTestId('description').length).toBe(3);
    });

    it('Should render VisitNumberCard 1', () => {
        const { getAllByTestId } = render(<GeneralStats {...props} />);

        expect(getAllByTestId('label')[0].children[0]).toBe("txt.visites");
        expect(getAllByTestId('value')[0].children[0]).toBe(props.stat.statVisit.visitNumber.toString());
    }); 
});
