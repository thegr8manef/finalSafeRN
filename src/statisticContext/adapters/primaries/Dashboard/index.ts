import {AppState} from '../../../../redux_configuration/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {DashboardContainer} from './dashboard.container';
import {
  loadLocalStatErrorSelector,
  loadLocalStatLoadingSelector,
  localStatsSelector,
} from '../../../useCases/LoadLocalStats/selectors';
import {connectionStatusSelector} from '../../../../common/isConnected/useCase/loadConnectionStatus/selector';
import {LoadLocalStatsAction} from '../../../useCases/LoadLocalStats/actionTypes';
import {loadLocalStats} from '../../../useCases/LoadLocalStats/actions';
import {LoadRemoteStatsAction} from '../../../useCases/LoadRemoteStats/actionTypes';
import {loadRemoteStats} from '../../../useCases/LoadRemoteStats/action';
import {Stat} from '../../../domain/entity/Stat';
import {
  loadRemoteStatsErrorSelector,
  loadRemoteStatsLoadingSelector,
} from '../../../useCases/LoadRemoteStats/selectors';

interface StateToPropsType {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
  connectionStatus: boolean | undefined;
}
interface DispatchToPropsType {
  loadRemoteStats: () => void;
  loadLocalStats: () => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading:
    loadLocalStatLoadingSelector(state) ||
    loadRemoteStatsLoadingSelector(state),
  error:
    loadLocalStatErrorSelector(state) || loadRemoteStatsErrorSelector(state),
  stat: localStatsSelector(state),
  connectionStatus: connectionStatusSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadRemoteStats: (): LoadRemoteStatsAction => dispatch(loadRemoteStats()),
  loadLocalStats: (): LoadLocalStatsAction => dispatch(loadLocalStats()),
});

export const DashboardPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardContainer);
