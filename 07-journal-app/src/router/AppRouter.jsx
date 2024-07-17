import { Route, Routes } from 'react-router'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login and register */}
        <Route path='/auth/*' element={ <AuthRoutes /> }/> {/* Cualquier path que entre por auth, va a mostrar AuthRoutes */}

        {/* Journal app */}
        <Route path='/*' element={ <JournalRoutes/> }/> {/* Ruta comodin */}
    </Routes>
  )
}
