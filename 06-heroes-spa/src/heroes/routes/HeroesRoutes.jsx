import { Navigate, Route, Routes } from 'react-router'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchHeroe } from '../pages'
export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className='container'>
            <Routes>
                <Route path="/marvel" element={<MarvelPage />} />
                <Route path="/dc" element={<DcPage />} />

                <Route path="/search" element={<SearchHeroe />} />
                <Route path="/hero/:id" element={<HeroPage />} />

                <Route path="/" element={<Navigate to="/marvel" />} /> {/* HACER UNA RUTA PREDEFINIDA */}
            </Routes>
        </div>

    </>
  )
}
