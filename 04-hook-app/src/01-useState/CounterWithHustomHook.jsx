import { useCounter } from "../hooks/useCounter"

export const CounterWithHustomHook = () => {

    const {counter, increment, decrement, resetValue} = useCounter(20);

  return (
    <>
        <h1>Counter with Hook: {counter}</h1>
        <hr />
        {/*Si se manda un evento solo se pone la funcion
          pero si se manda con un valor debe de ponerse la función de callback con el valor
        */}
        <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
        <button className="btn btn-primary" onClick={resetValue}>reset</button>
        <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
    </>
  )
}
