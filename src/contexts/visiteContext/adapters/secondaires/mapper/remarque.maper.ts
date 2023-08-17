import { Remarque } from "@common/adapters/secondaries/db/entity/Remarque";
import { VisitRemarque } from "@contexts/visiteContext/domain/entity/VisitRemarque";

export class RemarqueMapper {

    static mapToVisitRemarque(remarques: Remarque[]): VisitRemarque[] {
        return remarques.map(remarque => new VisitRemarque(
            remarque.dt,
            remarque.ds,
            remarque.tk,
            remarque.lvl,
            remarque.nt,
            remarque.photos
        ));
    }
}
