import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHooks = () => {

    const [counter, setCounter] = useState(10);

    //ayuda a memorizar funciones
    const incrementFather = useCallback(
      () => {
        setCounter((value) => value + 1)
      },
      [],
    )
    

    // const incrementFather = () => {
    //     setCounter(counter + 1)
    // }

  return (
    <>
        <h1>useCallback Hooks: {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementFather} />
    </>
  )
}
