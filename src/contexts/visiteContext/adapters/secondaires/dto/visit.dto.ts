import { RemarqueDto } from "./remarque.dto";

export interface Visit {
    tp? :number;
    tk? :string;
    dt?: string;
    ai?: string;
    idcs?: string;
    ac?: string;
    pp?: RemarqueDto[];

}