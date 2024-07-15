import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/api"

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);

    // const {data: todos, isLoading} = useGetTodosQuery();
    const {data: todo, isLoading} = useGetTodoByIdQuery(todoId);

    const nextTodo = () => {
        setTodoId(todoId + 1)
    }

    const prevTodo = () => {
        if (todoId === 1) return
        setTodoId(todoId - 1)
    }

  return (
    <>
        <h1>Todo - RTK Query</h1>
        <hr />
        <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>

        <pre>{JSON.stringify(todo)}</pre>

        <button disabled={todoId === 1} onClick={prevTodo}>
            Prev Todo
        </button>
        <button onClick={nextTodo}>
            Next Todo
        </button>

        {/* <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'Done: ' : 'Pending: '}</strong>{todo.title}
                    </li>
                ))
            }
        </ul> */}

    </>
  )
}
