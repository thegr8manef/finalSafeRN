import {StatisticState} from '@contexts/statisticContext/configuration/state';
import {SynchronisationState} from '@contexts/synchronisationContext/configuration/state';
import {VisitsState} from '@contexts/visiteContext/configuration/state';
import {ConnectionStatus} from '@common/isConnected/configuration/state';
import {ProfileState} from '@contexts/profileContext/configuration/state';

export interface AppState {
  profile: ProfileState;
  visits: VisitsState;
  statistic: StatisticState;
  synchronisation: SynchronisationState;
  connection: ConnectionStatus;
}
