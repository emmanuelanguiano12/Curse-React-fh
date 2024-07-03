

//Reducer with InitialState
const InitialState = [{
    id: 1,
    todo: 'Pasar SA Professional',
    done: false,
}]

//recibe 2 argumentos (state y action)
const todoReducer = (state = InitialState, action = {}) => {

    if(action.type === '[TODO] add todo') { //comparar el tipo de la accion
        //! Nunca hacer el .push!!
        return [...state, action.payload]; //retornar el state con el nuevo payload (todo)
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Ir al gym',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction )

console.log({state: todos})