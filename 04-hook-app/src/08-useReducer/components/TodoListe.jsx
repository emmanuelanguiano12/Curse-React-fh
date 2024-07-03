import { TodoItem } from "./TodoItem"

export const TodoListe = ({todos = [], onDeleteTodo, onToggleTodo}) => {

  return (
    <>
        <ul className="list-group">
            {
                todos.map(todo => (
                    //todoItem
                    <TodoItem 
                      key={todo.id} 
                      todo={todo} 
                      onDeleteTodo={id => onDeleteTodo(id)} 
                      onToggleTodo={onToggleTodo}
                    />
                ))
            }
        </ul>
    </>
  )
}
