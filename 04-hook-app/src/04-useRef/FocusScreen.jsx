import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef(); //mantener una referencia y no renderizar de nuevo
    

    const onClickBtn = () => {
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={inputRef} 
            type="text" 
            placeholder="Ingrese su nombre" 
            className="form-control" 
        />

        <button onClick={onClickBtn} className="btn btn-primary mt-2">
            Set Focus
        </button>
    </>
  )
}
