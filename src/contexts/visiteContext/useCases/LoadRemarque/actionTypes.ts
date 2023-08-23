import Remarque from "@contexts/visiteContext/domain/entity/Remarque";

export const LOAD_REMARQUES = 'LOAD_REMARQUES';
export const LOAD_REMARQUES_SUCCESS = 'LOAD_REMARQUES_SUCCESS';
export const LOAD_REMARQUES_FAILED = 'LOAD_REMARQUES_FAILED';

export interface LoadRemarquesAction {
  type: typeof LOAD_REMARQUES;
}

export interface LoadRemarquesFailedAction {
  type: typeof LOAD_REMARQUES_FAILED;
  payload: string;
}

export interface LoadRemarquesSuccessAction {
  type: typeof LOAD_REMARQUES_SUCCESS;
  payload: Remarque[];
}

export type LoadRemarquesActionTypes =
  | LoadRemarquesAction
  | LoadRemarquesSuccessAction
  | LoadRemarquesFailedAction;
