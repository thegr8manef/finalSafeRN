import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppState} from '@redux/appState';
import {Profile} from '@contexts/profileContext/domain/entity/profile';
import {SettingsContainer} from './settings.container';
import {
  loadVisitsErrorSelector,
  loadVisitsSelector,
  loadingVisitsSelector,
} from '@contexts/visiteContext/useCases/LoadVisits/selector';
import {LoadVisitsActionDbTypes} from '@contexts/visiteContext/useCases/LoadVisits/actionTypes';
import {LoadVisits} from '@contexts/visiteContext/useCases/LoadVisits/action';
import {Visit} from '@contexts/visiteContext/domain/entity/Visit';
import {SendDataActionTypes} from '@contexts/synchronisationContext/useCases/SendData/actionTypes';
import {sendData} from '@contexts/synchronisationContext/useCases/SendData/actions';
import {profileSelector} from '@contexts/profileContext/useCases/Login/selectors';
import {loadingSendSelector} from '@contexts/synchronisationContext/useCases/SendData/selector';

interface StateToPropsType {
  visits: Visit[] | undefined;
  error: string | undefined;
  loading: boolean;
  profile: Profile | undefined;
}
interface DispatchToPropsType {
  loadVisits: () => void;
  sendData: (accessToken: string, lastUpadet: string, visits: Visit[]) => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  profile: profileSelector(state),
  error: loadVisitsErrorSelector(state),
  visits: loadVisitsSelector(state),
  loading: loadingVisitsSelector(state) || loadingSendSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadVisits: (): LoadVisitsActionDbTypes => dispatch(LoadVisits()),
  sendData: (
    accessToken: string,
    lastUpadet: string,
    visits: Visit[],
  ): SendDataActionTypes => dispatch(sendData(accessToken, lastUpadet, visits)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export type SettingsPageProps = PropsFromRedux;

export const SettingsPage = connector(SettingsContainer);
