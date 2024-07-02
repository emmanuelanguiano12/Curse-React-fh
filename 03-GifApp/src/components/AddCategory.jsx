import { PropTypes } from "prop-types";
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChangue = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories( (categories) => [ inputValue, ...categories ])
        setInputValue('')
        onNewCategory(inputValue.trim())
    }

  return (
    <>
        <form onSubmit={(event) => onSubmit(event)} aria-label="form">
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChangue(event)}
            />
        </form>
    </>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
