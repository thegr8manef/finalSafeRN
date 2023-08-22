import { combineReducers } from "redux";
import { VisitsState } from "./state";
import { reducerVisitFlash } from "../useCases/saveFlash/reducer";
import { reducerLoadSites } from "../useCases/LoadSites/reducer";
import { reducerLoadVisits } from "../useCases/LoadVisits/reducer";
import { reducerSaveVisit } from "../useCases/SaveVisit/reducer";


export const reducerVisits = combineReducers<VisitsState>({
  saveFlash: reducerVisitFlash,
  saveVisit: reducerSaveVisit,
  loadSites: reducerLoadSites,
  loadVisits: reducerLoadVisits
});
