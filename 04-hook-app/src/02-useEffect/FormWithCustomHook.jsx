import { useForms } from "../hooks/useForms"

export const FormWithCustomHook = () => {

    const { onInputChangue, username, email, password, onResetForm} = useForms({
        username: '',
        email: '',
        password: '',
    })

    // const {username, email, password} = formState

  return (
    <>
        <h1>Formulario con Custom Hook</h1>
        <hr />
        <input type="text" 
            className="form-control" 
            placeholder="Username" 
            name="username" 
            value={username} 
            onChange={onInputChangue}
        />

        <input type="text" 
            className="form-control mt-2" 
            placeholder="emmanuel@example.com" 
            name="email" 
            value={email}
            onChange={onInputChangue}
        />

        <input type="password" 
            className="form-control mt-2" 
            placeholder="Contraseña" 
            name="password" 
            value={password}
            onChange={onInputChangue}
        />

        <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
    
    </>
  )
}
