import {Dispatch} from 'redux';
import {AppState} from '../../../../redux_configuration/appState';
import {checkUserConnectedSuccessSelector} from '../../../useCases/CheckUserConnected/Selector';
import {UserInfoActionTypes} from '../../../useCases/CheckUserConnected/actionTypes';
import {checkUserConnected} from '../../../useCases/CheckUserConnected/actions';
import {connect} from 'react-redux';
import {SplashScreen} from './splash.container';
import {LoadDataActionTypes} from '../../../../synchronisationContext/useCases/LoadData/actionTypes';
import {loadData} from '../../../../synchronisationContext/useCases/LoadData/actions';
import {loadingDataSelector} from '../../../../synchronisationContext/useCases/LoadData/selectors';
import {loadConnectionStatusSelector} from '../../../../common/isConnected/useCase/loadConnectionStatus/selector';
import {profileSelector} from '../../../useCases/Login/selectors';

interface StateToPropsType {
  userConncted: boolean;
  loading: boolean;
  connectionStatus: boolean | undefined;
  profile: Profile | null;
}

interface DispatchToPropsType {
  checkUserConnected: (state: boolean) => void;
  loadSychronisationData: (accessToken: string) => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading: loadingDataSelector(state),
  connectionStatus: loadConnectionStatusSelector(state),
  userConncted: checkUserConnectedSuccessSelector(state),
  profile: profileSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadSychronisationData: (accessToken: string): LoadDataActionTypes =>
    dispatch(loadData(accessToken)),
  checkUserConnected: (): UserInfoActionTypes => dispatch(checkUserConnected()),
});

export const SplashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);
