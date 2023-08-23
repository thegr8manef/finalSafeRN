import { combineReducers } from "redux";
import { VisitsState } from "./state";
import { reducerVisitFlash } from "../useCases/saveFlash/reducer";
import { reducerLoadSites } from "../useCases/LoadSites/reducer";
import { reducerLoadVisits } from "../useCases/LoadVisits/reducer";
import { reducerLoadRemarques } from "../useCases/LoadRemarque/reducer";
import { reducerDeleteVisits } from "../useCases/DeleteVisits/reducer";
import { reducerSaveVisit } from "../useCases/SaveVisit/reducer";


export const reducerVisits = combineReducers<VisitsState>({
  saveFlash: reducerVisitFlash,
  loadSites: reducerLoadSites,
  loadVisits: reducerLoadVisits,
  loadRemarques: reducerLoadRemarques,
  deleteVisits: reducerDeleteVisits,
  saveVisit: reducerSaveVisit,
});
