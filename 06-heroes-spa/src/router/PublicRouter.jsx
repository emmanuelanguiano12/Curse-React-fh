import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import { AuthContext } from '../auth';

export const PublicRouter = ({children}) => {
    const {logged} = useContext(AuthContext);

  return (!logged)
    ? children //Si está autenticado muestra los hijos y no deja salir al login (La rutas privadas)
    : <Navigate to="/marvel" /> //Si no manda a la página principal 
}
