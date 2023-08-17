import { Visit } from "@contexts/visiteContext/domain/entity/Visit";

export class VisitMapper {
    static maptoSites(visit: Visit[]): Visit[] {
        return visit.map(visit =>new Visit(
   
    
        ));
}
}