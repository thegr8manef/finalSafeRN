import { Visit } from "@common/adapters/secondaries/db/entity/Visit";
import { Visits } from "@contexts/visiteContext/domain/entity/Visits";
import { Remarque } from "@common/adapters/secondaries/db/entity/Remarque";
import { VisitRemarque } from "@contexts/visiteContext/domain/entity/VisitRemarque";

export class VisitMapper {

    static mapToVisit(visit: Visit[]): Visits[] {
        return visit.map(visit => new Visits(
            visit.type || 0,
            visit.id || "",
            visit.codeChantier || "",
            visit.dt || "",
            this.mapToVisitRemarque(visit.remarques), // Map the visit.remarques using RemarqueMapper
        ));
    }

    static mapToVisitRemarque(remarques: Remarque[]): VisitRemarque[] {
        return remarques.map(remarque => new VisitRemarque(
            remarque.dt,
            remarque.ds,
            remarque.tk,
            remarque.lvl,
            remarque.nt,
            remarque.photos,
        ));
    }

}

