import { Photo } from "@contexts/visiteContext/domain/entity/Photo";

describe('Photo', () => {
  it('should create a Photo instance with default values', () => {
    const photo = new Photo();

    expect(photo).toBeDefined();
    expect(photo.Name).toBeUndefined();
    expect(photo.path).toBeUndefined();
    expect(photo.idRemarque).toBeUndefined();
    expect(photo.idVisite).toBeUndefined();
    expect(photo.levee).toBeUndefined();
    expect(photo.or).toBeUndefined();
    expect(photo.formationId).toBeUndefined();
    expect(photo.wasDrafts).toBeUndefined();
    expect(photo.deleted).toBeUndefined();
    expect(photo.synchEtat).toBeUndefined();
  });

  it('should set properties correctly when initialized with values', () => {
    const photoData = {
      Name: 'Test Photo',
      path: '/images/test.jpg',
      idRemarque: '12345',
      idVisite: '67890',
      levee: true,
      or: 42,
      formationId: 'abc123',
      wasDrafts: true,
      deleted: false,
      synchEtat: 2,
    };

    const photo = new Photo(
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
      );
      

    expect(photo.Name).toBe(photoData.Name);
    expect(photo.path).toBe(photoData.path);
    expect(photo.idRemarque).toBe(photoData.idRemarque);
    expect(photo.idVisite).toBe(photoData.idVisite);
    expect(photo.levee).toBe(photoData.levee);
    expect(photo.or).toBe(photoData.or);
    expect(photo.formationId).toBe(photoData.formationId);
    expect(photo.wasDrafts).toBe(photoData.wasDrafts);
    expect(photo.deleted).toBe(photoData.deleted);
    expect(photo.synchEtat).toBe(photoData.synchEtat);
  });
});
