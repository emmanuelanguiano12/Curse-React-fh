import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeUndefined();
    });
    

    //getHereosByOwner
    test('getHeroesByOwner debe retornar hereos por propietario (DC)', () => {
        const owner = 'DC'
        const heroe = getHeroesByOwner(owner);

        expect(heroe).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]);
    });
    

    test('getHeroesByOwner debe retornar hereos por propietario (MARVEL)', () => {
        const owner = 'Marvel'
        const heroe = getHeroesByOwner(owner);

        expect(heroe.length).toEqual(2);
    });
});
