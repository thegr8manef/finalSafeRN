import { PointToImproveDto } from "./pointToImprove.dto";
import { RemarqueDto } from "./remarque.dto";
import { StrongPointDto } from "./strongPoint.dto";

export interface VisitDto {
    tp? :number;
    tk? :string;
    dt?: string;
    ai?: string;
    idcs?: string;
    ac?: string;
    pp: PointToImproveDto[],
    pn: StrongPointDto[],
    rq: RemarqueDto[],
}