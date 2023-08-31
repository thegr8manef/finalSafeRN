import Remarque from "@contexts/visiteContext/domain/entity/Remarque";

export interface ChantierDto {
  id: number;
  no: string;
  ac: boolean;
  co: string;
  sr: number;
  st: number;
  cp:string;
  ad: string;
  rq: Remarque[];
  ref: string;
  org: number;
  ol_name: string;
  org_lft: number;
  org_rgt: number;
  osc: string;
  pid: number;
  piid: number;
}