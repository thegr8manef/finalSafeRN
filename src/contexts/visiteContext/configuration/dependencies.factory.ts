import { DbVisitsService } from "../adapters/secondaires/dbVisitsService";
import { VisitsRepository } from "../domain/gateway/visitsRepository";
import { VisitsService } from "../domain/gateway/visitsService";


export class VisitsDependanciesFactory {
  static getVisitsService(): VisitsService {
    return new DbVisitsService();
  }
  
  static getVisitRepository(): VisitsRepository {
    return new DbVisitsService();
  }
}
