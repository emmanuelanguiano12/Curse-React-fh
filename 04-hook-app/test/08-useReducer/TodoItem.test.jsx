import { act, fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/components/TodoItem"

describe('Pruebas en <TodoItem />', () => { 

    const todo = {
        id: 1,
        description: 'Ir al gym',
        done: false,
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrar el Todo pendiente de completar', () => {
        
        //rendierizar el componente
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />)

        //obtener el elemento html
        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        
    });

    test('debe de mostrar el Todo completado', () => {

        todo.done = true
        
        //rendierizar el componente
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />)

        //obtener el elemento html
        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
        
    });
    

    test('Span debe de llamar al ToggleTodo cuando se hace click', () => {
        
        //rendierizar el componente
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />)

        //sujeto de pruebas
        const spanElement = screen.getByLabelText('span')
        //disparar el evento en el span
        fireEvent.click(spanElement)

        //esperar que el onToggleTodoMock haya sido llamado con el id del todo (1)
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
        
    });

    test('El button debe de llamar el deleteTodo', () => {
        
        //rendierizar el componente
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />)

        //sujeto de pruebas
        const buttonElmement = screen.getByLabelText('button')
        //disparar el evento en el boton
        fireEvent.click(buttonElmement)

        //esperar que el onDeleteTodoMock haya sido llamado con el id del todo (1)
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
        
    });

 })