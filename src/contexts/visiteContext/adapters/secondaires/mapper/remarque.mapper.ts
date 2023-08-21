import { Remarque } from "@common/adapters/secondaries/db/entity/Remarque";
import CustomRemarque  from "@contexts/visiteContext/domain/entity/Remarque";

export class RemarqueMapper {

    static mapperToRemarques(remarques: Remarque[]): CustomRemarque[] {
        const _remarques: CustomRemarque[] = remarques.map(req => {
            return new CustomRemarque(
                req.tk!!,
                req.dt!!,
                req.ds!!,
                req.lvl!!,
                Number(req.note),
                req.photos || []
            );
        });
        return _remarques;
    }
    
}