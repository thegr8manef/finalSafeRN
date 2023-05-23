import { profileEpicsDependecies } from "../profileContext/configuration/depnedencies.redux";
import { profileRootEpics } from "../profileContext/configuration/rootEpic";
import {combineEpics,createEpicMiddleware} from 'redux-observable'

export const rootEpics = combineEpics(profileRootEpics)

export const epicsMiddleware = createEpicMiddleware({
    dependencies : {
        ...profileEpicsDependecies,
    }
})