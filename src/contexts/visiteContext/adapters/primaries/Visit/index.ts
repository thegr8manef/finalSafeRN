import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loadVisitsErrorSelector, loadVisitsSelector, localVistsSelector } from '@contexts/visiteContext/useCases/LoadVisits/selector';
import { AppState } from '@redux/appState';
import { LoadVisitsActionDbTypes } from '@contexts/visiteContext/useCases/LoadVisits/actionTypes';
import { LoadVisits } from '@contexts/visiteContext/useCases/LoadVisits/action';
import { VisitsContainer } from './visits.container';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { Synchronisation } from '@contexts/synchronisationContext/domain/entity/Synchronisation';
import { SendDataActionTypes } from '@contexts/synchronisationContext/useCases/SendData/actionTypes';
import { sendData } from '@contexts/synchronisationContext/useCases/SendData/actions';

interface StateToPropsType {
  visits: Visit[] | undefined;
  error: string | undefined;
  loading: boolean;

}
interface DispatchToPropsType {
  loadVisits: () => void;
  sendData: (accessToken: string, lastUpadet: string, synchronisation: Synchronisation) => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  error: loadVisitsErrorSelector(state),
  visits: localVistsSelector(state),
  loading: loadVisitsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadVisits: (): LoadVisitsActionDbTypes => dispatch(LoadVisits()),
  sendData: (accessToken: string, lastUpadet: string, synchronisation: Synchronisation): SendDataActionTypes =>
    dispatch(sendData(accessToken, lastUpadet, synchronisation))

});

export const VisitsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitsContainer);
