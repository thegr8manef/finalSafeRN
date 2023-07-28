import {profileEpicsDependecies} from '../profileContext/configuration/depnedencies.redux';
import {statisticEpicsDependecies} from '../statisticContext/configuration/depnedencies.redux';
import {profileRootEpics} from '../profileContext/configuration/rootEpic';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {statisticRootEpics} from '../statisticContext/configuration/rootEpic';
import {visitsEpicsDependecies} from '../visiteContext/configuration/depnedencies.redux';
import {visitsRootEpics} from '../visiteContext/configuration/rootEpic';
import {connectionRootEpics} from '../common/isConnected/configuration/rootEpic';
import {connectionEpicsDependencies} from '../common/isConnected/configuration/depnedencies.redux';
import {synchronisationRootEpics} from '../synchronisationContext/configuration/rootEpic';
import {synchronisationEpicsDependencies} from '../synchronisationContext/configuration/depnedencies.redux';

export const rootEpics = combineEpics(
  profileRootEpics,
  statisticRootEpics,
  visitsRootEpics,
  connectionRootEpics,
  synchronisationRootEpics,
);

export const epicsMiddleware = createEpicMiddleware({
  dependencies: {
    ...profileEpicsDependecies,
    ...visitsEpicsDependecies,
    ...statisticEpicsDependecies,
    ...connectionEpicsDependencies,
    ...synchronisationEpicsDependencies,
  },
});
