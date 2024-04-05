import {AppState} from '../../../../redux_configuration/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {DashboardContainer} from './dashboard.container';
import {
  loadLocalStatErrorSelector,
  loadLocalStatLoadingSelector,
  localStatsSelector,
} from '../../../useCases/LoadLocalStats/selectors';
import {connectionStatusSelector} from '@common/isConnected/useCase/loadConnectionStatus/selector';
import {LoadLocalStatsAction} from '../../../useCases/LoadLocalStats/actionTypes';
import {loadLocalStats} from '../../../useCases/LoadLocalStats/actions';
import {LoadRemoteStatsAction} from '../../../useCases/LoadRemoteStats/actionTypes';
import {loadRemoteStats} from '../../../useCases/LoadRemoteStats/action';
import {Stat} from '../../../domain/entity/Stat';
import {
  loadRemoteStatsErrorSelector,
  loadRemoteStatsLoadingSelector,
} from '../../../useCases/LoadRemoteStats/selectors';
import {Profile} from '@contexts/profileContext/domain/entity/profile';
import {localProfileSelector} from '@contexts/profileContext/useCases/LoadLocalProfile/selectors';
import {sitesSelector} from '@contexts/visiteContext/useCases/LoadSites/selectors';
import { LoadFlash } from '@contexts/visiteContext/useCases/LoadFlash/action';
import { LoadFlashActionDbTypes } from '@contexts/visiteContext/useCases/LoadFlash/actionTypes';
import { LoadSites } from '@contexts/visiteContext/useCases/LoadSites/action';
import { LoadSitesActionTypes } from '@contexts/visiteContext/useCases/LoadSites/actionTypes';
import { LoadVisits } from '@contexts/visiteContext/useCases/LoadVisits/action';
import { LoadVisitsActionDbTypes } from '@contexts/visiteContext/useCases/LoadVisits/actionTypes';
import { loadVisitsSelector } from '@contexts/visiteContext/useCases/LoadVisits/selector';

interface StateToPropsType {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
  profile: Profile | undefined;
  connectionStatus: boolean | undefined;
  sites: any;
  visits: any;
}
interface DispatchToPropsType {
  loadRemoteStats: () => void;
  loadLocalStats: () => void;
  loadSites: () => void;
  loadVisits: () => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading:
    loadLocalStatLoadingSelector(state) ||
    loadRemoteStatsLoadingSelector(state),
  error:
    loadLocalStatErrorSelector(state) || loadRemoteStatsErrorSelector(state),
  stat: localStatsSelector(state),
  connectionStatus: connectionStatusSelector(state),
  profile: localProfileSelector(state),
  sites: sitesSelector(state),
  visits  : loadVisitsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadRemoteStats: (): LoadRemoteStatsAction => dispatch(loadRemoteStats()),
  loadLocalStats: (): LoadLocalStatsAction => dispatch(loadLocalStats()),
  loadSites: (): LoadSitesActionTypes => dispatch(LoadSites()),
  loadVisits: (): LoadVisitsActionDbTypes => dispatch(LoadVisits()),

});

export const DashboardPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardContainer);
