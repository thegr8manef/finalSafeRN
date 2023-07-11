import {Stat} from '../domain/entity/Stat';

export interface DashboardState {
  stat: StatState;
  saveStat: SaveStatState;
  loadLocalStat: LocalStatState;
}
export interface StatState {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
}

export interface SaveStatState {
  loading: boolean;
  error: string | undefined;
}

export interface LocalStatState {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
}
