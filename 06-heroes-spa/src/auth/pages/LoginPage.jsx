import { useContext } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const {login} = useContext(AuthContext);//Traer la función de login del authContext

  const navigate = useNavigate()

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Emmanuel Anguiano');

    navigate(lastPath, {
      replace: true //remplazar el historial
    })
  }

  return (
    <div className="container mt-5">
      <h1>login</h1>
      <hr />

      <button onClick={onLogin} className="btn btn-primary">
        login
      </button>
    </div>
  )
}
