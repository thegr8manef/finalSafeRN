import {ConnectionDependanciesFactory} from './dependencies.factory';

export const connectionEpicsDependencies = {
  connectionRepository: ConnectionDependanciesFactory.getConnectionRepository(),
};
