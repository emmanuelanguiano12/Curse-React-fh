import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <MainApp />', () => { 
    
    test('Debe de mostrar el componente HomePage', () => {
        
        render(
            <MemoryRouter> 
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText('About')).toBeTruthy()

        screen.debug()

    });

    test('Debe de mostrar el componente LoginPage', () => {
        
        render(
            <MemoryRouter initialEntries={['/login']}> 
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText('Login')).toBeTruthy()

        screen.debug()

    });
    
 })