import {VisitsService} from '../domain/gateway/visitsService';
import {DbVisitsService} from '../adapters/secondaires/visitsService';

export class VisitsDependanciesFactory {
  static getVisitsService(): VisitsService {
    return new DbVisitsService();
  }
}
