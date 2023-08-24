import { DELETE_VISITS,
         DELETE_VISITS_FAILED,
         DELETE_VISITS_SUCCESS,
         DeleteVisitsAction,
         DeleteVisitsFailedAction,
         DeleteVisitsSuccessAction
        } from "./actionTypes";

export const deleteVisit = (): DeleteVisitsAction => ({
    type: DELETE_VISITS
  });
  export const deleteVisitFailed = (
    error: string,
  ): DeleteVisitsFailedAction => ({
    type: DELETE_VISITS_FAILED,
    payload: error,
  });
  export const deleteVisitSuccess = (
   
  ): DeleteVisitsSuccessAction => ({
    type: DELETE_VISITS_SUCCESS,
  
  });
  