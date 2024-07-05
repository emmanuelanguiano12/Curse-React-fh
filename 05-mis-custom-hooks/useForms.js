import { useState } from "react";

export const useForms = (initialForm = {}) => {
    const [ formState, setFormState ] = useState(initialForm);

    const onInputChangue = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [ name ]: value //la propiedad name del input cambia al value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState, //traer el objeto para hacer más fácil la desestructuración
        formState,
        onInputChangue,
        onResetForm,
    }
}
