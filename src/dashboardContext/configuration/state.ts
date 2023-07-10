import {Stat} from '../domain/entity/Stat';

export interface DashboardState {
  stat: StatState;
  saveStat: SaveStatState;
}
export interface StatState {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
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
