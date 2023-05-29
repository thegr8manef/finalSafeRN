import { FlatList } from "react-native";

export const DASHBOARD = 'DASHBOARD';
export const DASHBOARD_FAILED = 'DASHBOARD_FAILED';
export const DASHBOARD_SUCCESS = 'DASHBOARD_SUCCESS';

export interface DashboardAction {
  type: typeof DASHBOARD;
}
export interface DashboardActionFailed {
  type: typeof DASHBOARD_FAILED;
  payload: string;
}

export interface DashboardActionSuccess {
  type: typeof DASHBOARD_SUCCESS;
  payload: FlatList;
}

export type DashboardActionTypes =
  | DashboardAction
  | DashboardActionFailed
  | DashboardActionSuccess;
