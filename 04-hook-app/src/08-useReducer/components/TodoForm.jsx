import { useForms } from "../../hooks/useForms"

export const TodoForm = ({onNewTodo}) => {

    const {description, onInputChangue, onResetForm} = useForms({
        description: ''
    })

    const onSubmitChangue = (event) => {
        event.preventDefault()
        if(description.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo) //se manda newTodo al componente principal
        onResetForm();
    }
    
  return (
    <>
        <form onSubmit={onSubmitChangue}>
            <input 
                type="text" 
                placeholder="¿Qué hay que hacer?" 
                className="form-control"
                name="description" 
                value={description}
                onChange={onInputChangue}
            />
            <button type="submit" className="btn btn-outline-primary mt-2">
                Agregar TODO
            </button>
        </form>
    </>
  )
}
