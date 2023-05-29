import {Stat } from "../domain/entity/Stat";

export interface DashboardState {
  stat: StatState;
}

export interface StatState {

  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
}
