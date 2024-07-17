import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [formValidation, setFormValidation] = useState({});
    const [ formState, setFormState ] = useState( initialForm );

    useEffect(() => {

        createValidators()

    }, [formState]);

    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) { //barrer todas las opciones que tiene el formValidation
            /* si formValidation con la dependencia formValue es diferente a null (o sea que tiene un string)
            regresa un false */
            if(formValidation[formValue] !== null) return false;
        }

        return true

    }, [formValidation])

    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });

    }

    const onResetForm = () => {

        setFormState( initialForm );

    }

    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField]

            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues)
        // console.log(formCheckedValues)

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid,
    }
}