import {AppState} from '../../../../redux_configuration/appState';
import {
  statErrorSelector,
  statLoadingSelector,
  loadStatSelector,
} from '../../../useCases/LoadStat/selectors';
import {Dispatch} from 'redux';
import {StatActionTypes} from '../../../useCases/LoadStat/actionTypes';
import {connect} from 'react-redux';
import {DashboardContainer} from './dashboard.container';
import {LoadStat} from '../../../useCases/LoadStat/action';
import {Stat} from '../../../domain/entity/Stat';
import {
  loadLocalStatErrorSelector,
  loadLocalStatLoadingSelector,
  loadLocalStatSelector,
} from '../../../useCases/LoadLocalStat/selectors';

interface StateToPropsType {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
}
interface DispatchToPropsType {
  loadStat: () => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading: loadLocalStatLoadingSelector(state),
  error: loadLocalStatErrorSelector(state),
  stat: loadLocalStatSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadStat: (): StatActionTypes => dispatch(LoadStat()),
});

export const DashboardPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardContainer);
