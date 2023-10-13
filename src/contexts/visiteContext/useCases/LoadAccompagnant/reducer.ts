import { LoadAccompagnantsState } from "@contexts/visiteContext/configuration/state";
import { LOAD_ACCOMPAGNANTS, LOAD_ACCOMPAGNANTS_FAILED, LOAD_ACCOMPAGNANTS_SUCCESS, LoadAccompagnantsActionTypes } from "./actionType";

const initialState: LoadAccompagnantsState= {
  error: undefined,
  Accompagnant: undefined,
  loading: false,
};

export const reducerLoadAccompagnants = (
  state = initialState,
  action: LoadAccompagnantsActionTypes,
): LoadAccompagnantsState => {
  switch (action.type) {

    case LOAD_ACCOMPAGNANTS:
      return { error: undefined, Accompagnant: undefined, loading: true };

    case LOAD_ACCOMPAGNANTS_SUCCESS:
      return { error: undefined, Accompagnant: action.payload, loading: false };

    case LOAD_ACCOMPAGNANTS_FAILED:
      return { error: action.payload, Accompagnant: undefined, loading: false, };
      
    default:
      return state;
  }
};
