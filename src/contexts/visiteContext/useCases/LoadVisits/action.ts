import {Visit} from '@contexts/visiteContext/domain/entity/Visit';
import {
  LoadVisitsFailedAction,
  LoadVisitsSuccessAction,
  LOAD_VISITS,
  LOAD_VISITS_FAILED,
  LOAD_VISITS_SUCCESS,
  LoadVisitsAction,
} from './actionTypes';
import {VisitFlash} from '@contexts/visiteContext/domain/entity/VisitFlash';

export const LoadVisits = (): LoadVisitsAction => {
  return {
    type: LOAD_VISITS,
  };
};
export const LoadVisitsFailed = (error: string): LoadVisitsFailedAction => ({
  type: LOAD_VISITS_FAILED,
  payload: error,
});

export const LoadVisitsSuccess = (
  visits: Visit[] | VisitFlash[],
): LoadVisitsSuccessAction => ({
  type: LOAD_VISITS_SUCCESS,
  payload: visits,
});
