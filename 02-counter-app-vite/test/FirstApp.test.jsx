import { render } from "@testing-library/react";
import { SecondApp } from "../src/SecondApp";

describe('Pruebas en <FirstApp />', () => { 
    test('Debe hacer match con el snapshot', () => {
        
        const title = 'Hola, soy un titulo';
        const {container} = render(<SecondApp title={title}/>)

        expect(container).toMatchSnapshot();

    });
    
    test('Debe mostrar el titulo en un h1', () => {

        const title = 'Hola, soy Emmanuel';
        const {container, getByText, getByTestId} = render(<SecondApp title={title}/>)

        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title);

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy Emmanuel';
        const subtitle = 'Hola, soy un subtitulo';
        const { getByText } = render(<SecondApp title={title} subtitle={subtitle}/>)

        expect(getByText(subtitle)).toBeTruthy();
    });
    
 })