import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas 06-deses-array', () => {
    test('usContext Debe retornar un objeto', () => {
        
        const clave = 'Emmanuel'
        const edad = 22

        const context = usContext({clave, edad})
        expect(context).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })

    });
});
