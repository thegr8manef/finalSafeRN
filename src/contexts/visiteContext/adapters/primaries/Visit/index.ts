import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loadVisitsErrorSelector, loadVisitsSelector, localVistsSelector } from '@contexts/visiteContext/useCases/LoadVisits/selector';
import { AppState } from '@redux/appState';
import { LoadVisitsActionDbTypes } from '@contexts/visiteContext/useCases/LoadVisits/actionTypes';
import { LoadVisits } from '@contexts/visiteContext/useCases/LoadVisits/action';
import { VisitsContainer } from './visits.container';
import { Visits } from '@contexts/visiteContext/domain/entity/Visits';

interface StateToPropsType {
  visits: Visits[] | undefined;
  error: string | undefined;
  loading: boolean;

}
interface DispatchToPropsType {
  loadVisits: () => void;

}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  error: loadVisitsErrorSelector(state),
  visits: localVistsSelector(state),
  loading: loadVisitsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadVisits: (): LoadVisitsActionDbTypes => dispatch(LoadVisits()),
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitsContainer);
