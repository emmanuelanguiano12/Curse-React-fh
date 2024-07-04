import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react";

describe('Pruebas en el useCounter', () => { 

    test('Debe de retornar los valores por defecto', () => {
        
        const {result} = renderHook(() => useCounter()) //renderizar el hook
        const {counter, increment, decrement} = result.current; //desestructurar los valores del array

        expect(counter).toBe(10)
        expect(increment).toEqual(expect.any(Function)) //esperar que sea una funcion cualquiera
        expect(decrement).toEqual(expect.any(Function)) //esperar que sea una funcion cualquiera

    });

    test('Debe de generar el valor del counter de 100', () => {
        const {result} = renderHook(() => useCounter(100)) //renderizar el hook
        const {counter} = result.current;

        expect(counter).toBe(100) //esperar el 100 que se mandó
    });

    test('Debe de incrementar el contador', () => {
        const {result} = renderHook(() => useCounter()) //renderizar el hook
        const {increment} = result.current; //desestructurar los valores del array

        act(() => {
            increment() //Mandar a llama la función a probar dentro de un act
        }) 

        expect(result.current.counter).toBe(11)

    });
    
    test('Debe de decrementar el contador', () => {
        const {result} = renderHook(() => useCounter(100)) //renderizar el hook y mandar un valor
        const {decrement} = result.current; //desestructurar los valores del array

        act(() => {
            decrement() //Mandar a llama la función a probar dentro de un act
        }) 

        expect(result.current.counter).toBe(99)

    });

    test('Debe de resetear el contador', () => {
        const {result} = renderHook(() => useCounter()) //renderizar el hook
        const {resetValue, counter, decrement} = result.current; //desestructurar los valores del array

        act(() => {
            decrement() //decrementar para después resetear
            resetValue() //Mandar a llama la función a probar dentro de un act
        }) 

        expect(result.current.counter).toBe(counter)

    });
    
 })