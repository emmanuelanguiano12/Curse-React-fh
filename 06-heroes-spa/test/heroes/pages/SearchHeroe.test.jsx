import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SearchHeroe } from "../../../src/heroes/pages/SearchHeroe";

describe('Pruebas en SearchHeroe', () => { 
    test('debe de mostrarse correctamente con valores por defecto', () => {
        const {container} = render(
            <MemoryRouter>
                <SearchHeroe />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot();
    });
    
 })