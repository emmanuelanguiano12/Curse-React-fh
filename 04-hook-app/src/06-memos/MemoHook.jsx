import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = (initialStuff = 100) => {
  for(let i = 1; i < initialStuff; i++) {
    console.log("Proceso")
  }
}

export const MemoHook = () => {

    const {counter, increment} = useCounter(4000)
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]) //Memorizar la función con el valor para que solo cambie en el +1 [counter]

  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />

        <h4>{memorizedValue}</h4>

        <button className="btn btn-primary" onClick={() => increment()}>
            +1
        </button>

        <button className="btn btn-primary" onClick={() => setShow(!show)}>
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
