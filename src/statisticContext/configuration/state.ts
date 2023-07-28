import {Stat} from '../domain/entity/Stat';

export interface StatisticState {
  loadRemoteStats: LoadRemoteStatsState;
  saveStats: SaveStatsState;
  loadLocalStats: LocalStatsState;
}
export interface LoadRemoteStatsState {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
}

export interface SaveStatsState {
  loading: boolean;
  error: string | undefined;
}

export interface LocalStatsState {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
}
