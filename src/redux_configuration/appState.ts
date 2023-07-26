import {ProfileState} from '../profileContext/configuration/state';
import {DashboardState} from '../dashboardContext/configuration/state';
import {SynchronisationState} from '../synchronisationContext/configuration/state';
import {
  LoadchantierByCodeState,
  VisitsState,
} from '../visiteContext/configuration/state';
import {ConnectionStatus} from '../common/isConnected/configuration/state';

export interface AppState {
  profile: ProfileState;
  visits: VisitsState;
  dashboard: DashboardState;
  synchronisation: SynchronisationState;
  connection: ConnectionStatus;
  loadChantier: LoadchantierByCodeState;
}
