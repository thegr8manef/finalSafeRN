import {profileEpicsDependecies} from '../profileContext/configuration/depnedencies.redux';
import {dashboardEpicsDependecies} from '../dashboardContext/configuration/depnedencies.redux';
import {profileRootEpics} from '../profileContext/configuration/rootEpic';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {dashboardRootEpics} from '../dashboardContext/configuration/rootEpic';
import {visitsEpicsDependecies} from '../visiteContext/configuration/depnedencies.redux';
import {visitsRootEpics} from '../visiteContext/configuration/rootEpic';
import {connectionRootEpics} from '../common/isConnected/configuration/rootEpic';
import {connectionEpicsDependencies} from '../common/isConnected/configuration/depnedencies.redux';

export const rootEpics = combineEpics(
  profileRootEpics,
  dashboardRootEpics,
  visitsRootEpics,
  connectionRootEpics,
);

export const epicsMiddleware = createEpicMiddleware({
  dependencies: {
    ...profileEpicsDependecies,
    ...visitsEpicsDependecies,
    ...dashboardEpicsDependecies,
    ...connectionEpicsDependencies,
  },
});
