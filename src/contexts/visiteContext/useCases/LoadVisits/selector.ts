import { Remarque } from "@common/adapters/secondaries/db/entity/Remarque";
import { Visit } from "@contexts/visiteContext/domain/entity/Visit";
import { AppState } from "@redux/appState";


export const loadVisitsSelector = (appState: AppState): boolean =>
    appState.visits.loadVisits.loading;

export const loadVisitsErrorSelector = (
    appState: AppState,
): string | undefined => appState.visits.loadVisits.error;

export const localVistsSelector = (appState: AppState): Visit[] | undefined =>
    appState.visits.loadVisits.visits;

export const loadRemarkSelector = (appState: AppState): Remarque | undefined =>
    appState.visits.saveFlash.createdRemark;
