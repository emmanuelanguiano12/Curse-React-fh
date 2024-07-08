import { Route, Routes } from "react-router"

import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"

import { Navbar } from "../ui"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRouter } from "./PublicRouter"

export const AppRouter = () => {
  return (
    <>

        <Routes>

            <Route path="/login" element={
              <PublicRouter>
                <LoginPage />
              </PublicRouter>
            } />

            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            } />


            {/* <Route path="/login" element={<LoginPage />} /> */}

            {/* Cualquier ruta que no sea login que entre para solo ver el navbar 
            y no aparezca en el login*/}
            {/* <Route path="/*" element={<HeroesRoutes />} /> */}

        </Routes>
    </>
  )
}
