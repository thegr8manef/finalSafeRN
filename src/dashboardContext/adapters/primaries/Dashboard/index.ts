import {AppState} from '../../../../redux_configuration/appState';
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
import {loadConnectionStatusSelector} from '../../../../common/isConnected/useCase/loadConnectionStatus/selector';

import {LoadLocalStatActionTypes} from '../../../useCases/LoadLocalStat/actionTypes';
import {loadLocalStat} from '../../../useCases/LoadLocalStat/actions';

interface StateToPropsType {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
  connectionStatus: boolean | undefined;
}
interface DispatchToPropsType {
  loadStat: () => void;
  loadLocalStat: () => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading: loadLocalStatLoadingSelector(state),
  error: loadLocalStatErrorSelector(state),
  stat: loadLocalStatSelector(state),
  connectionStatus: loadConnectionStatusSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadStat: (): StatActionTypes => dispatch(LoadStat()),
  loadLocalStat: (): LoadLocalStatActionTypes => dispatch(loadLocalStat()),
});

export const DashboardPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardContainer);
