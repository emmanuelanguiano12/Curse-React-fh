import { render, screen } from "@testing-library/react";
import {MultipleCustomHook} from '../../src/03-examples/MultipleCustomHook'
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch")

describe('Pruebas en <MultipleCustomHooks />', () => { 

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({data: null, isLoading: true, hasError: null})


        render(<MultipleCustomHook />)//montar sujeto de pruebas

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Información de pokemon'))

        const nextButton = screen.getByRole('button', {name: 'Siguiente'})
        // console.log(nextButton.disabled)
        expect(nextButton.disabled).not.toBeTruthy

        // screen.debug()
    });

    // test('Debe de mostrar un pokemon', () => {

    //     useFetch.mockReturnValue({data: [
    //         {
    //             id: 1, 
    //             name: 'Emmanuel', 
                
    //         }
    //     ], isLoading: false, hasError: null})

    //     render(<MultipleCustomHook />) //montar sujeto de pruebas

    //     screen.debug()

    // });
    
    
 })