import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer"
import { types } from "../types/types"

// const initialState = {
//     logged: false
// }

const init = () => {
  const user = JSON.parse(localStorage.getItem('user')) //Buscar el user en el localStorage
  
  return {
    logged: !!user,
    user: user,
  }
}
export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(AuthReducer, {}, init)

    const login = (name = '') => {

      const user = {
          id: 123,
          name
      }
      const action = {
        type: types.login,
        payload: user
      }

      localStorage.setItem('user', JSON.stringify(user)) //Mandar el usuario al localStorage

      dispatch(action)
    }

    const logout = () => {
      localStorage.removeItem('user');

      const action = {
        type: types.logout,
      }

      dispatch(action)
    }

  return (
    <AuthContext.Provider value={{...authState, login: login, logout: logout }}>
        {children}
    </AuthContext.Provider>
  )
}
