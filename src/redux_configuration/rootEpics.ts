import {profileEpicsDependecies} from '../profileContext/configuration/depnedencies.redux';
import {dashboardEpicsDependecies} from '../dashboardContext/configuration/depnedencies.redux';
import {profileRootEpics} from '../profileContext/configuration/rootEpic';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {dashboardRootEpics} from '../dashboardContext/configuration/rootEpic';
import {visitsEpicsDependecies} from '../visitsContext/configuration/depnedencies.redux';
import {visitsRootEpics} from '../visitsContext/configuration/rootEpic';

export const rootEpics = combineEpics(
  profileRootEpics,
  dashboardRootEpics,
  visitsRootEpics,
);

export const epicsMiddleware = createEpicMiddleware({
  dependencies: {
    ...profileEpicsDependecies,
    ...visitsEpicsDependecies,
    ...dashboardEpicsDependecies,
  },
});
