import ApplicationContext from "@common/appConfig/ApplicationContext";
import { DBStatsRepository } from "@contexts/statisticContext/adapters/secondaires/dbStatsRepository";
import { Stat } from "@contexts/statisticContext/domain/entity/Stat";
import { StatObservation } from "@contexts/statisticContext/domain/entity/statObservation";
import { StatRisk } from "@contexts/statisticContext/domain/entity/statRisk";
import { StatVisit } from "@contexts/statisticContext/domain/entity/statVisit";
import { realmInstance } from "../../../configuration/mocks/realm.mock";
import { firstValueFrom } from "rxjs";
import { StatMapper } from "@contexts/statisticContext/adapters/secondaires/mapper/stat.mapper";

jest.mock("@common/appConfig/ApplicationContext");

describe('DBStatsRepository Tests', () => {
    let statsRepository: DBStatsRepository;
    const statRisk = new StatRisk(
        { label: 'Low', value: 10 },
        { label: 'Medium', value: 20 },
        { label: 'High', value: 30 },
        { label: 'Very High', value: 40 },
    );
    const statVisit = new StatVisit(
        10,
        20,
        30,
        40,
        100,
    );

    const statObservation = new StatObservation(
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        90,
        100,
    );
    const stat = new Stat(
        statRisk,
        statVisit,
        statObservation,
        1,
        1590402837,
    );

    beforeEach(() => {
        statsRepository = new DBStatsRepository();

        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.resolve(realmInstance))
        });
    })

    it('should save stats to local DB', async () => {

        await firstValueFrom(statsRepository.saveStats(stat))
        const retrievedStat: Stat = StatMapper.mapStatisticToStat(realmInstance.objects('Statistic')[0])

        expect(retrievedStat.dateSynchro).toEqual(stat.dateSynchro)
        expect(retrievedStat.statUser).toEqual(stat.statUser)
        expect(retrievedStat.statVisit.visitNumber).toEqual(stat.statVisit.visitNumber)
        expect(retrievedStat.statObservation.observationNumber).toEqual(stat.statObservation.observationNumber)
        expect(retrievedStat.statRisk.risk0).toEqual(stat.statRisk.risk0)
    })

    it('should handle errors in save stats', async () => {
        const errorMessage = 'Mocked error';
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(errorMessage)))
        });

        try {
            await firstValueFrom(statsRepository.saveStats(stat));
        } catch (error: any) {
            expect(error.message).toBe(errorMessage);
        }
    })

    it('should load local stats', async () => {
        await firstValueFrom(statsRepository.loadLocalStats())

        const retrievedStat: Stat = StatMapper.mapStatisticToStat(realmInstance.objects('Statistic')[0])

        expect(retrievedStat.dateSynchro).toEqual(stat.dateSynchro)
        expect(retrievedStat.statUser).toEqual(stat.statUser)
        expect(retrievedStat.statVisit.visitNumber).toEqual(stat.statVisit.visitNumber)
        expect(retrievedStat.statObservation.observationNumber).toEqual(stat.statObservation.observationNumber)
        expect(retrievedStat.statRisk.risk0).toEqual(stat.statRisk.risk0)
    })

    it('should handle errors in loadLocalStats', async () => {
        const errorMessage = 'Mocked error';
        (ApplicationContext.getInstance as jest.Mock).mockReturnValue({
            db: jest.fn(() => Promise.reject(new Error(errorMessage)))
        });

        try {
            await firstValueFrom(statsRepository.loadLocalStats())
        } catch (error: any) {
            expect(error.message).toBe(errorMessage);
        }
    })
})
