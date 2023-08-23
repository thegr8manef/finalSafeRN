
export const DELETE_VISITS = 'DELETE_VISITS';
export const DELETE_VISITS_SUCCESS = 'DELETE_VISITS_SUCCESS';
export const DELETE_VISITS_FAILED = 'DELETE_VISITS_FAILED';

export interface DeleteVisitsAction {
  type: typeof DELETE_VISITS;
}

export interface DeleteVisitsFailedAction {
  type: typeof DELETE_VISITS_FAILED;
  payload: string;
}

export interface DeleteVisitsSuccessAction {
  type: typeof DELETE_VISITS_SUCCESS;
}

export type DeleteVisitsActionTypes =
  | DeleteVisitsAction
  | DeleteVisitsSuccessAction
  | DeleteVisitsFailedAction;
