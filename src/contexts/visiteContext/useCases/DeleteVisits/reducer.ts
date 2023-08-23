import { DeleteVisitsState } from "@contexts/visiteContext/configuration/state";
import { DELETE_VISITS, DELETE_VISITS_FAILED, DELETE_VISITS_SUCCESS, DeleteVisitsActionTypes } from "./actionTypes";

const initialState: DeleteVisitsState= {
  error     : undefined,
  loading   : false,
};

export const reducerDeleteVisits = (
  state = initialState,
  action: DeleteVisitsActionTypes,
): DeleteVisitsState => {
  switch (action.type) {

    case DELETE_VISITS:
      return { error: undefined, loading: true };

    case DELETE_VISITS_SUCCESS:
      return { error: undefined,  loading: false };

    case DELETE_VISITS_FAILED:
      return { error: action.payload,  loading: false };
      
    default:
      return state;
  }
};
