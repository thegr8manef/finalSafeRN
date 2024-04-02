import { Site } from "@contexts/visiteContext/domain/entity/Site";
import { Accompagnant } from "./Accompagnant";
import { Chantier } from "./Chantier";
import { Observation } from "./Observation";
import { PointToImprove } from "./PointToImprove";
import { Remarque } from "./Remarque";
import { StrongPoint } from "./StrongPoint";
import Realm from 'realm';

export class Visit extends Realm.Object<Visit> {
    id?: string;
    dt?: string;
    dtc?: string;
    timeStamp?: string;
    date?: number;
    chantier?: Site;
    codeChantier?: string;
    InfoComplementaire?: string;
    remarques?: Remarque[] | undefined;
    observations?: Observation[];
    accompagnants?: Accompagnant[];
    V_enCours?: number;
    pointToImprove?: PointToImprove[];
    strongPoint?: StrongPoint[];
    ordre?: number;
    userId?: string;
    dateVisite?: string;
    type?: number;

    static schema = {
        name: 'Visit',
        primaryKey: 'id',
        properties: {
            id: 'string?',
            dt: 'string?',
            timeStamp: 'string',
            date: 'int',
            chantier: 'Chantier?',
            codeChantier: 'string?',
            InfoComplementaire: 'string?',
            remarques: 'Remarque[]',
            observations: 'Observation[]',
            accompagnants: 'Accompagnant[]',
            V_enCours: 'int',
            pointToImprove: 'PointToImprove[]',
            strongPoint: 'StrongPoint[]',
            ordre: 'int',
            userId: 'string?',
            dateVisite: 'string?',
            type: 'int',
        },
    }
}