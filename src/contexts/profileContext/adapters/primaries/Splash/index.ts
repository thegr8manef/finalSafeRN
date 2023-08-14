import {Dispatch} from 'redux';
import {SplashContainer} from './splash.container';
import {connect} from 'react-redux';
import {AppState} from '@redux/appState';

import {connectionStatusSelector} from '@common/isConnected/useCase/loadConnectionStatus/selector';
import {Profile} from '@contexts/profileContext/domain/entity/profile';
import {loadingDataSelector} from '@contexts/synchronisationContext/useCases/LoadData/selectors';
import {localProfileSelector} from '@contexts/profileContext/useCases/LoadLocalProfile/selectors';
import {loadData} from '@contexts/synchronisationContext/useCases/LoadData/actions';
import {LoadLocalProfileAction} from '@contexts/profileContext/useCases/LoadLocalProfile/actionType';
import {LoadDataActionTypes} from '@contexts/synchronisationContext/useCases/LoadData/actionTypes';
import {loadLocalProfile} from '@contexts/profileContext/useCases/LoadLocalProfile/action';

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

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export type SplashPageProps = PropsFromRedux;

export const SplashPage = connector(SplashContainer);
