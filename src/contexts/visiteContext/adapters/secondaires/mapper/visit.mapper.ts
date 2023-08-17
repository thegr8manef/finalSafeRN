import { Visit } from "@common/adapters/secondaries/db/entity/Visit";
import { Visits } from "@contexts/visiteContext/domain/entity/Visits";
import { RemarqueMapper } from "./remarque.maper";

export class VisitMapper {

    static mapToVisits(visit: Visit[]): Visits[] {
        return visit.map(visit => new Visits(
            visit.type || 0,
            visit.id || "",
            visit.codeChantier || "",
            visit.dt || "",
            RemarqueMapper.mapToVisitRemarque(visit.remarques), // Map the visit.remarques using RemarqueMapper
        ));
    }
   
}

