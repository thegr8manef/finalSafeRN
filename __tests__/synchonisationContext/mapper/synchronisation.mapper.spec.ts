import { SynchronisationDto } from "../../../src/synchronisationContext/adapters/secandaires/dto/synchronisationDto";
import { SynchronisationMapper } from "../../../src/synchronisationContext/adapters/secandaires/mapper/synchronisationMapper";
import { Chantier } from "../../../src/visiteContext/domain/entity/Chantier"

describe('Integration synchronisation Mapper', () =>{
    let chantierList: Chantier[];
    let synchronisationData : SynchronisationDto
    beforeEach(() =>{
        synchronisationData ={rc:'',
            rm:'',
            rd: {
              cs: [{id:666,
            no:"Chantier de test Mobelite (B-B1) (Titre très long)",
            ac:true,
            co:"",
            sr:1,
            ad:"",
            ref:"744DF9D7",
            org:224,
            ol_name:"ETS EIC TEST B 1",
            org_lft:342,
            org_rgt:343,
            osc:"true",
            pid:223,
            piid:219
        },
        {id:1870,
            no:"Chantier de test YBS",
            ac:true,
            co:"",
            sr:0,
            ad:"",
            ref:"B76F57B6",
            org:225,
            ol_name:"ETS EIC TEST B 2",
            org_lft:344,
            org_rgt:345,
            osc:"true",
            pid:223,
            piid:219}],
        ocs:[]}}
        chantierList = [new Chantier('666',
         "Chantier de test Mobelite (B-B1) (Titre très long)",
         '', -1,true,'','','',1,-1,[],"744DF9D7","ETS EIC TEST B 1", "true",'223','219'),
         new Chantier('1870',
         "Chantier de test YBS",
         '', -1,true,'','','',0,-1,[],"B76F57B6","ETS EIC TEST B 2", "true",'223','219')
        ]
    })

    it('shoud map synchronisation data to chantier List', () =>{
        expect(SynchronisationMapper.mapperToChanties(synchronisationData).length).toEqual(2)
        const chantier1 = SynchronisationMapper.mapperToChanties(synchronisationData)[0]
        expect(chantier1.id).toEqual(chantierList[0].id)
        expect(chantier1.name).toEqual(chantierList[0].name)
        expect(chantier1.address).toEqual(chantierList[0].address)
        expect(chantier1.type).toEqual(chantierList[0].type)
        expect(chantier1.accepted).toEqual(chantierList[0].accepted)
        expect(chantier1.code_postal).toEqual(chantierList[0].code_postal)
        expect(chantier1.pays).toEqual(chantierList[0].pays)
        expect(chantier1.ville).toEqual(chantierList[0].ville)
        expect(chantier1.st).toEqual(chantierList[0].st)
        expect(chantier1.last_update).toEqual(chantierList[0].last_update)
        expect(chantier1.reference).toEqual(chantierList[0].reference)
        expect(chantier1.region_name).toEqual(chantierList[0].region_name)
        expect(chantier1.osc).toEqual(chantierList[0].osc)
        expect(chantier1.pid).toEqual(chantierList[0].pid)
        expect(chantier1.piid).toEqual(chantierList[0].piid)
    })
})