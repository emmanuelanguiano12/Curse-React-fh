import { act, renderHook } from "@testing-library/react";
import { useForms } from "../../src/hooks/useForms";

describe('Pruebas en useForms', () => { 

    const initialForm = {
            name: 'Emmanuel',
            email: 'Emmanuel@test.mx'
    }

    test('Debe de regresar los valores por defecto', () => {

        const {result} = renderHook(() => useForms(initialForm))
        expect(result.current).toEqual({ //esperar del result.current lo siguiente
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChangue: expect.any(Function),
            onResetForm: expect.any(Function) //Esperar cualquier función
          })

    });

    test('Debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan'
        const {result} = renderHook(() => useForms(initialForm))

        const {onInputChangue} = result.current

        act(() => {
            onInputChangue({target: {name: 'name', value: newValue}})
        })

        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)
    });

    test('Debe de realizar el reset del formulario', () => {
        const newValue = 'Juan'
        const {result} = renderHook(() => useForms(initialForm))

        const {onInputChangue, onResetForm} = result.current

        act(() => {
            onInputChangue({target: {name: 'name', value: newValue}})
            onResetForm()
        })

        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
    });
    
    
 })