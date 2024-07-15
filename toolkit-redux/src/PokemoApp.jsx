import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"

export const PokemoApp = () => {

  const dispatch = useDispatch()

  //esto manda a llamar los valores de el archivo de thunks
  const {isLoading, pokemons = [], page} = useSelector(state => state.pokemons) //store.js

  useEffect(() => {
    dispatch(getPokemons()); //pagina opcional
  }, [])

  return (
    <>
        <h1>Pokemon App</h1>
        <hr />

        <span>Loading: {isLoading ? 'true' : 'false'}</span>

        <ul>
          {
            pokemons.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))
          }
        </ul>
        <button
          disabled={isLoading}
          onClick={() => dispatch(getPokemons(page))}
        >
          Next
        </button>
    </>
  )
}
