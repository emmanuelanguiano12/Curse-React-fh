import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks";

jest.mock("../../src/hooks/useTodo.js")

describe('Pruebas en <TodoApp />', () => { 

    useTodo.mockReturnValue({
        todos: [
            {id: 1, description: 'Todo 1', done: false},
            {id: 2, description: 'Todo 2', done: true},
        ], 
        todosCount: 2, 
        todosPendingCount: 1, 
        handleToggleTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleNewTodo: jest.fn()
    });

    test('Debe de mostrar el componente correctamente', () => {
        
        //Renderiza el componente con los todos
        render(<TodoApp />)

        expect(screen.getByText('Todo 1')).toBeTruthy() //ver si existe el texto: Todo 1
        expect(screen.getByText('Todo 2')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()
        // screen.debug()

    });
    
 })