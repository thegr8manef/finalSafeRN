import {statisticEpicsDependecies} from '@contexts/statisticContext/configuration/depnedencies.redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {statisticRootEpics} from '@contexts/statisticContext/configuration/rootEpic';
import {visitsEpicsDependecies} from '@contexts/visiteContext/configuration/depnedencies.redux';
import {visitsRootEpics} from '@contexts/visiteContext/configuration/rootEpic';
import {connectionRootEpics} from '@common/isConnected/configuration/rootEpic';
import {connectionEpicsDependencies} from '@common/isConnected/configuration/depnedencies.redux';
import {synchronisationRootEpics} from '@contexts/synchronisationContext/configuration/rootEpic';
import {synchronisationEpicsDependencies} from '@contexts/synchronisationContext/configuration/depnedencies.redux';
import {profileRootEpics} from '@contexts/profileContext/configuration/rootEpic';
import {profileEpicsDependecies} from '@contexts/profileContext/configuration/depnedencies.redux';

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
