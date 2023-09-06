import { FlashDto } from "@contexts/visiteContext/adapters/secondaires/dto/flash.dto";
import { FlashMapper } from "@contexts/visiteContext/adapters/secondaires/mapper/flash.mapper"
import { Photo } from "@contexts/visiteContext/domain/entity/Photo";
import { VisitFlash } from "@contexts/visiteContext/domain/entity/VisitFlash"

describe('FlashMapper test', () => {
    // prepare images
    const images: Array<Photo> = [new Photo(
        '1',
        "Test Photo",
        "/images/test.jpg",
        "12345",
        "67890",
        true,
        42,
        "abc123",
        true,
        false,
        2
    )]

    // prepare VisitFlash items before mapping
    let flash1 = new VisitFlash('0', "comment", images, 0, "site_id", 0);
    let flash2 = new VisitFlash('1', "comment", images, 1, "site_id", 1);
    const data: VisitFlash[] = [flash1, flash2]


    it('FlashMapper map to db test equality', () => {
        const flashMapper: FlashDto[] = data.flatMap(item => FlashMapper.mapTodb(item))
        flashMapper.flatMap((item: FlashDto, index) => {
            expect(item.VisiteId).toEqual(data[index].VisiteId)
            expect(item.VisiteIdLevee).toEqual(data[index].VisiteIdLevee)
            expect(item.completed).toEqual(data[index].completed)
            expect(item.ds).toEqual(data[index].ds)
            expect(item.dt).toEqual(data[index].dt)
            expect(item.dtl).toEqual(data[index].dtl)
            expect(item.fromObs).toEqual(data[index].fromObs)
            expect(item.idcs).toEqual(data[index].idcs)
            expect(item.idt).toEqual(data[index].idt)
            expect(item.levee).toEqual(data[index].levee)
            expect(item.lvl).toEqual(data[index].lvl)
            expect(item.nbPhoto).toEqual(data[index].nbPhoto)
            expect(item.note).toEqual(data[index].note)
            expect(item.nt).toEqual(data[index].nt)
            expect(item.or).toEqual(data[index].or)
            expect(item.ordreGlobal).toEqual(data[index].ordreGlobal)
            expect(item.photos).toEqual(data[index].photos)
            expect(item.pm).toEqual(data[index].pm)
            expect(item.qt).toEqual(data[index].qt)
            expect(item.tg).toEqual(data[index].tg)
            expect(item.ti).toEqual(data[index].ti)
            expect(item.tk).toEqual(data[index].tk)
            expect(item.unq).toEqual(data[index].unq)

        })
    })

})