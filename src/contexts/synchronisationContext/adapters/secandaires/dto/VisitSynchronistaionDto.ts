export interface VisitSynchronistaionDto {
    vs: [
        {
            tp: string,
            tk: string,
            cdcs: string,
            dt: string,
            rq: {
                dt: string,
                ds: string,
                tk: string,
                lvl: number,
                nt: number,
                md: [
                    {
                        tk : string,
                        or : number
                    }
                ]
            }
        }
    ]
}