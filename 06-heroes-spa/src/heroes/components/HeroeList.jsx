import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroeCard } from './HeroeCard'

export const HeroeList = ({publisher}) => {

    //Usar useMemo para memorizar la función y que no se renderice siempre que cambia el componente
    //si no cuando cambia el publisher
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) //Se obtiene la funcion del helper que obtiene y filtra los heroes

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map(heroe => (
                <HeroeCard key={heroe.id} {...heroe} /> //Mnandar el array desestructurizado
            ))
        }
    </div>
  )
}
