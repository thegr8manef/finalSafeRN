import {Dispatch} from 'redux';
import {AppState} from '../../../../redux_configuration/appState';
import {
  checkUserConnectedSelector,
  checkUserConnectedSuccessSelector,
} from '../../../useCases/CheckUserConnected/Selector';
import {UserInfoActionTypes} from '../../../useCases/CheckUserConnected/actionTypes';
import {checkUserConnected} from '../../../useCases/CheckUserConnected/actions';
import {connect} from 'react-redux';
import {SplashScreen} from './splash.container';
import {LoadDataActionTypes} from '../../../../common/synchronisationContext/useCases/SynchronisationLoad/actionTypes';
import {loadData} from '../../../../common/synchronisationContext/useCases/SynchronisationLoad/actions';
import {loadingDataSelector} from '../../../../common/synchronisationContext/useCases/SynchronisationLoad/selectors';
import {loadingSaveSelector} from '../../../../common/synchronisationContext/useCases/SynchronisationSave/selectors';
import {loadConnectionStatusSelector} from '../../../../common/isConnected/useCase/loadConnectionStatus/selector';

interface StateToPropsType {
  userConncted: boolean;
  loading: boolean;
  connectionStatus: boolean | undefined;
}

interface DispatchToPropsType {
  checkUserConnected: (state: boolean) => void;
  synchronisation: (accessToken: string) => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  userConncted: checkUserConnectedSuccessSelector(state),
  loading: loadingDataSelector(state),
  connectionStatus: loadConnectionStatusSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  checkUserConnected: (): UserInfoActionTypes => dispatch(checkUserConnected()),
  synchronisation: (accessToken: string): LoadDataActionTypes =>
    dispatch(loadData(accessToken)),
});

export const SplashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);
