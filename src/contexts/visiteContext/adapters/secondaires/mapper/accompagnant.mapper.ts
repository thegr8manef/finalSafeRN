import { Accompagnants as AccompagnantDomaine } from "@contexts/visiteContext/domain/entity/Accompagnant";
import { AccompagnantDto } from "../dto/accompagnant.dto";
import { Accompagnant as AccompagnantDB } from "@common/adapters/secondaries/db/entity/Accompagnant";

export class AccompagnantMapper {

    static mapAccompagnant(accompagnantDto: AccompagnantDto[]): AccompagnantDomaine[] {
        const _accompagnanats: AccompagnantDomaine[] = accompagnantDto.map(req => {

        return new AccompagnantDomaine(
            req.id || "",
            req.fn || "",
            req.ln || "",
            req.em || "",
            req.idVisite || "",
            req.fullnameLowerCase || "",
            req.ac || false,
            req.ol || "",
            req.prId || ""
            

        );
    });
    return _accompagnanats;
    }

    static mapAccompanantToAccompanantDB(accompagnant: AccompagnantDomaine): AccompagnantDB {
        return {
            ac: accompagnant.ac,
            em: accompagnant.em,
            fn: accompagnant.fn,
            id: accompagnant.id.toString(),
            ln: accompagnant.ln,
        } as AccompagnantDB;
    }
}
