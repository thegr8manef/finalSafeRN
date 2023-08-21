import { Visits } from '@contexts/visiteContext/domain/entity/Visits';
import {
  LoadVisitsFailedAction,
  LoadVisitsSuccessAction,
  LOAD_VISITS,
  LOAD_VISITS_FAILED,
  LOAD_VISITS_SUCCESS,
  LoadVisitsAction,
} from './actionTypes';

export const LoadVisits = (): LoadVisitsAction => {
  return {
    type: LOAD_VISITS
  };
};
export const LoadVisitsFailed = (
  error: string,
): LoadVisitsFailedAction => ({
  type: LOAD_VISITS_FAILED,
  payload: error,
});

export const LoadVisitsSuccess = (
  visits: Visits[],
): LoadVisitsSuccessAction => ({
  type: LOAD_VISITS_SUCCESS,
  payload: visits,
});
