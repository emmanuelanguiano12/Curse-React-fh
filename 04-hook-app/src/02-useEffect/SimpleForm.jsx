import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Emmanuel',
        email: 'emmanuel@example.com'
    });

    const {username, email} = formState;

    const onInputChangue = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [ name ]: value //la propiedad name del input cambia al value
        })
    }

    // useEffect(() => {
    //     console.log("Called")

    // }, []);

    // useEffect(() => {
    //     console.log("FormState changued")

    // }, [email]);

    

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />
        <input type="text" 
            className="form-control" 
            placeholder="Username" 
            name="username" 
            value={username} 
            onChange={onInputChangue}
        />

        {
            (username === 'Emmanuel2') && <Message />
        }

        <input type="text" 
            className="form-control mt-2" 
            placeholder="emmanuel@example.com" 
            name="email" 
            value={email}
            onChange={onInputChangue}
        />
    

    </>
  )
}
