import { DbVisitsService } from "@contexts/visiteContext/adapters/secondaires/dbVisitsService";
import { VisitsDependanciesFactory } from "@contexts/visiteContext/configuration/dependencies.factory";

// Mocking DbVisitsService

describe('VisitsDependanciesFactory', () => {
  it('should create an instance of DbVisitsService', () => {
    const visitsService = VisitsDependanciesFactory.getVisitsService();
    expect(visitsService).toBeInstanceOf(DbVisitsService);
  });
});

