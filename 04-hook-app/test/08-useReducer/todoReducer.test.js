import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'demo Todo',
        done: false,
    }]

    test('Debe de regresar el estado inicial', () => {
        
        const newState = todoReducer(initialState, {}) 
        expect(newState).toBe(initialState)


    });

    test('Debe de agregar un Todo', () => {

        const action = {
            type: '[TODO] AddTodo',
            payload: {
                id: 2,
                description: "Nuevo todo 2",
                done: false,
            }
        }

        const newState = todoReducer(initialState, action) 
        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)
    });

    test('Debe de eliminar un Todo', () => {
        const action = {
            type: '[TODO] RemoveTodo',
            payload: 1
        }

        const newState = todoReducer(initialState, action) 
        expect(newState.length).toBe(0)
    });

    test('Debe de realizar el cambio de todo', () => {
        const action = {
            type: '[TODO] ToggleTodo',
            payload: 1 //mandar el id a la funcion
        }

        const newState = todoReducer(initialState, action) 
        expect(newState[0].done).toBe(true)

        const newState2 = todoReducer(newState, action) 
        expect(newState2[0].done).toBe(false)
    });
    
 })