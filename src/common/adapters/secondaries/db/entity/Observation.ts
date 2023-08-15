export class Observation extends Realm.Object<Observation> {
    token?: string;
    tokenQuestion?: string;
    parentQuestionToken?: string;
    idCS?: string;
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