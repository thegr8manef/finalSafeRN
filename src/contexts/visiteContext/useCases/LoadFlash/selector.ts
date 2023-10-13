import Remarque from "@contexts/visiteContext/domain/entity/Remarque";
import { Visit } from "@contexts/visiteContext/domain/entity/Visit";
import { VisitFlash } from "@contexts/visiteContext/domain/entity/VisitFlash";
import { AppState } from "@redux/appState";


export const loadingFlashSelector = (appState: AppState): boolean =>
    appState.visits.loadFlash.loading;

export const loadFlashErrorSelector = (
    appState: AppState,
): string | undefined => appState.visits.loadFlash.error;

export const loadFlashSelector = (appState: AppState): VisitFlash[] |undefined =>
    appState?.visits?.loadFlash?.flash;
