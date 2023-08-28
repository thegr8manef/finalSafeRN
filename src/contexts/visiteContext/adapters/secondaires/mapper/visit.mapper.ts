import { Visit as VisitDb } from "@common/adapters/secondaries/db/entity/Visit";
import { Visit as VisitDomaine } from "@contexts/visiteContext/domain/entity/Visit";
import { Remarque } from "@common/adapters/secondaries/db/entity/Remarque";
import { VisitRemarque } from "@contexts/visiteContext/domain/entity/VisitRemarque";

export class VisitMapper {

    static mapToVisit(visit: VisitDb[]): VisitDomaine[] {
        return visit.map(visit => new VisitDomaine(
            visit.type || 0,
            visit.id || "",
            visit.codeChantier || "",
            visit.dt || "",
            this.mapToVisitRemarque(visit.remarques!!), // Map the visit.remarques using RemarqueMapper
            visit.chantier
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

