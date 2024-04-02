export interface SynchronisationDto {
  rc: string;
  rm: string;
  rd: {
    cs: {
      id: string;
      cp: string;
      no: string;
      ac: boolean;
      py: string; //pays
      vl: string; //ville
      sr: number;
      ref: string;
      org: string;
      ol_name: string;
      org_lft: number;
      org_rgt: number;
      osc: string;
      pid: string;
      piid: string;
      st: number;
      idass: number;
      ad: string;
    }[];
    ocs: {
      id: number;
      no: string;
      co: string;
      ac: boolean;
      py: string; //pays
      vl: string; //ville
      sr: number;
      ref: string;
      org: string;
      ol_name: string;
      org_lft: number;
      org_rgt: number;
      osc: boolean;
      pid: number;
      piid: number;
      st: number;
      idass: number;
      ad: string;
    }[];
    au: {
      id: string;
      fn: string;
      ln: string;
      em: string;
      idVisite: string;
      fullnameLowerCase: string;
      ac: boolean;
      ol: string;
      prId: string;
    }[];
    lus: string;
  };
}
