import {AppState} from '../../../../redux_configuration/appState';
import {
  statErrorSelector,
  statLoadingSelector,
  loadStatSelector,
} from '../../../useCases/Dashboard/selectors';
import {Dispatch} from 'redux';
import {StatActionTypes} from '../../../useCases/Dashboard/actionTypes';
import {connect} from 'react-redux';
import {DashboardContainer} from './dashboard.container';
import {stat} from '../../../useCases/Dashboard/action';
import {Stat} from "../../../domain/entity/Stat";

interface StateToPropsType {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
}
interface DispatchToPropsType {
  LoadStat: () => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading: statLoadingSelector(state),
  error: statErrorSelector(state),
  stat: loadStatSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  LoadStat: (): StatActionTypes => dispatch(stat()),
});

export const DashboardPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardContainer);
