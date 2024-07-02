import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export const Memorize = () => {

    const {counter, increment} = useCounter(7)
    const [show, setShow] = useState(true);

  return (
    <>
        <Small value={counter}/>
        <hr />

        <button className="btn btn-primary" onClick={() => increment()}>
            +1
        </button>

        <button className="btn btn-primary" onClick={() => setShow(!show)}>
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
