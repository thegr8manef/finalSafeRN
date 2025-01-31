import Remarque from "@contexts/visiteContext/domain/entity/Remarque";
import { Visit } from "@contexts/visiteContext/domain/entity/Visit";
import { VisitFlash } from "@contexts/visiteContext/domain/entity/VisitFlash";
import { AppState } from "@redux/appState";


export const loadingVisitsSelector = (appState: AppState): boolean =>
    appState.visits.loadVisits.loading;

export const loadVisitsErrorSelector = (
    appState: AppState,
): string | undefined => appState.visits.loadVisits.error;

export const loadVisitsSelector = (appState: AppState): Visit[]  |undefined =>
    appState?.visits?.loadVisits?.visits;
