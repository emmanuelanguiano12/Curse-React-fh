
export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
    const {description} = todo

  return (
    <>
        <li className={"list-group-item d-flex justify-content-between"}>
            <span onClick={() => onToggleTodo(todo.id)} className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}>{description}</span>
            <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger">Borrar</button>

        </li>
    </>
  )
}
