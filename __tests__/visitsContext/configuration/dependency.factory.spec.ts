import { DbVisitsService } from "@contexts/visiteContext/adapters/secondaires/visitsService";
import { VisitsDependanciesFactory } from "@contexts/visiteContext/configuration/dependencies.factory";

// Mocking DbVisitsService
jest.mock('@contexts/visiteContext/adapters/secondaires/visitsService', () => {
  return {
    DbVisitsService: jest.fn(() => ({
    })),
  };
});

describe('VisitsDependanciesFactory', () => {
  it('should create an instance of DbVisitsService', () => {
    const visitsService = VisitsDependanciesFactory.getVisitsService();
    expect(visitsService).toBeInstanceOf(DbVisitsService);
  });
});

