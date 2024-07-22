import React from 'react'

export const getEnvironments = () => {
    import.meta.env

    return{
        ...import.meta.env
    }
}
