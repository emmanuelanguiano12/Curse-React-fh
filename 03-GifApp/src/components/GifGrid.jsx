import { PropTypes } from 'prop-types';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category) //Custom hook
    
  return (
    <>
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        <h3>{category}</h3>
        <div className="card-grid">
            {
                images.map((image) => (
                    <GifItem key={image.id} title={image.title} url={image.url} />
                    
                ))
            }
        </div>
    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
