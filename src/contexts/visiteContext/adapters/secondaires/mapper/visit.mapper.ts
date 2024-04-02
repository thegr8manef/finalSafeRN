import { Visit as VisitDb } from "@common/adapters/secondaries/db/entity/Visit";
import { Visit as VisitDomaine } from "@contexts/visiteContext/domain/entity/Visit";
import { Remarque } from "@common/adapters/secondaries/db/entity/Remarque";
import { VisitRemarque } from "@contexts/visiteContext/domain/entity/VisitRemarque";
import { Observation } from "@common/adapters/secondaries/db/entity/Observation";
import { VisitObservation } from "@contexts/visiteContext/domain/entity/VisitsObservation";
import { Accompagnant } from "@common/adapters/secondaries/db/entity/Accompagnant";
import { Accompagnants } from "@contexts/visiteContext/domain/entity/Accompagnant";
import { VisitFlash } from "@contexts/visiteContext/domain/entity/VisitFlash";

export class VisitMapper {

    static mapToVisit(visit: VisitDb[]): VisitDomaine[] {
        return visit.map(visit => new VisitDomaine(
            visit.id || "",
            visit.dt || "",
            visit.dtc || "",
            visit.timeStamp || "",
            visit.date || 5,
            visit.chantier || undefined,
            visit.codeChantier || "",
            visit.InfoComplementaire || undefined,
            this.mapToVisitRemarque(visit.remarques!!), // Map the visit.remarques using RemarqueMapper
            this.mapToVisitObservation(visit.observations!!),
            this.mapToVisitAccompagnants(visit.accompagnants!!),
            visit.V_enCours || 0,
            visit.pointToImprove || undefined,
            visit.strongPoint || undefined,
            visit.ordre || 0,
            visit.userId || "",
            visit.dateVisite || "",
            visit.type || 0,
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
    static mapToVisitObservation(observations: Observation[]): VisitObservation[] {
        
        return observations.map(observation => new VisitObservation(
            observation.token || "",
            observation.tokenQuestion || "",
            observation.parentQuestionToken || "",
            observation.idCS || "",
            observation.listPhotos || undefined,
            observation.responseId || 1,
            observation.ordre || 1,
            observation.VId || "",
            observation.commentaire || "",
            observation.dt || "",
            observation.title || "",
            observation.unq || false,
            observation.remarqueID || ""
        ));
    }
    static mapToVisitAccompagnants(accompagnants: Accompagnant[]): Accompagnants[] {
        
        return accompagnants.map(accompagnant => new Accompagnants(
            accompagnant.id || "",
            accompagnant.fn || "",
            accompagnant.ln || "",
            accompagnant.em || "",
            accompagnant.idVisite || "",
            accompagnant.fullnameLowerCase || "",
            accompagnant.ac || true,
            accompagnant.ol || "",
            accompagnant.prId || ""
        ));
    }


}

