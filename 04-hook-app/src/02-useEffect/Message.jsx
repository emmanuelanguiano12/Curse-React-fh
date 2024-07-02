import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {

        const onMouseMove = ({x,y}) => {
            setCoords({x,y})
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove) //Limpia el evento
        };
    }, []);

  return (
    <>
        <h3>Usuario ya existente</h3>
        <h3>{JSON.stringify(coords)}</h3>
    </>
  )
}
