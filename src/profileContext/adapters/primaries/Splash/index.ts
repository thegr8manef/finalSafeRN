import {Dispatch} from 'redux';
import {SplashContainer} from './splash.container';
import {connect} from 'react-redux';
import {AppState} from '@redux/appState';
import {localProfileSelector} from '@profileContext/useCases/LoadLocalProfile/selectors';
import {Profile} from '@profileContext/domain/entity/profile';
import {connectionStatusSelector} from '@common/isConnected/useCase/loadConnectionStatus/selector';
import {loadLocalProfile} from '@profileContext/useCases/LoadLocalProfile/action';
import {LoadLocalProfileAction} from '@profileContext/useCases/LoadLocalProfile/actionType';
import {LoadDataActionTypes} from '../../../../synchronisationContext/useCases/LoadData/actionTypes';
import {loadData} from '../../../../synchronisationContext/useCases/LoadData/actions';
import {loadingDataSelector} from '../../../../synchronisationContext/useCases/LoadData/selectors';


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
