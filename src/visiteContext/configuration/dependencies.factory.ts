import {VisitsService} from '../domain/gateway/visitsService';
import {visitsService} from '../adapters/secondaires/visitsService';

export class VisitsDependanciesFactory {
  static getVisitsService(): VisitsService {
    return new visitsService();
  }
}
