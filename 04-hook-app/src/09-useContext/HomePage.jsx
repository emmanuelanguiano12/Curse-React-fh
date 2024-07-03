import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

  const {user} = useContext(UserContext)

  return (
    <>
        <h1>Home</h1>
        <small>Hola {user?.name}</small>
        <hr />

        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>
    </>
  )
}
