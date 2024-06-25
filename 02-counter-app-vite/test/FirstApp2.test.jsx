import { render, screen } from "@testing-library/react";
import { SecondApp } from "../src/SecondApp";

describe('Pruebas en <FirstApp />', () => { 
    const title = "Hola, soy Emmanuel"
    const subTitle = "Esto es un subtitulo";

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<SecondApp title={title} />);
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar el mensaje "Hola, soy Emmanuel"', () => {
        render(<SecondApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debe de mostrar el titulo en un h1', () => {
        render(<SecondApp title={title} />);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)
    });
    
    test('Debe de mostrar el subtitulo enviadio por props', () => {
        
        render(<SecondApp title={title} subtitle={subTitle} />);
        expect(screen.getAllByText(subTitle).length).toBe(1);
    });
    
    
    
 })