import { Action, Store, legacy_createStore as createStore, applyMiddleware } from "redux"
import { combineEpics, Epic, EpicMiddleware, createEpicMiddleware } from "redux-observable"
import { Subject } from 'rxjs'
import {AppState} from '../src/redux_configuration/appState'
import { Statistic } from "../src/common/adapters/secondaries/db/entity/Statistic"
import { connectionRootEpics } from "../src/common/isConnected/configuration/rootEpic"
import { dashboardRootEpics } from "../src/dashboardContext/configuration/rootEpic"
import { Stat } from "../src/dashboardContext/domain/entity/Stat"
import { profileRootEpics } from "../src/profileContext/configuration/rootEpic"
import { Profile } from "../src/profileContext/domain/entity/profile"
import { User } from "../src/profileContext/domain/entity/user"
import { visitsRootEpics } from "../src/visiteContext/configuration/rootEpic"
import { reduxReducer } from "../src/redux_configuration/rootReducers"

export class ReduxStoreWO {

    private static instance: ReduxStoreWO
    private rootEpics: Epic
    private middleware: EpicMiddleware<Action>
    private LoadStat$: Subject<Statistic> = new Subject()
    private loadStatFomLocal$: Subject<Stat> = new Subject()
    private saveStatInLocal$: Subject<void> = new Subject()
    private loginMsal$: Subject<Profile> = new Subject()
    private setUserConnected$: Subject<void> = new Subject()
    private checkUserConnected$: Subject<boolean> = new Subject()
    private loadProfileDetails$: Subject<User> = new Subject()
    private updateLocalProfile$: Subject<void> = new Subject()
    private SaveFlash$: Subject<void> = new Subject()

    constructor() {
        this.rootEpics = combineEpics<Action>(
            profileRootEpics,
            dashboardRootEpics,
            visitsRootEpics,
            connectionRootEpics,
        )
        this.middleware = createEpicMiddleware({
            dependencies: {
                DashboardService: {
                    LoadStat: (): Subject<Statistic> => this.LoadStat$
                },
                DBStatRepository: {
                    loadStatFomLocal: (): Subject<Stat> => this.loadStatFomLocal$,
                    saveStatInLocal: (): Subject<void> => this.saveStatInLocal$
                },
                ProfileService: {
                    loginMsal: (): Subject<Profile> => this.loginMsal$,
                    loadProfileDetails: (): Subject<User> => this.loadProfileDetails$
                },
                UserService: {
                    setUserConnected: (): Subject<void> => this.setUserConnected$,
                    checkUserConnected: (): Subject<boolean> => this.checkUserConnected$,
                    loadProfileDetails: (): Subject<User> => this.loadProfileDetails$,
                    updateLocalProfile: (): Subject<void> => this.updateLocalProfile$
                },
                VisiteService: {
                    SaveFlash: (): Subject<void> => this.SaveFlash$
                }
            }
        })
    }

    static getInstance(): ReduxStoreWO {
        if (!ReduxStoreWO.instance) {
            ReduxStoreWO.instance = new ReduxStoreWO()
            return ReduxStoreWO.instance
        }
        return ReduxStoreWO.instance
    }

    get getStore(): Store<AppState, Action<any>> {
        const store: Store<AppState, Action<any>> = createStore(reduxReducer, applyMiddleware(this.middleware))
        this.middleware.run(this.rootEpics)
        return store
    }

    getLoadStatNext = (statistic: Statistic): void => this.LoadStat$.next(statistic)
    getLoadStatError = (error: string): void => this.LoadStat$.error(error)
}