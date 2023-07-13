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
import {loadConnectionStateSelector} from '../../../../common/isConnected/useCase/listnerConnection/selector';
import {LoadConnectionStateActionTypes} from '../../../../common/isConnected/useCase/listnerConnection/actionTypes';
import {loadConnectionStat} from '../../../../common/isConnected/useCase/listnerConnection/actions';
import {LoadLocalStatActionTypes} from '../../../useCases/LoadLocalStat/actionTypes';
import {loadLocalStat} from '../../../useCases/LoadLocalStat/actions';

interface StateToPropsType {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
  connectionState: boolean | undefined;
}
interface DispatchToPropsType {
  loadStat: () => void;
  loadConnectionState: () => void;
  loadLocalStat: () => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading: loadLocalStatLoadingSelector(state),
  error: loadLocalStatErrorSelector(state),
  stat: loadLocalStatSelector(state),
  connectionState: loadConnectionStateSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadStat: (): StatActionTypes => dispatch(LoadStat()),
  loadConnectionState: (): LoadConnectionStateActionTypes =>
    dispatch(loadConnectionStat()),
  loadLocalStat: (): LoadLocalStatActionTypes => dispatch(loadLocalStat()),
});

export const DashboardPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardContainer);
