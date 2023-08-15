import { Accompagnant } from "./Accompagnant";
import { Chantier } from "./Chantier";
import { Observation } from "./Observation";
import { PointToImprove } from "./PointToImprove";
import { Remarque } from "./Remarque";
import { StrongPoint } from "./StrongPoint";

export class Visit extends Realm.Object<Visit> {
    id?: string;
    dt?: string;
    dtc?: string;
    timeStamp?: string;
    date?: number;
    chantier?: Chantier;
    codeChantier?: string;
    InfoComplementaire?: string;
    remarques?: Remarque[];
    observations?: Observation[];
    accompagnants?: Accompagnant[];
    V_enCours?: number;
    pointToImprove?: PointToImprove[];
    strongPoint?: StrongPoint[];
    ordre?: number;
    userId?: string;
    dateVisite?: string;
    type?: number;
}