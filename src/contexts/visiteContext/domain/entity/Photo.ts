export class Photo {
  // id?: string;
  Name?: string; // empty
  path?: string; // empty
  idRemarque?: string; // id remarque
  idVisite?: string; // -1
  levee?: boolean;
  or?: number; // 0
  formationId?: string; // null
  wasDrafts?: boolean;
  deleted?: boolean;
  synchEtat?: number;

  constructor(
    Name?: string,
    path?: string,
    idRemarque?: string,
    idVisite?: string,
    levee?: boolean,
    or?: number,
    formationId?: string,
    wasDrafts?: boolean,
    deleted?: boolean,
    synchEtat?: number
  ) {
    this.Name = Name;
    this.path = path;
    this.idRemarque = idRemarque;
    this.idVisite = idVisite;
    this.levee = levee;
    this.or = or;
    this.formationId = formationId;
    this.wasDrafts = wasDrafts;
    this.deleted = deleted;
    this.synchEtat = synchEtat;
  }
}
