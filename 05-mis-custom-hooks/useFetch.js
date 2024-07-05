import { useEffect, useState } from "react"

const localCache = {}

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    useEffect(() => {
        getFetch();

    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    const getFetch = async() => {

        //Verificar si la data ya está en cache
        if(localCache[url]) {
            console.log("Usando cache")
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        }

        setLoadingState(); //Limpiar los valores y cargar
        const resp = await fetch(url)

        await new Promise(resolve => setTimeout(resolve, 1500))

        if(!resp.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                }
            })

            return;
        }

        const data = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })
        
        //Manejar el cache
        localCache[url] = data
        
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
