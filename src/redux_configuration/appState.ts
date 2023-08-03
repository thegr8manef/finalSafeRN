import {ProfileState} from '../profileContext/configuration/state';
import {StatisticState} from '../statisticContext/configuration/state';
import {SynchronisationState} from '../synchronisationContext/configuration/state';
import {
  VisitsState,
} from '../visiteContext/configuration/state';
import {ConnectionStatus} from '../common/isConnected/configuration/state';

export interface AppState {
  profile: ProfileState;
  visits: VisitsState;
  statistic: StatisticState;
  synchronisation: SynchronisationState;
  connection: ConnectionStatus;
}
