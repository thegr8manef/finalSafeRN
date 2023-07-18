import {ProfileState} from '../profileContext/configuration/state';
import {DashboardState} from '../dashboardContext/configuration/state';
import {VisitsState} from '../visiteContext/configuration/state';
import {SynchronisationState} from '../common/synchronisationContext/configuration/state';
import {ConnectionStatus} from '../common/isConnected/configuration/state';

export interface AppState {
  profile: ProfileState;
  visits: VisitsState;
  dashboard: DashboardState;
  synchronisation: SynchronisationState;
  connection: ConnectionStatus;
}
