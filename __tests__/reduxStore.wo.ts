import {
  Action,
  Store,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import {
  combineEpics,
  Epic,
  EpicMiddleware,
  createEpicMiddleware,
} from 'redux-observable';
import {Subject} from 'rxjs';
import {AppState} from '../src/redux_configuration/appState';
import {Statistic} from '../src/common/adapters/secondaries/db/entity/Statistic';
import {connectionRootEpics} from '../src/common/isConnected/configuration/rootEpic';
import {Stat} from '../src/statisticContext/domain/entity/Stat';
import {profileRootEpics} from '../src/profileContext/configuration/rootEpic';
import {Profile} from '../src/profileContext/domain/entity/profile';
import {User} from '../src/profileContext/domain/entity/user';
import {visitsRootEpics} from '../src/visiteContext/configuration/rootEpic';
import {reduxReducer} from '../src/redux_configuration/rootReducers';
import {Chantier} from '../src/visiteContext/domain/entity/Chantier';
import {synchronisationRootEpics} from '../src/synchronisationContext/configuration/rootEpic';
import { statisticRootEpics } from '../src/statisticContext/configuration/rootEpic';

export class ReduxStoreWO {
  private static instance: ReduxStoreWO;
  private rootEpics: Epic;
  private middleware: EpicMiddleware<Action>;
  private loadStatistic$: Subject<Stat> = new Subject();
  private loadStatFomLocal$: Subject<Stat> = new Subject();
  private saveStatInLocal$: Subject<void> = new Subject();
  private loginMsal$: Subject<Profile> = new Subject();
  private setUserConnected$: Subject<void> = new Subject();
  private checkUserConnected$: Subject<boolean> = new Subject();
  private loadProfileDetails$: Subject<User> = new Subject();
  private updateLocalProfile$: Subject<void> = new Subject();
  private SaveFlash$: Subject<void> = new Subject();
  private LoadData$: Subject<Chantier[]> = new Subject();
  private saveData$: Subject<void> = new Subject();
  private loadLastUpdateDate$: Subject<string> = new Subject();

  constructor() {
    this.rootEpics = combineEpics<Action>(
      profileRootEpics,
      statisticRootEpics,
      visitsRootEpics,
      connectionRootEpics,
      synchronisationRootEpics,
    );
    this.middleware = createEpicMiddleware({
      dependencies: {
        statisticService: {
          loadStatistic: (): Subject<Stat> => this.loadStatistic$,
        },
        statsRepository: {
          loadLocalStats: (): Subject<Stat> => this.loadStatFomLocal$,
          saveStats: (): Subject<void> => this.saveStatInLocal$,
        },
        profileService: {
          loginMsal: (): Subject<Profile> => this.loginMsal$,
          loadProfileDetails: (): Subject<User> => this.loadProfileDetails$,
        },
        userRepository: {
          setUserConnected: (): Subject<void> => this.setUserConnected$,
          checkUserConnected: (): Subject<boolean> => this.checkUserConnected$,
          loadProfileDetails: (): Subject<User> => this.loadProfileDetails$,
          updateLocalProfile: (): Subject<void> => this.updateLocalProfile$,
        },
        visiteService: {
          SaveFlash: (): Subject<void> => this.SaveFlash$,
        },
        synchronisationService: {
          loadData: (): Subject<Chantier[]> => this.LoadData$,
        },
        synchronisationRepository: {
          saveData: (): Subject<void> => this.saveData$,
          loadLastUpdateDate: (): Subject<string> => this.loadLastUpdateDate$,
        },
      },
    });
  }

  static getInstance(): ReduxStoreWO {
    if (!ReduxStoreWO.instance) {
      ReduxStoreWO.instance = new ReduxStoreWO();
      return ReduxStoreWO.instance;
    }
    return ReduxStoreWO.instance;
  }

  getStore(): Store<AppState> {
    const store: Store<AppState, Action> = createStore(
      reduxReducer,
      applyMiddleware(this.middleware),
    );
    this.middleware.run(this.rootEpics);
    return store;
  }

  loadStatisticNext = (stats: Stat): void =>
    this.loadStatistic$.next(stats);
    loadStatisticError = (error: string): void => this.loadStatistic$.error(error);

  loadDataNext = (data: Chantier[]): void => this.LoadData$.next(data);
  loadDataError = (error: string): void => this.LoadData$.error(error);

  saveDataNext = (): void => this.saveData$.next();
  saveDataError = (error: string): void => this.saveData$.error(error);

  loadLastUpdateDateNext = (lastUpdateDate: string): void =>
    this.loadLastUpdateDate$.next(lastUpdateDate);
  loadLastUpdateDateError = (error: string): void =>
    this.loadLastUpdateDate$.error(error);
}
