import { Navigate, Route, Routes } from 'react-router'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui'
import { useCheckAuth } from '../hooks'

export const AppRouter = () => {

  const status = useCheckAuth()

  if(status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {
        status === "authenticated" 
        ? <Route path='/*' element={ <JournalRoutes/> }/> 
        : <Route path='/auth/*' element={ <AuthRoutes /> }/> 
      }

      <Route path='/*' element={<Navigate to='/auth/login' />} />
        {/* Login and register */}
        {/* <Route path='/auth/*' element={ <AuthRoutes /> }/> Cualquier path que entre por auth, va a mostrar AuthRoutes */}

        {/* Journal app */}
        {/* <Route path='/*' element={ <JournalRoutes/> }/> Ruta comodin */}
    </Routes>
  )
}
