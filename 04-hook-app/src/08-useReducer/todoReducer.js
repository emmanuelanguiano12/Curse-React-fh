export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] AddTodo':
            return [
                ...initialState, action.payload
                //action.payload es el newTodo
            ]
    
        case '[TODO] RemoveTodo':
            return initialState.filter( todo => todo.id !== action.payload ) //mandar el id en el payload

        case '[TODO] ToggleTodo':
            return initialState.map(todo => {
                if(todo.id === action.payload) { //ver si el id es igual al que se manda en action.payload
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                
                return todo;
            });

        default:
            return initialState;
    }

}