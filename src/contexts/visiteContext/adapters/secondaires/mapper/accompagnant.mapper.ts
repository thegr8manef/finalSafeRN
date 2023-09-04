import { Accompagnant as AccompagnantDomaine } from "@contexts/visiteContext/domain/entity/Accompagnant";
import { AccompagnantDto } from "../dto/accompagnant.dto";
import { Accompagnant as AccompagnantDB } from "@common/adapters/secondaries/db/entity/Accompagnant";

export class AccompagnantMapper {

    static mapAccompagnant(accompagnantDto: AccompagnantDto): AccompagnantDomaine {
        const { ac, em, fn, id, ln } = accompagnantDto;

        return new AccompagnantDomaine(
            ac || false,
            em || "",
            fn || "",
            id || 0,
            ln || ""
        );
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
