import {Dispatch} from 'redux';
import {AppState} from '../../../../redux_configuration/appState';
import {SplashScreen} from './splash.container';
import {LoadDataActionTypes} from '../../../../synchronisationContext/useCases/LoadData/actionTypes';
import {loadData} from '../../../../synchronisationContext/useCases/LoadData/actions';
import {loadingDataSelector} from '../../../../synchronisationContext/useCases/LoadData/selectors';
import {LoadLocalProfileAction} from '../../../useCases/LoadLocalProfile/actionType';
import {loadLocalProfile} from '../../../useCases/LoadLocalProfile/action';
import {Profile} from '../../../domain/entity/profile';
import {connect} from 'react-redux';
import {connectionStatusSelector} from '../../../../common/isConnected/useCase/loadConnectionStatus/selector';
import {localProfileSelector} from '../../../useCases/LoadLocalProfile/selectors';

interface StateToPropsType {
  loading: boolean;
  connectionStatus: boolean | undefined;
  profile: Profile | undefined;
}

interface DispatchToPropsType {
  loadLocalProfile: () => void;
  loadSychronisationData: (accessToken: string) => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading: loadingDataSelector(state),
  connectionStatus: connectionStatusSelector(state),
  profile: localProfileSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadSychronisationData: (accessToken: string): LoadDataActionTypes =>
    dispatch(loadData(accessToken)),
  loadLocalProfile: (): LoadLocalProfileAction => dispatch(loadLocalProfile()),
});

export const SplashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);
