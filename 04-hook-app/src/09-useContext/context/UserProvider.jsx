import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

    // const user = {
    //     id: 123,
    //     name: 'Emmanuel',
    //     email: 'emma@test.com'
    // }

    const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user, setUser}}> 
    {/* El value es lo que cualquier hijo (UserProvider) va a poder obtener */}
        {children}
    </UserContext.Provider>
  )
}
