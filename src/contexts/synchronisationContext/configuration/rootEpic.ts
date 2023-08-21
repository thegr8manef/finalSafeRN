import {combineEpics} from 'redux-observable';
import {loadDataEpic} from '../useCases/LoadData/epic';
import { sendDataEpic } from '../useCases/SendData/epic';

export const synchronisationRootEpics = combineEpics(loadDataEpic, sendDataEpic);
