import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => {
        
        render(<AddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Hola' } }) 
        expect(input.value).toBe('Hola')

        //screen.debug()

    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Emmanuel';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />) //Sujeto de pruebas
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: {inputValue} } }) //cambiar valor con un evento en el input
        
        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar el onNewCategory si está vacio el input', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />) //Sujeto de pruebas
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0); //no se a llamado ninguna vez

    });
    
    
    
 })