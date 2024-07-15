import { pokemonApi } from "../../../api/pokemonAPI"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = (page = 0) => {
    return async(dispatch, getState) => {
        dispatch( startLoadingPokemons() )

        // TODO: Realziar petición http

        //? axios
        const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data = await resp.json();
        // console.log(data);

        dispatch( setPokemons({pokemons: data.results, page: page + 1}) ) //Enviar los pokemons como data
    }
}