import { Observable } from 'rxjs';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { Accompagnant } from '@contexts/visiteContext/domain/entity/Accompagnant';

// This interface defines the contract for a repository that handles synchronization data.
export interface SynchronisationRepository {
  // Saves an array of Site objects and returns an Observable with no result (void).
  // Used to persist synchronization data related to Sites.
  saveData(sites: Site[]): Observable<void>;

  // Saves an array of Accompagnant objects and returns an Observable with no result (void).
  // Used to persist synchronization data related to Accompagnants.
  saveAccompagnant(accompagnant: Accompagnant[]): Observable<void>;

  // Loads the last update date as a string and returns it as an Observable.
  // Used to retrieve the last update date for synchronization purposes.
  loadLastUpdateDate(): Observable<string>;
}
