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
import { Subject } from 'rxjs';
import { AppState } from '../src/redux_configuration/appState';
import { connectionRootEpics } from '../src/common/isConnected/configuration/rootEpic';
import { visitsRootEpics } from '@contexts/visiteContext/configuration/rootEpic';
import { reduxReducer } from '../src/redux_configuration/rootReducers';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { synchronisationRootEpics } from '@contexts/synchronisationContext/configuration/rootEpic';
import { Stat } from "@contexts/statisticContext/domain/entity/Stat";
import { Profile } from "@contexts/profileContext/domain/entity/profile";
import { User } from "@contexts/profileContext/domain/entity/user";
import { profileRootEpics } from "@contexts/profileContext/configuration/rootEpic";
import { statisticRootEpics } from "@contexts/statisticContext/configuration/rootEpic";

export class ReduxStoreWO {
  private static instance: ReduxStoreWO;
  private rootEpics: Epic;
  private middleware: EpicMiddleware<Action>;
  private loadStatistic$: Subject<Stat> = new Subject();
  private loadLocalStats$: Subject<Stat> = new Subject();
  private saveStats$: Subject<void> = new Subject();
  private loginMsal$: Subject<Profile> = new Subject();
  private setUserConnected$: Subject<Profile> = new Subject();
  private checkUserConnected$: Subject<boolean> = new Subject();
  private loadProfileDetails$: Subject<User> = new Subject();
  private updateLocalProfile$: Subject<User> = new Subject();
  private SaveFlash$: Subject<void> = new Subject();
  private LoadData$: Subject<Site[]> = new Subject();
  private saveData$: Subject<void> = new Subject();
  private loadLastUpdateDate$: Subject<string> = new Subject();
  private loadLocalProfile$: Subject<Profile> = new Subject();

  private loadAllSites$: Subject<Site[]> = new Subject();

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
          loadLocalStats: (): Subject<Stat> => this.loadLocalStats$,
          saveStats: (): Subject<void> => this.saveStats$,
        },
        profileService: {
          loginMsal: (): Subject<Profile> => this.loginMsal$,
          loadProfileDetails: (): Subject<User> => this.loadProfileDetails$,
        },
        userRepository: {
          setUserConnected: (): Subject<Profile> => this.setUserConnected$,
          loadProfileDetails: (): Subject<User> => this.loadProfileDetails$,
          updateLocalProfile: (): Subject<User> => this.updateLocalProfile$,
          loadLocalProfile: (): Subject<Profile> => this.loadLocalProfile$,
        },
        visitsService: {
          SaveFlash: (): Subject<void> => this.SaveFlash$,
          LoadAllSites: (): Subject<Site[]> => this.loadAllSites$
        },
        synchronisationService: {
          loadData: (): Subject<Site[]> => this.LoadData$,
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

  loadStatisticNext = (stats: Stat): void => this.loadStatistic$.next(stats);
  loadStatisticError = (error: string): void =>
    this.loadStatistic$.error(error);

  saveStatsError = (error: string): void => this.saveStats$.error(error)
  saveStatsNext = (): void => this.saveStats$.next()
  loadDataNext = (data: Site[]): void => this.LoadData$.next(data);
  loadDataError = (error: string): void => this.LoadData$.error(error);

  saveDataNext = (): void => this.saveData$.next();
  saveDataError = (error: string): void => this.saveData$.error(error);

  loadLastUpdateDateNext = (lastUpdateDate: string): void =>
    this.loadLastUpdateDate$.next(lastUpdateDate);
  loadLastUpdateDateError = (error: string): void =>
    this.loadLastUpdateDate$.error(error);

  loginMsalNext = (profile: Profile): void => this.loginMsal$.next(profile);
  loginMsalError = (error: string): void => this.loginMsal$.error(error);

  loadProfileDetailsNext = (user: User): void =>
    this.loadProfileDetails$.next(user);
  loadProfileDetailsError = (error: string): void =>
    this.loadProfileDetails$.error(error);

  setUserConnectedNext = (profile: Profile): void =>
    this.setUserConnected$.next(profile);
  setUserConnectedError = (error: string): void =>
    this.setUserConnected$.error(error);

  updateLocalProfileNext = (user: User): void =>
    this.updateLocalProfile$.next(user);
  updateLocalProfileError = (error: string): void =>
    this.updateLocalProfile$.error(error);

  loadLocalProfileNext = (profile: Profile): void =>
    this.loadLocalProfile$.next(profile);
  loadLocalProfileError = (error: string): void =>
    this.loadLocalProfile$.error(error);

  loadAllSitesError = (error: string): void => this.loadAllSites$.error(error)
  loadAllSitesNext = (sites: Site[]): void => this.loadAllSites$.next(sites)

  loadLocalStatsError = (error: string): void => this.loadLocalStats$.error(error)
  loadLocalStatsNext = (stat: Stat): void => this.loadLocalStats$.next(stat)
}
