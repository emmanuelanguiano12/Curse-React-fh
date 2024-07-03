import { TodoListe } from "./components/TodoListe"
import { TodoForm } from "./components/TodoForm"
import { useTodo } from "../hooks"

export const TodoApp = () => {

    const { todos, todosCount, todosPendingCount, handleToggleTodo, handleDeleteTodo, handleNewTodo } =  useTodo()

  return (
    <>
        <h1>Todo APP: {todosCount}, <small>Pendientes: {todosPendingCount}</small></h1>
        <hr />

        <div className="row">
            
            <div className="col-7">
                <TodoListe todos={todos} 
                    onDeleteTodo={id => handleDeleteTodo(id)} //el id se manda desde TodoItem
                    onToggleTodo={id => handleToggleTodo(id)}
                />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />

                <TodoForm onNewTodo={handleNewTodo} />

            </div>
        </div>

    </>
  )
}
