import { useContext, useEffect } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router";

export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext);
    const {pathname, search} = useLocation()

    const lastPath = pathname + search;
    
    useEffect(() => {
        localStorage.setItem('lastPath', lastPath)
    }, [pathname,search])

  return (logged)
    ? children //Si está autenticado muestra los hijos (La rutas privadas)
    : <Navigate to="/login" /> //Si no manda al login (La ruta pública)
}
