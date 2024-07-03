import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { Login } from "./Login"
import { AboutPage } from "./AboutPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
        {/* Aquí se obtiene el provider */}
        <h1>Main APP</h1>
        <Navbar />
        <hr />


        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<AboutPage />} />

            {/* <Route path="/*" element={<Login />} /> */}
            <Route path="/*" element={<Navigate to="/about" />} /> {/* MOVER A ESA RUTA CUANDO NO SE ENCUENTRE */}


        </Routes>
    </UserProvider>
  )
}
