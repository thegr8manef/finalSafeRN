import { Accompagnant } from "@common/adapters/secondaries/db/entity/Accompagnant";
import { Chantier } from "@common/adapters/secondaries/db/entity/Chantier";
import { Observation } from "@common/adapters/secondaries/db/entity/Observation";
import { PointToImprove } from "@common/adapters/secondaries/db/entity/PointToImprove";
import { Remarque } from "@common/adapters/secondaries/db/entity/Remarque";
import { StrongPoint } from "@common/adapters/secondaries/db/entity/StrongPoint";

export class Visit {
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
