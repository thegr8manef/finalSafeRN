import Remarque from "@contexts/visiteContext/domain/entity/Remarque";
import { LOAD_REMARQUES, LOAD_REMARQUES_FAILED, LOAD_REMARQUES_SUCCESS, LoadRemarquesAction, LoadRemarquesFailedAction, LoadRemarquesSuccessAction } from "./actionTypes";

export const loadRemarques = (): LoadRemarquesAction => ({
    type: LOAD_REMARQUES
  });
  export const LoadRemarquesFailed = (
    error: string,
  ): LoadRemarquesFailedAction => ({
    type: LOAD_REMARQUES_FAILED,
    payload: error,
  });
  export const LoadRemarquesSuccess = (
    remarques: Remarque[],
  ): LoadRemarquesSuccessAction => ({
    type: LOAD_REMARQUES_SUCCESS,
    payload: remarques,
  });
  