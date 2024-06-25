
describe('Pruebas en <DemoComponent/>', () => { 
    test('Esta prueba no debe de fallar', () => {
        // 1. Arrange (preparar)
        const message1 = 'Hola Mundo';
        // 2. Act (Actuar)
        const message2 = message1.trim();
        // 3. Assert (Afirmar)
        // expect(message1).toBe(message2); //message 1 y message deben de ser iguales (toBe)
        expect(message1).toBe(message2)
    });
 })

 
// describe('Pruebas en <DemoComponent2/>', () => { 
//     test('Esta prueba debe de fallar', () => {
//         // 1. Arrange (preparar)
//         const message1 = 'Hola Mundo';
//         // 2. Act (Actuar)
//         const message2 = message1.trim();
//         // 3. Assert (Afirmar)
//         // expect(message1).toBe(message2); //message 1 y message deben de ser iguales (toBe)
//         expect(message1).toBe(message2)
//     });
//  })

