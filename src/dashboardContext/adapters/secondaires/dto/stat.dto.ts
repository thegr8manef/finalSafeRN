export interface StatDto {
  rc: string;
  rm: string;
  rd: {
    srk: {
      'r-0': {
        to: string;
        pct: number;
      };
      'r-1': {
        to: string;
        pct: number;
      };
      'r-2': {
        to: string;
        pct: number;
      };
      others: number;
    };
    svt: {
      vf: number;
      vh: number;
      vc: number;
      vp: number;
      tv: number;
    };
    sob: {
      ol: number;
      onl: number;
      to: number;
      oc: number;
      op: number;
      ocp: number;
      onc: number;
      on: number;
      oncn: number;
      pol: number;
    };
    su: {
      tvc: number;
    };
    scp: {
      rg: {
        id: number;
        ti: string;
        pid: number;
        piid: null;
        or: number;
      }[];
      sas: {
        id: number;
        ac: boolean;
        ti: string;
        pid: number;
        or: number;
        lvl: number;
      }[];
      etb: {
        id: number;
        ac: boolean;
        ti: string;
        pid: number;
        or: number;
        lvl: number;
      }[];
    };
  };
}
