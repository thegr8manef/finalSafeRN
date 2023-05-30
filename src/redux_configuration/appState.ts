import {ProfileState} from '../profileContext/configuration/state';
import {DashboardState} from '../dashboardContext/configuration/state';

export interface AppState {
  profile: ProfileState;

  dashboard: DashboardState;
}
