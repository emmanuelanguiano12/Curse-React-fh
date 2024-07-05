import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = []
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [] //intenta parsear los todos, si no manda un arreglo vacio
}

export const useTodo = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] AddTodo',
            payload: todo
        }

        dispatchTodo(action) //agrega el detonante con el action para agregar el arreglo
    }

    const handleDeleteTodo = (id) => {
        // console.log(id)
        dispatchTodo({
            type: '[TODO] RemoveTodo',
            payload: id
        })
    }

    const handleToggleTodo = (id) =>{
        // console.log(id)
        dispatchTodo({
            type: '[TODO] ToggleTodo',
            payload: id
        })
    }

    const todosCount = todos.length;
    const todosPendingCount = todos.filter(todo => !todo.done).length;


    return {
        todos,
        todosCount,
        todosPendingCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}