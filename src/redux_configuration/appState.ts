import {ProfileState} from '../profileContext/configuration/state';
import {DashboardState} from '../dashboardContext/configuration/state';
import {
  SearchChantierState,
  VisitsState,
} from '../visiteContext/configuration/state';
import {ConnectionStatus} from '../common/isConnected/configuration/state';

export interface AppState {
  profile: ProfileState;
  visits: VisitsState;
  dashboard: DashboardState;
  connection: ConnectionStatus;
  searchChantier: SearchChantierState;
}
